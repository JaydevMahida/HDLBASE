"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSimulation = void 0;
const error_1 = require("../middleware/error");
const compiler_service_1 = require("../services/compiler.service");
const runSimulation = async (req, res, next) => {
    try {
        const { code, testbenchCode, language } = req.body;
        // "code" is now treating as design code. "testbenchCode" is self-explanatory.
        // If only "code" is sent (legacy), we might fail or default.
        // Let's enforce both for the playground.
        if (!code) {
            return next(new error_1.AppError('No design code provided', 400));
        }
        // Validate language
        if (!['Verilog', 'VHDL', 'SystemVerilog'].includes(language)) {
            return next(new error_1.AppError('Unsupported language', 400));
        }
        // Fallback or explicit check for testbench
        const tb = testbenchCode || `module tb; initial begin $display("No testbench provided"); end endmodule`;
        // Use Compiler Service
        const result = await compiler_service_1.compilerService.compileAndRun(code, tb, language);
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
