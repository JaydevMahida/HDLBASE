import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { globalErrorHandler } from './middleware/error';

import routes from './routes';

const app: Application = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(compression());
app.use(json());
app.use(urlencoded({ extended: true }));

// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Routes Mounting
app.use('/api/v1', routes);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
