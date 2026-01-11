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
exports.auth = exports.db = exports.getAuth = exports.getDb = exports.initFirebase = void 0;
const admin = __importStar(require("firebase-admin"));
const initFirebase = async () => {
    // Check if we have credentials in either file path or JSON content format
    const hasCreds = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
    if (process.env.USE_MOCK_AUTH === 'true' || !hasCreds) {
        console.log('Using Mock Auth/DB (Env var set or no credentials found) - Skipping Firebase Init');
        return;
    }
    try {
        if (admin.apps.length === 0) {
            let credential;
            // Prefer JSON content (easier for Render)
            if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
                const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
                console.log('Parameters from JSON creds - Project ID:', serviceAccount.project_id);
                credential = admin.credential.cert(serviceAccount);
            }
            else {
                // Fallback to standard file path
                credential = admin.credential.applicationDefault();
            }
            admin.initializeApp({
                credential: credential,
            });
            console.log('Firebase Admin Initialized');
        }
    }
    catch (error) {
        console.warn('Error initializing Firebase Admin (continuing in degraded mode):', error);
        // Do not throw, allow server to start
    }
};
exports.initFirebase = initFirebase;
// Export lazy getters or handle mock logic
const getDb = () => {
    if (admin.apps.length > 0)
        return admin.firestore();
    // Return a mock object or throw if accessed in mock mode without caution
    // For now, we return null or a proxy if needed, but the controllers should check mock status
    return null;
};
exports.getDb = getDb;
const getAuth = () => {
    if (admin.apps.length > 0)
        return admin.auth();
    return null;
};
exports.getAuth = getAuth;
// Keep backward compatibility if possible, but safer to force usage of getters or checks
exports.db = admin.apps.length > 0 ? admin.firestore() : {};
exports.auth = admin.apps.length > 0 ? admin.auth() : {};
