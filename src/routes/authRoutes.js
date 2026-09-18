import { Router } from 'express';
import { registerUser, loginUser } from '../controller/authController.js';
import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';

const router = Router();

router.post('/auth/register', registerUserSchema, registerUser);
router.post('/auth/login', loginUserSchema, loginUser);

export default router;
