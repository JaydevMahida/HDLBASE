"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initQueues = exports.compilationQueue = void 0;
const bull_1 = __importDefault(require("bull"));
exports.compilationQueue = new bull_1.default('compilation-queue', {
    redis: process.env.REDIS_URL || 'redis://localhost:6379'
});
exports.compilationQueue.on('error', (error) => {
    console.error('Configuration Queue Error:', error);
});
const initQueues = () => {
    console.log('Queues initialized');
};
exports.initQueues = initQueues;
