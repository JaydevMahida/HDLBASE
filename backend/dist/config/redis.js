"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectRedis = void 0;
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('Redis Client Connected'));
const connectRedis = async () => {
    if (process.env.USE_MOCK_REDIS === 'true') {
        console.log('Skipping Redis Connection (Mock Mode)');
        return;
    }
    try {
        if (!redisClient.isOpen) {
            await redisClient.connect();
        }
    }
    catch (error) {
        console.error('Could not connect to Redis:', error);
    }
};
exports.connectRedis = connectRedis;
exports.default = redisClient;
