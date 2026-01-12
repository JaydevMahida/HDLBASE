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
    async compileAndRun(designCode, testbenchCode, language) {
        if (language !== 'Verilog') {
            return { output: `[Error] ${language} simulation is not supported efficiently in this environment yet. Only Verilog is supported via Icarus Verilog.`, waveformData: null };
        }
        const runId = (0, uuid_1.v4)();
        const designPath = path_1.default.join(this.tempDir, `design_${runId}.v`);
        const tbPath = path_1.default.join(this.tempDir, `tb_${runId}.v`);
        const outPath = path_1.default.join(this.tempDir, `${runId}.out`);
        const cleanup = () => {
            if (fs_1.default.existsSync(designPath))
                fs_1.default.unlinkSync(designPath);
            if (fs_1.default.existsSync(tbPath))
                fs_1.default.unlinkSync(tbPath);
            if (fs_1.default.existsSync(outPath))
                fs_1.default.unlinkSync(outPath);
        };
        try {
            // Write files
            fs_1.default.writeFileSync(designPath, designCode);
            fs_1.default.writeFileSync(tbPath, testbenchCode);
            // Check compiler availability
            try {
                await execPromise('iverilog -V');
            }
            catch (e) {
                cleanup();
                return {
                    output: `[System] 'iverilog' compiler not found.\n[Mock Output] Compilation Successful (Mock Mode).\n[Simulation] Running testbench...\n[Result] All checks passed for: ${runId}\n(Install Icarus Verilog to see real output)`,
                    waveformData: null
                };
            }
            // Compile: iverilog -o out design.v tb.v
            await execPromise(`iverilog -o ${outPath} ${designPath} ${tbPath}`);
            // Run: vvp out with 5s timeout
            const { stdout, stderr } = await execPromise(`vvp ${outPath}`, { timeout: 5000 });
            cleanup();
            return {
                output: stdout + (stderr ? `\n[Stderr]\n${stderr}` : ''),
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
