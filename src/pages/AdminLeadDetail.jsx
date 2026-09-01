import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, User, MapPin, Calendar, Clock, Edit2, MessageCircle, Send } from 'lucide-react';
import Loader from '../components/ui/Loader';

const AdminLeadDetail = () => {
  const { id } = useParams();
  const [lead, setLead] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [noteSubmitting, setNoteSubmitting] = useState(false);

  useEffect(() => {
    fetchLeadDetails();
  }, [id]);

  const fetchLeadDetails = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/leads/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setLead(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (newStatus) => {
    setStatusUpdating(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/leads/${id}/status`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setLead({ ...lead, status: newStatus });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setStatusUpdating(false);
    }
  };

  const submitNote = async (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    
    setNoteSubmitting(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/leads/${id}/notes`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ note: newNote })
      });
      
      if (res.ok) {
        setNewNote('');
        fetchLeadDetails(); // Refresh to get new note
      }
    } catch (err) {
      console.error(err);
    } finally {
      setNoteSubmitting(false);
    }
  };

  if (isLoading) return <Loader text="Loading lead details..." />;
  if (!lead) return <div className="p-8 text-red-500">Lead not found.</div>;

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link to="/admin/leads" className="p-2 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-[#10263F] hover:bg-gray-50 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-[#10263F] flex items-center gap-3">
              {lead.lead_code}
              <span className={`px-2.5 py-1 text-xs rounded-full border font-bold ${
                lead.status === 'New' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                lead.status === 'Contacted' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                lead.status === 'Follow Up' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                lead.status === 'Quotation Sent' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
                lead.status === 'Converted' ? 'bg-green-50 text-green-700 border-green-200' :
                'bg-gray-50 text-gray-700 border-gray-200'
              }`}>
                {lead.status}
              </span>
            </h2>
            <p className="text-sm text-gray-500">{new Date(lead.created_at).toLocaleString()}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <select 
            value={lead.status}
            onChange={(e) => updateStatus(e.target.value)}
            disabled={statusUpdating}
            className="bg-white border border-gray-200 text-sm font-bold text-gray-700 px-4 py-2 rounded-lg focus:outline-none focus:border-[#F59E0B]"
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Follow Up">Follow Up</option>
            <option value="Site Visit Scheduled">Site Visit Scheduled</option>
            <option value="Quotation Sent">Quotation Sent</option>
            <option value="Converted">Converted</option>
            <option value="Completed">Completed</option>
            <option value="Not Interested">Not Interested</option>
            <option value="Closed">Closed</option>
            <option value="Spam">Spam</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Details */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Customer Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mt-1"><User size={18} /></div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Full Name</div>
                  <div className="font-bold text-gray-900">{lead.name}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-50 p-2 rounded-lg text-green-600 mt-1"><Phone size={18} /></div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Phone Number</div>
                  <div className="font-bold text-gray-900">{lead.phone}</div>
                </div>
              </div>
              {lead.whatsapp && (
                <div className="flex items-start gap-3">
                  <div className="bg-green-50 p-2 rounded-lg text-green-600 mt-1"><MessageCircle size={18} /></div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">WhatsApp Number</div>
                    <div className="font-bold text-gray-900">{lead.whatsapp}</div>
                  </div>
                </div>
              )}
              {lead.email && (
                <div className="flex items-start gap-3">
                  <div className="bg-orange-50 p-2 rounded-lg text-orange-600 mt-1"><Mail size={18} /></div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Email Address</div>
                    <div className="font-bold text-gray-900">{lead.email}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Enquiry Details ({lead.lead_type})</h3>
            <div className="space-y-6">
              
              {lead.service && (
                <div>
                  <div className="text-xs text-gray-500 mb-1">Service Required</div>
                  <div className="font-bold text-[#10263F] text-lg">{lead.service}</div>
                </div>
              )}
              
              {lead.location && (
                <div>
                  <div className="text-xs text-gray-500 mb-1">Location</div>
                  <div className="font-medium text-gray-800">{lead.location}</div>
                </div>
              )}

              {Object.keys(lead.data).length > 0 && (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="text-xs text-gray-500 mb-3 font-bold uppercase">Additional Data</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(lead.data).map(([key, value]) => {
                      if (!value || typeof value === 'object') return null;
                      return (
                        <div key={key}>
                          <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                          <div className="font-medium text-gray-900">{value.toString()}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {lead.data.requirement && lead.data.requirement.description && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-500 mb-1">Requirement Description</div>
                      <div className="font-medium text-gray-800 italic border-l-2 border-[#F59E0B] pl-3 py-1">"{lead.data.requirement.description}"</div>
                    </div>
                  )}
                  {lead.data.message && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-500 mb-1">Message</div>
                      <div className="font-medium text-gray-800 italic border-l-2 border-[#F59E0B] pl-3 py-1">"{lead.data.message}"</div>
                    </div>
                  )}
                </div>
              )}
              
            </div>
          </div>
          
        </div>

        {/* Right Column - Actions & Notes */}
        <div className="space-y-6">
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Quick Actions</h3>
            <div className="space-y-3">
              <a href={`tel:${lead.phone}`} className="flex items-center justify-center w-full bg-[#10263F] text-white font-bold py-2.5 rounded-lg hover:bg-blue-900 transition-colors">
                <Phone size={16} className="mr-2" /> Call Customer
              </a>
              <a href={`https://wa.me/91${lead.whatsapp || lead.phone}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-[#25D366] text-white font-bold py-2.5 rounded-lg hover:bg-green-600 transition-colors">
                <MessageCircle size={16} className="mr-2" /> Message on WhatsApp
              </a>
              {lead.email && (
                <a href={`mailto:${lead.email}`} className="flex items-center justify-center w-full bg-white border border-gray-200 text-gray-700 font-bold py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                  <Mail size={16} className="mr-2" /> Send Email
                </a>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col h-[500px]">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Admin Notes</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {lead.notes && lead.notes.length > 0 ? (
                lead.notes.map(note => (
                  <div key={note.id} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-800 whitespace-pre-wrap">{note.note}</p>
                    <div className="text-[10px] text-gray-400 mt-2 text-right">
                      {new Date(note.created_at).toLocaleString()}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-sm text-gray-400 py-8">No notes yet. Add one below.</div>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-100 bg-white">
              <form onSubmit={submitNote}>
                <textarea 
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Type a note..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#F59E0B] resize-none mb-2"
                  rows="3"
                ></textarea>
                <button type="submit" disabled={noteSubmitting || !newNote.trim()} className="w-full bg-[#F59E0B] text-white font-bold py-2 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors disabled:opacity-50">
                  <Send size={14} className="mr-2" /> Add Note
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminLeadDetail;
