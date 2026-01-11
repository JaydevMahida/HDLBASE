import { Router } from 'express';
import * as simulationController from '../controllers/simulation.controller';
import { protect } from '../middleware/auth';
import { validate } from '../middleware/validate';
import Joi from 'joi';

const router = Router();

// Validation schema for running simulation
const simulationSchema = Joi.object({
    code: Joi.string().required(),
    language: Joi.string().valid('Verilog', 'VHDL', 'SystemVerilog').default('Verilog'),
    testbenchCode: Joi.string().optional().allow('')
});

router.post('/run',
    protect,
    validate(simulationSchema),
    simulationController.runSimulation
);

export default router;
