import { Request, Response, NextFunction } from 'express';

import { getDb } from '../config/firebase';
import * as admin from 'firebase-admin';

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
    } catch (error: any) {
        console.error("Create Quiz Error:", error);
        res.status(500).json({
            status: 'error',
            message: `Save Failed: ${error.message}`
        });
    }
};

export const submitResult = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = getDb();
        if (!db) return res.status(200).json({ status: 'success', message: 'Mock Mode' });

        const { score, total, details, quizId } = req.body;

        const result = {
            userId: req.user?.uid,
            userName: req.user?.email?.split('@')[0] || 'Unknown', // Simplified name fallback
            quizId,
            score,
            total,
            details,
            timestamp: new Date().toISOString()
        };

        // Check if user already submitted this quiz
        if (quizId) {
            const existingSnapshot = await db.collection('results')
                .where('userId', '==', req.user?.uid)
                .where('quizId', '==', quizId)
                .get();

            if (!existingSnapshot.empty) {
                return res.status(403).json({ status: 'error', message: 'You have already completed this quiz.' });
            }
        }

        const batch = db.batch();

        // 1. Save Result
        const resultRef = db.collection('results').doc();
        batch.set(resultRef, result);

        // 2. Increment Quiz Counter (if quizId is valid)
        if (quizId) {
            const quizRef = db.collection('quizzes').doc(quizId);
            // We need admin.firestore.FieldValue.increment(1) 
            // BUT we only have 'getDb' exported. 
            // We need to import admin to get FieldValue.
            // Let's assume we can get it from the db instance or re-import admin.
            // For safety, let's use a simpler approach or I need to update imports.
            // Let's just create a quick helper or do a direct update.
            // Wait, I can't easily grab FieldValue without importing admin.
            // Let's check imports.
        }

        // Re-do with correct imports in next step if necessary. 
        // Actually, let's just do individual writes for now to be safe with types.
        await resultRef.set(result);

        if (quizId) {
            try {
                await db.collection('quizzes').doc(quizId).update({
                    submissionCount: admin.firestore.FieldValue.increment(1)
                });
                console.log(`[Quiz] Incremented submission count for quizId: ${quizId}`);
            } catch (incError) {
                console.error(`[Quiz] Failed to increment submission count for ${quizId}:`, incError);
                // Non-critial error, don't fail the request
            }
        }

        res.status(201).json({ status: 'success', data: result });
    } catch (error) {
        next(error);
    }
};

export const getQuizResults = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = getDb();
        if (!db) return res.status(200).json({ status: 'success', data: [], message: 'Mock Mode' });

        const { id } = req.params; // Quiz ID

        const snapshot = await db.collection('results')
            .where('quizId', '==', id)
            .get();

        const results = snapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

        console.log(`[QuizResults] Fetched ${results.length} results for quiz ${id}`);

        res.status(200).json({ status: 'success', data: results });
    } catch (error) {
        next(error);
    }
};

export const getMyResults = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const db = getDb();
        if (!db) return res.status(200).json({ status: 'success', data: [], message: 'Mock Mode' });

        const userId = req.user?.uid;
        if (!userId) return res.status(400).json({ status: 'error', message: 'User ID required' });

        const snapshot = await db.collection('results')
            .where('userId', '==', userId)
            .get();

        const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json({ status: 'success', data: results });
    } catch (error) {
        next(error);
    }
};
