"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
// import { auth } from '../config/firebase'; // Assuming firebase config exports 'auth'
const admin = __importStar(require("firebase-admin"));
const types_1 = require("../types");
const error_1 = require("./error");
// Mock auth for now if firebase admin not fully set up or for local dev without creds
const USE_MOCK_AUTH = process.env.USE_MOCK_AUTH === 'true';
const protect = async (req, res, next) => {
    try {
        let token;
        if (req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }
        if (!token) {
            return next(new error_1.AppError('You are not logged in. Please log in to get access.', 401));
        }
        if (USE_MOCK_AUTH) {
            // Mock verification for development speed
            // format: Bearer mock_role_uid
            const parts = token.split('_');
            const roleStr = parts[1] || 'learner'; // default to learner
            // Map string to enum
            let role = types_1.UserRole.LEARNER;
            if (roleStr.toLowerCase() === 'contributor')
                role = types_1.UserRole.CONTRIBUTOR;
            if (roleStr.toLowerCase() === 'admin')
                role = types_1.UserRole.ADMIN;
            req.user = {
                uid: token,
                email: `${roleStr}@mock.com`,
                role: role
            };
            return next();
        }
        // Verify token
        try {
            const decodedToken = await admin.auth().verifyIdToken(token);
            // Fetch user role from Firestore
            let role = types_1.UserRole.LEARNER; // Default
            try {
                const db = admin.firestore();
                const userDoc = await db.collection('users').doc(decodedToken.uid).get();
                if (userDoc.exists) {
                    const userData = userDoc.data();
                    if (userData && userData.role) {
                        role = userData.role;
                    }
                }
            }
            catch (dbError) {
                console.warn('Failed to fetch user role from DB, defaulting to LEARNER', dbError);
            }
            const user = {
                uid: decodedToken.uid,
                email: decodedToken.email || '',
                role: role
            };
            req.user = user;
            next();
        }
        catch (err) {
            console.error('!!! TRACER_ERROR: Token verification failed !!!', err);
            return next(new error_1.AppError('Invalid token. Please log in again.', 401));
        }
    }
    catch (error) {
        next(error);
    }
};
exports.protect = protect;
