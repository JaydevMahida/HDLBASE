"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = void 0;
const error_1 = require("../middleware/error");
const firebase_1 = require("../config/firebase");
const getUsers = async (req, res, next) => {
    try {
        const usersRef = firebase_1.db.collection('users');
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
        const id = req.params.id;
        const userDoc = await firebase_1.db.collection('users').doc(id).get();
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
