import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  updateUserAvatar,
  deleteUser,
} from '../controller/userController.js';
import { objectIdValidatorSchema } from '../validations/idValidation.js';
import { userValidationSchema } from '../validations/userValidation.js';

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:userId', objectIdValidatorSchema, getUserById);

router.post('/users', userValidationSchema, createUser);

router.patch('/users/:id', objectIdValidatorSchema, updateUser);
router.patch('/users/me/avatar', userValidationSchema, updateUserAvatar);

router.delete('/users/:id', objectIdValidatorSchema, deleteUser);

export default router;
