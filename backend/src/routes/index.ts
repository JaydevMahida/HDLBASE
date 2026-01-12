import { Router } from 'express';
import userRoutes from './user.routes';
import moduleRoutes from './module.routes';
import quizRoutes from './quiz.routes';
import simulationRoutes from './simulation.routes';
import challengeRoutes from './v1/challenge.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/modules', moduleRoutes);
router.use('/quizzes', quizRoutes);
router.use('/simulation', simulationRoutes);
router.use('/challenges', challengeRoutes);

export default router;
