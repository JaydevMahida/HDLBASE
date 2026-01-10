import * as admin from 'firebase-admin';

export const initFirebase = async () => {
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
            } else {
                // Fallback to standard file path
                credential = admin.credential.applicationDefault();
            }

            admin.initializeApp({
                credential: credential,
            });
            console.log('Firebase Admin Initialized');
        }
    } catch (error) {
        console.warn('Error initializing Firebase Admin (continuing in degraded mode):', error);
        // Do not throw, allow server to start
    }
};

// Export lazy getters or handle mock logic
export const getDb = () => {
    if (admin.apps.length > 0) return admin.firestore();
    // Return a mock object or throw if accessed in mock mode without caution
    // For now, we return null or a proxy if needed, but the controllers should check mock status
    return null;
}

export const getAuth = () => {
    if (admin.apps.length > 0) return admin.auth();
    return null;
}

// Keep backward compatibility if possible, but safer to force usage of getters or checks
export const db = admin.apps.length > 0 ? admin.firestore() : {} as any;
export const auth = admin.apps.length > 0 ? admin.auth() : {} as any;
