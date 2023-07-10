import express from 'express';
import { getEmails, createEmail, deleteEmail } from '../controllers/emailSubscription.js';

const router = express.Router();

router.get('/', getEmails);
router.post('/create', createEmail);
router.delete('/:email/delete', deleteEmail);

export default router;
