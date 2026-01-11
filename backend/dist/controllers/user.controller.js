"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserStats = exports.getUser = exports.getUsers = void 0;
const error_1 = require("../middleware/error");
const firebase_1 = require("../config/firebase");
const types_1 = require("../types");
const getUsers = async (req, res, next) => {
    try {
        const db = (0, firebase_1.getDb)();
        if (!db)
            return res.status(200).json({ status: 'success', data: [], message: 'Mock Mode - No DB' });
        const usersRef = db.collection('users');
        const snapshot = await usersRef.get();
        const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json({ status: 'success', data: users });
    }
    catch (error) {
        next(error);
    }
};
exports.getUsers = getUsers;
const getUser = async (req, res, next) => {
    try {
        const db = (0, firebase_1.getDb)();
        if (!db)
            return res.status(404).json({ status: 'error', message: 'Mock Mode - No DB' });
        const id = req.params.id;
        const userDoc = await db.collection('users').doc(id).get();
        if (!userDoc.exists) {
            return next(new error_1.AppError('No user found with that ID', 404));
        }
        res.status(200).json({ status: 'success', data: { id: userDoc.id, ...userDoc.data() } });
    }
    catch (error) {
        next(error);
    }
};
exports.getUser = getUser;
const getUserStats = async (req, res, next) => {
    try {
        const db = (0, firebase_1.getDb)();
        const userId = req.user?.uid;
        // Mock data if no DB
        if (!db || !userId) {
            return res.status(200).json({
                status: 'success',
                data: {
                    username: 'Mock User',
                    role: req.user?.role || 'learner',
                    accuracy: 85,
                    solved: 12,
                    modules: 5,
                    quizzes: 3
                }
            });
        }
        const stats = {
            username: req.user?.email || 'User',
            role: req.user?.role
        };
        if (req.user?.role === types_1.UserRole.LEARNER) {
            const resultsRef = db.collection('results');
            const query = await resultsRef.where('userId', '==', userId).get();
            let total = 0;
            let correct = 0;
            let attempts = 0;
            query.forEach(doc => {
                const data = doc.data();
                attempts++;
                total += data.total || 0;
                correct += data.score || 0;
            });
            stats.accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
            stats.solved = attempts;
        }
        else {
            // Contributor
            const modulesQuery = await db.collection('modules').where('authorId', '==', userId).get();
            const quizzesQuery = await db.collection('quizzes').where('authorId', '==', userId).get();
            stats.modules = modulesQuery.size;
            stats.quizzes = quizzesQuery.size;
        }
        res.status(200).json({ status: 'success', data: stats });
    }
    catch (error) {
        next(error);
    }
};
exports.getUserStats = getUserStats;
