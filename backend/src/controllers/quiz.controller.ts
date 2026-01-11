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

        const { title, description, questions } = req.body;

        // Validation
        if (!title || !Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ status: 'error', message: 'Invalid quiz data. Title and at least one question required.' });
        }

        const newQuiz = {
            title,
            description: description || '',
            questions: questions.map((q: any) => ({
                text: q.text,
                options: q.options,
                correct: Number(q.correct),
                difficulty: q.difficulty || 'Medium'
            })),
            difficulty: 'Mixed', // You could calculate average difficulty
            createdAt: new Date().toISOString(),
            authorId: req.user?.uid || 'anonymous',
            authorName: req.user?.name || 'Contributor'
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
