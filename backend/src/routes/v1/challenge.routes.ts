import { Router } from 'express';
import { createChallenge, getAllChallenges, getChallengeById } from '../../controllers/challenge.controller';
import { protect } from '../../middleware/auth';

const router = Router();

router.get('/', getAllChallenges);
router.get('/:id', getChallengeById);

// Protected routes
router.use(protect);
router.post('/', createChallenge);

export default router;
