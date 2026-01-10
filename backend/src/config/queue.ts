import Queue from 'bull';

export const compilationQueue = new Queue('compilation-queue', {
    redis: process.env.REDIS_URL || 'redis://localhost:6379'
});

compilationQueue.on('error', (error) => {
    console.error('Configuration Queue Error:', error);
});

export const initQueues = () => {
    console.log('Queues initialized');
};
