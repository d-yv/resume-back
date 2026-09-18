import { Router } from 'express';
import {
  getAllUserData,
  getUserDataById,
  createUserData,
  updateUserData,
  deleteUserData,
} from '../controller/userDataController.js';
import { objectIdValidatorSchema } from '../validations/idValidation.js';
import { userDataSchema } from '../validations/userDataValidation.js';

const router = Router();

router.get('/userdata', getAllUserData);
router.get('/userdata/:id', objectIdValidatorSchema, getUserDataById);
router.post('/userdata', userDataSchema, createUserData);
router.patch('/userdata/:id', objectIdValidatorSchema, updateUserData);
router.delete('/userdata/:id', objectIdValidatorSchema, deleteUserData);

export default router;
