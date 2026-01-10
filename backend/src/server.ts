import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import app from './app';
import { connectRedis } from './config/redis';
import { initFirebase } from './config/firebase';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

const startServer = async () => {
    try {
        // Initialize services (Mock Mode handles potential failures gracefully);
        await initFirebase();
        await connectRedis();

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
