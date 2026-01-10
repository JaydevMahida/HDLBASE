import { Request, Response, NextFunction } from 'express';
// import { auth } from '../config/firebase'; // Assuming firebase config exports 'auth'
import * as admin from 'firebase-admin';
import { UserRole, DecodedUser } from '../types';
import { AppError } from './error';

// Mock auth for now if firebase admin not fully set up or for local dev without creds
const USE_MOCK_AUTH = process.env.USE_MOCK_AUTH === 'true';

export const protect = async (req: Request, res: Response, next: NextFunction) => {

    try {
        let token: string | undefined;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')
        ) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return next(new AppError('You are not logged in. Please log in to get access.', 401));
        }

        if (USE_MOCK_AUTH) {
            // Mock verification for development speed
            // format: Bearer mock_role_uid
            const parts = token.split('_');
            const roleStr = parts[1] || 'learner'; // default to learner

            // Map string to enum
            let role = UserRole.LEARNER;
            if (roleStr.toLowerCase() === 'contributor') role = UserRole.CONTRIBUTOR;
            if (roleStr.toLowerCase() === 'admin') role = UserRole.ADMIN;

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
            let role = UserRole.LEARNER; // Default
            try {
                const db = admin.firestore();
                const userDoc = await db.collection('users').doc(decodedToken.uid).get();
                if (userDoc.exists) {
                    const userData = userDoc.data();
                    if (userData && userData.role) {
                        role = userData.role as UserRole;
                    }
                }
            } catch (dbError) {
                console.warn('Failed to fetch user role from DB, defaulting to LEARNER', dbError);
            }

            const user: DecodedUser = {
                uid: decodedToken.uid,
                email: decodedToken.email || '',
                role: role
            };

            req.user = user;
            next();
        } catch (err) {
            console.error('!!! TRACER_ERROR: Token verification failed !!!', err);
            return next(new AppError('Invalid token. Please log in again.', 401));
        }

    } catch (error) {
        next(error);
    }
};
