import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  updateUserAvatar,
  deleteUser,
} from '../controller/userController.js';

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:userId', getUserById);

router.post('/users', createUser);

router.patch('/users/:id', updateUser);
router.patch('/users/me/avatar', updateUserAvatar);

router.delete('/users/:id', deleteUser);

export default router;
