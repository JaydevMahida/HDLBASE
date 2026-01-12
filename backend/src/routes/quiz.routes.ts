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

// Submit Result
router.post('/results', quizController.submitResult);

// Get My Results (Learner)
router.get('/my-results', quizController.getMyResults);

// Get Results for a specific quiz (Contributor only?)
router.get('/:id/results', restrictTo(UserRole.CONTRIBUTOR, UserRole.ADMIN), quizController.getQuizResults);

// Generate Quiz from File
const upload = require('multer')({ storage: require('multer').memoryStorage() });
router.post('/generate', restrictTo(UserRole.CONTRIBUTOR, UserRole.ADMIN), upload.single('file'), quizController.generateQuizFromDocument);

export default router;
