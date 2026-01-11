import { Request, Response, NextFunction } from 'express';
import { AppError } from '../middleware/error';
import { compilerService } from '../services/compiler.service';

export const runSimulation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { code, testbenchCode, language } = req.body;

        // "code" is now treating as design code. "testbenchCode" is self-explanatory.
        // If only "code" is sent (legacy), we might fail or default.
        // Let's enforce both for the playground.

        if (!code) {
            return next(new AppError('No design code provided', 400));
        }

        // Validate language
        if (!['Verilog', 'VHDL', 'SystemVerilog'].includes(language)) {
            return next(new AppError('Unsupported language', 400));
        }

        // Fallback or explicit check for testbench
        const tb = testbenchCode || `module tb; initial begin $display("No testbench provided"); end endmodule`;

        // Use Compiler Service
        const result = await compilerService.compileAndRun(code, tb, language);

        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        next(error);
    }
};
