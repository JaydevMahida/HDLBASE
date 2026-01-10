import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { protect } from '../middleware/auth';
import { restrictTo } from '../middleware/rbac';
import { UserRole } from '../types';

const router = Router();

router.use(protect); // Protect all routes

router.route('/')
    .get(restrictTo(UserRole.ADMIN), userController.getUsers);

// Add this BEFORE dynamic routes like /:id to avoid conflict
router.get('/stats', userController.getUserStats);

router.route('/:id')
    .get(userController.getUser);

export default router;
