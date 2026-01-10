"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSimulation = void 0;
const error_1 = require("../middleware/error");
const compiler_service_1 = require("../services/compiler.service");
const runSimulation = async (req, res, next) => {
    try {
        const { code, language } = req.body;
        if (!code) {
            return next(new error_1.AppError('No code provided', 400));
        }
        // Validate language
        if (!['Verilog', 'VHDL', 'SystemVerilog'].includes(language)) {
            return next(new error_1.AppError('Unsupported language', 400));
        }
        // Use Compiler Service (Local Fallback Strategy)
        const result = await compiler_service_1.compilerService.compileAndRun(code, language);
        res.status(200).json({
            status: 'success',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
exports.runSimulation = runSimulation;
