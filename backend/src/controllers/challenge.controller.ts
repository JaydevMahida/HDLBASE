import { Request, Response, NextFunction } from 'express';
import { db } from '../config/firebase';
import { AppError } from '../middleware/error';

export const createChallenge = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description, difficulty, initialCode, testbench } = req.body;

        if (!title || !description || !testbench) {
            return next(new AppError('Missing required fields: title, description, and testbench are mandatory', 400));
        }

        const newChallenge = {
            title,
            description,
            difficulty: difficulty || 'Medium',
            initialCode: initialCode || '// Write your module here',
            testbench,
            authorId: req.user?.uid || 'anonymous',
            createdAt: new Date().toISOString()
        };

        const docRef = await db.collection('challenges').add(newChallenge);

        res.status(201).json({
            status: 'success',
            data: {
                id: docRef.id,
                ...newChallenge
            }
        });
    } catch (error) {
        next(error);
    }
};

export const getAllChallenges = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const snapshot = await db.collection('challenges').orderBy('createdAt', 'desc').get();
        const challenges = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            testbench: undefined // Hide testbench from list view for security/cleanliness (fetched only on specific get)
        }));

        res.status(200).json({
            status: 'success',
            data: challenges
        });
    } catch (error) {
        next(error);
    }
};

export const getChallengeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const doc = await db.collection('challenges').doc(req.params.id).get();

        if (!doc.exists) {
            return next(new AppError('Challenge not found', 404));
        }

        const data = doc.data();
        // NOTE: We send the testbench here? 
        // Ideally, the testbench should NOT be sent to the frontend if we want to prevent cheating.
        // However, for the "ChallengeRunner" to work with our current `simulation.controller` which takes `testbenchCode` in the body,
        // we might need to proxy the run request or send it to the client.
        // PLAN UPDATE: Let's keep it secure. The run endpoint should accept `challengeId` OR `testbenchCode`.
        // For now, I'll send it, assuming the client simply passes it back, but a smart user could read it.
        // BETTER APPROACH for later: `runChallenge` endpoint that fetches TB from DB.
        // For MVP: Send it. Limit complexity.

        res.status(200).json({
            status: 'success',
            data: {
                id: doc.id,
                ...data
            }
        });
    } catch (error) {
        next(error);
    }
};
