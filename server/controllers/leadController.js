import { dbAll, dbGet, dbRun } from '../config/database.js';
import { generateLeadCode } from '../utils/generateLeadCode.js';
import { sendAdminNotification, sendCustomerAutoReply } from '../services/emailService.js';

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private (Admin)
export const getLeads = async (req, res) => {
  try {
    const leads = await dbAll('SELECT * FROM leads ORDER BY created_at DESC');
    
    const formattedLeads = leads.map(lead => ({
      ...lead,
      data: lead.data ? JSON.parse(lead.data) : {}
    }));
    
    res.json(formattedLeads);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
};

// @desc    Get single lead by ID with notes
// @route   GET /api/leads/:id
// @access  Private (Admin)
export const getLeadById = async (req, res) => {
  try {
    const lead = await dbGet('SELECT * FROM leads WHERE id = ?', [req.params.id]);
    
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    const notes = await dbAll('SELECT * FROM lead_notes WHERE lead_id = ? ORDER BY created_at DESC', [req.params.id]);
    
    res.json({
      ...lead,
      data: lead.data ? JSON.parse(lead.data) : {},
      notes
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch lead details' });
  }
};

// @desc    Create new lead
// @route   POST /api/leads
// @access  Public
export const createLead = async (req, res) => {
  try {
    const { 
      name, phone, whatsapp, email, type, service, location, source, data = {}
    } = req.body;

    if (!name || !phone || !type) {
      return res.status(400).json({ success: false, message: 'Name, phone, and type are required' });
    }

    // Server-side basic validation
    if (phone.length < 10) {
      return res.status(400).json({ success: false, message: 'Valid phone number is required' });
    }

    const leadCode = await generateLeadCode();
    const dataString = JSON.stringify(data);

    const query = `
      INSERT INTO leads (lead_code, name, phone, whatsapp, email, lead_type, service, location, source, data) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const result = await dbRun(query, [
      leadCode, name, phone, whatsapp || null, email || null, type, service || null, location || null, source || 'Website', dataString
    ]);

    const newLead = {
      id: result.lastID,
      lead_code: leadCode,
      name, phone, whatsapp, email, lead_type: type, service, location,
      data: dataString
    };

    // Async Email Notifications (Disabled for Phase 1 testing)
    // sendAdminNotification(newLead);
    // if (email) {
    //   sendCustomerAutoReply(newLead);
    // }

    res.status(201).json({ 
      success: true, 
      message: 'Enquiry submitted successfully', 
      leadCode: leadCode, 
      id: result.lastID 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to create lead' });
  }
};

// @desc    Update lead status
// @route   PATCH /api/leads/:id/status
// @access  Private (Admin)
export const updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) return res.status(400).json({ error: 'Status is required' });

    const query = `UPDATE leads SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    const result = await dbRun(query, [status, req.params.id]);

    if (result.changes === 0) return res.status(404).json({ error: 'Lead not found' });
    
    res.json({ message: 'Lead status updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update lead status' });
  }
};

// @desc    Add admin note to lead
// @route   POST /api/leads/:id/notes
// @access  Private (Admin)
export const addLeadNote = async (req, res) => {
  try {
    const { note } = req.body;
    if (!note) return res.status(400).json({ error: 'Note content is required' });

    const query = `INSERT INTO lead_notes (lead_id, note) VALUES (?, ?)`;
    await dbRun(query, [req.params.id, note]);

    // Touch the lead's updated_at
    await dbRun(`UPDATE leads SET updated_at = CURRENT_TIMESTAMP WHERE id = ?`, [req.params.id]);

    res.status(201).json({ message: 'Note added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add note' });
  }
};
