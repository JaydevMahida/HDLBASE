"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const redis_1 = require("./config/redis");
const firebase_1 = require("./config/firebase");
const PORT = process.env.PORT || 5000;
const server = http_1.default.createServer(app_1.default);
const startServer = async () => {
    try {
        // Initialize services (Mock Mode handles potential failures gracefully);
        await (0, firebase_1.initFirebase)();
        await (0, redis_1.connectRedis)();
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
