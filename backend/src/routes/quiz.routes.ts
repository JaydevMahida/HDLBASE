import { Router } from 'express';
import * as quizController from '../controllers/quiz.controller';
import { protect } from '../middleware/auth';
import { restrictTo } from '../middleware/rbac';
import { UserRole } from '../types';

const router = Router();

router.use(protect);

router.route('/')
    .get(quizController.getQuizzes)
    .post(restrictTo(UserRole.CONTRIBUTOR, UserRole.ADMIN), quizController.createQuiz);

router.post('/results', quizController.submitResult);

export default router;
