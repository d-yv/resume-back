import { Router } from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserSession,
} from '../controller/authController.js';
import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';

const router = Router();

router.post('/auth/register', registerUserSchema, registerUser);
router.post('/auth/login', loginUserSchema, loginUser);
router.post('/auth/logout', logoutUser);
router.post('/auth/refresh', refreshUserSession);

export default router;
