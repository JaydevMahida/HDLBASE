import { Request, Response, NextFunction } from 'express';
import { AppError } from '../middleware/error';
import { compilerService } from '../services/compiler.service';

export const runSimulation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { code, language } = req.body;

        if (!code) {
            return next(new AppError('No code provided', 400));
        }

        // Validate language
        if (!['Verilog', 'VHDL', 'SystemVerilog'].includes(language)) {
            return next(new AppError('Unsupported language', 400));
        }

        // Use Compiler Service (Local Fallback Strategy)
        const result = await compilerService.compileAndRun(code, language);

        res.status(200).json({
            status: 'success',
            data: result
        });
    } catch (error) {
        next(error);
    }
};
