"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChallengeById = exports.getAllChallenges = exports.createChallenge = void 0;
const firebase_1 = require("../config/firebase");
const error_1 = require("../middleware/error");
const createChallenge = async (req, res, next) => {
    try {
        const db = (0, firebase_1.getDb)();
        if (!db)
            return res.status(201).json({ status: 'success', message: 'Mock Mode - Challenge Created' });
        const { title, description, difficulty, initialCode, testbench } = req.body;
        if (!title || !description || !testbench) {
            return next(new error_1.AppError('Missing required fields: title, description, and testbench are mandatory', 400));
        }
        // Check for duplicates (Case Insensitive)
        const snapshot = await db.collection('challenges').get();
        const duplicate = snapshot.docs.find((doc) => doc.data().title.toLowerCase() === title.trim().toLowerCase());
        if (duplicate) {
            return res.status(409).json({
                status: 'error',
                message: `Challenge with title "${duplicate.data().title}" already exists.`
            });
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
    }
    catch (error) {
        next(error);
    }
};
exports.createChallenge = createChallenge;
const getAllChallenges = async (req, res, next) => {
    try {
        const db = (0, firebase_1.getDb)();
        if (!db)
            return res.status(200).json({ status: 'success', data: [], message: 'Mock Mode' });
        const snapshot = await db.collection('challenges').orderBy('createdAt', 'desc').get();
        const challenges = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            testbench: undefined // Hide testbench from list view for security/cleanliness (fetched only on specific get)
        }));
        res.status(200).json({
            status: 'success',
            data: challenges
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getAllChallenges = getAllChallenges;
const getChallengeById = async (req, res, next) => {
    try {
        const db = (0, firebase_1.getDb)();
        if (!db)
            return res.status(404).json({ message: 'Mock Mode' });
        const doc = await db.collection('challenges').doc(req.params.id).get();
        if (!doc.exists) {
            return next(new error_1.AppError('Challenge not found', 404));
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
    }
    catch (error) {
        next(error);
    }
};
exports.getChallengeById = getChallengeById;
