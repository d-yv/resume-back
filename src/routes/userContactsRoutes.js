import { Router } from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from '../controller/userContactsController.js';
import { objectIdValidatorSchema } from '../validations/idValidation.js';
import { userContactsSchema } from '../validations/userContactsValidation.js';

const router = Router();

router.get('/contacts', getAllContacts);
router.get('/contacts/:id', objectIdValidatorSchema, getContactById);
router.post('/contacts', userContactsSchema, createContact);
router.patch('/contacts/:id', objectIdValidatorSchema, updateContact);
router.delete('/contacts/:id', objectIdValidatorSchema, deleteContact);

export default router;
