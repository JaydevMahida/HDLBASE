import { Request, Response, NextFunction } from 'express';

import { getDb } from '../config/firebase';

export const getQuizzes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = getDb();
        if (!db) return res.status(200).json({ status: 'success', data: [], message: 'Mock Mode' });

        const snapshot = await db.collection('quizzes').orderBy('createdAt', 'desc').get();
        const quizzes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        res.status(200).json({ status: 'success', data: quizzes });
    } catch (error) {
        next(error);
    }
};

export const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = getDb();
        if (!db) return res.status(201).json({ status: 'success', message: 'Mock Mode' });

        const { text, options, correct, difficulty } = req.body;

        const newQuiz = {
            text,
            options, // Array of strings
            correct: Number(correct), // Index
            difficulty: difficulty || 'Medium',
            createdAt: new Date().toISOString(),
            authorId: req.user?.uid || 'anonymous'
        };

        const docRef = await db.collection('quizzes').add(newQuiz);

        res.status(201).json({ status: 'success', data: { id: docRef.id, ...newQuiz } });
    } catch (error) {
        next(error);
    }
};

export const submitResult = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = getDb();
        if (!db) return res.status(200).json({ status: 'success', message: 'Mock Mode' });

        const { score, total, details } = req.body;

        const result = {
            userId: req.user?.uid,
            score,
            total,
            details,
            timestamp: new Date().toISOString()
        };

        await db.collection('results').add(result);

        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        next(error);
    }
};
