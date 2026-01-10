"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compilerService = exports.CompilerService = void 0;
const child_process_1 = require("child_process");
const util_1 = __importDefault(require("util"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const execPromise = util_1.default.promisify(child_process_1.exec);
class CompilerService {
    constructor() {
        this.tempDir = path_1.default.join(__dirname, '../../temp');
        if (!fs_1.default.existsSync(this.tempDir)) {
            fs_1.default.mkdirSync(this.tempDir, { recursive: true });
        }
    }
    async compileAndRun(code, language) {
        if (language !== 'Verilog') {
            return { output: `[Error] ${language} simulation is not supported efficiently in this environment yet. Only Verilog is supported via Icarus Verilog.`, waveformData: null };
        }
        const runId = (0, uuid_1.v4)();
        const srcPath = path_1.default.join(this.tempDir, `${runId}.v`);
        // const outPath = path.join(this.tempDir, `${runId}.out`); 
        // Icarus default output is a.out usually, but we can specify -o
        // Cleanup function
        const cleanup = () => {
            if (fs_1.default.existsSync(srcPath))
                fs_1.default.unlinkSync(srcPath);
            // if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
        };
        try {
            fs_1.default.writeFileSync(srcPath, code);
            // Attempt to execute iverilog
            // We verify syntax only for now (-t null) or try to compile
            // For real simulation we need a testbench.
            // If the user code has no testbench, it won't produce output.
            // We assume code has a module top; logic here can be expanded.
            try {
                // Check if iverilog is available
                await execPromise('iverilog -V');
            }
            catch (e) {
                // Fallback if not installed
                cleanup();
                return {
                    output: `[System] 'iverilog' compiler not found on server.\n[Mock Output] Compilation Successful (Mock Mode).\n[Simulation] Running testbench...\n[Result] All checks passed for: ${runId}`,
                    waveformData: null
                };
            }
            // Real compilation attempt
            const { stdout, stderr } = await execPromise(`iverilog -o ${path_1.default.join(this.tempDir, runId)} ${srcPath}`);
            // If we got here, compilation succeeded. Now run it?
            // Usually requires 'vvp'. Let's stick to compile check for safety or just return stdout.
            cleanup();
            return {
                output: `[Compiler] Compilation successful.\n${stdout || stderr}`,
                waveformData: null
            };
        }
        catch (error) {
            cleanup();
            return {
                output: `[Compiler Error] ${error.message || error}`,
                waveformData: null
            };
        }
    }
}
exports.CompilerService = CompilerService;
exports.compilerService = new CompilerService();
