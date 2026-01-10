import { Router } from 'express';
import * as moduleController from '../controllers/module.controller';
import { protect } from '../middleware/auth';
import { restrictTo } from '../middleware/rbac';
import { UserRole } from '../types';

const router = Router();

router.route('/')
    .get(moduleController.getModules)
    .post(protect, restrictTo(UserRole.CONTRIBUTOR, UserRole.ADMIN), moduleController.createModule);

router.route('/:id')
    .get(moduleController.getModule);

export default router;
