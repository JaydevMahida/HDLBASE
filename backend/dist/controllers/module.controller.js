"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateModule = exports.getModule = exports.createModule = exports.getModules = void 0;
const firebase_1 = require("../config/firebase");
const error_1 = require("../middleware/error");
const getModules = async (req, res, next) => {
    try {
        const db = (0, firebase_1.getDb)();
        if (!db)
            return res.status(200).json({ status: 'success', data: [], message: 'Mock Mode' });
        const snapshot = await db.collection('modules').orderBy('createdAt', 'desc').get();
        const modules = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json({ status: 'success', data: modules });
    }
    catch (error) {
        next(error);
    }
};
exports.getModules = getModules;
const createModule = async (req, res, next) => {
    try {
        const db = (0, firebase_1.getDb)();
        if (!db)
            return res.status(201).json({ status: 'success', message: 'Mock Mode - Created' });
        const { name, type, files, description, language } = req.body;
        const newModule = {
            name,
            type: type || 'IP Config',
            files: files || [], // Store array of { name, content }
            description,
            language: language || 'Verilog',
            size: '1.2 KB', // Mock size calculation
            createdAt: new Date().toISOString(),
            authorId: req.user?.uid || 'anonymous'
        };
        const docRef = await db.collection('modules').add(newModule);
        res.status(201).json({
            status: 'success',
            data: { id: docRef.id, ...newModule }
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createModule = createModule;
const getModule = async (req, res, next) => {
    try {
        const db = (0, firebase_1.getDb)();
        if (!db)
            return res.status(404).json({ message: 'Mock Mode' });
        const doc = await db.collection('modules').doc(req.params.id).get();
        if (!doc.exists)
            return next(new error_1.AppError('Module not found', 404));
        res.status(200).json({ status: 'success', data: { id: doc.id, ...doc.data() } });
    }
    catch (error) {
        next(error);
    }
};
exports.getModule = getModule;
const updateModule = async (req, res, next) => {
    try {
        const db = (0, firebase_1.getDb)();
        if (!db)
            return res.status(200).json({ status: 'success', message: 'Mock Mode - Updated' });
        const { name, language, files, description } = req.body;
        // Ensure user owns the module or is admin? (Simplification: Contributor can edit any for now, or check authorId)
        await db.collection('modules').doc(req.params.id).update({
            name,
            language,
            files,
            description,
            updatedAt: new Date().toISOString()
        });
        res.status(200).json({
            status: 'success',
            data: { id: req.params.id, ...req.body }
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateModule = updateModule;
