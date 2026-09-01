import express from 'express';
import { 
  createLead, 
  getLeads, 
  getLeadById, 
  updateLeadStatus, 
  addLeadNote 
} from '../controllers/leadController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = express.Router();

// Public route to submit lead
// Accept up to 5 file uploads under the field name 'documents'
router.post('/', upload.array('documents', 5), createLead);

// Protected Admin Routes
router.use(protect);

router.get('/', getLeads);
router.get('/:id', getLeadById);
router.patch('/:id/status', updateLeadStatus);
router.post('/:id/notes', addLeadNote);

export default router;
