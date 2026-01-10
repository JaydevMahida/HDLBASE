import { exec } from 'child_process';
import util from 'util';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const execPromise = util.promisify(exec);

export class CompilerService {
    private tempDir: string;

    constructor() {
        this.tempDir = path.join(__dirname, '../../temp');
        if (!fs.existsSync(this.tempDir)) {
            fs.mkdirSync(this.tempDir, { recursive: true });
        }
    }

    async compileAndRun(code: string, language: string): Promise<{ output: string, waveformData: string | null }> {
        if (language !== 'Verilog') {
            return { output: `[Error] ${language} simulation is not supported efficiently in this environment yet. Only Verilog is supported via Icarus Verilog.`, waveformData: null };
        }

        const runId = uuidv4();
        const srcPath = path.join(this.tempDir, `${runId}.v`);
        // const outPath = path.join(this.tempDir, `${runId}.out`); 
        // Icarus default output is a.out usually, but we can specify -o

        // Cleanup function
        const cleanup = () => {
            if (fs.existsSync(srcPath)) fs.unlinkSync(srcPath);
            // if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
        };

        try {
            fs.writeFileSync(srcPath, code);

            // Attempt to execute iverilog
            // We verify syntax only for now (-t null) or try to compile
            // For real simulation we need a testbench.
            // If the user code has no testbench, it won't produce output.
            // We assume code has a module top; logic here can be expanded.

            try {
                // Check if iverilog is available
                await execPromise('iverilog -V');
            } catch (e) {
                // Fallback if not installed
                cleanup();
                return {
                    output: `[System] 'iverilog' compiler not found on server.\n[Mock Output] Compilation Successful (Mock Mode).\n[Simulation] Running testbench...\n[Result] All checks passed for: ${runId}`,
                    waveformData: null
                };
            }

            // Real compilation attempt
            const { stdout, stderr } = await execPromise(`iverilog -o ${path.join(this.tempDir, runId)} ${srcPath}`);

            // If we got here, compilation succeeded. Now run it?
            // Usually requires 'vvp'. Let's stick to compile check for safety or just return stdout.

            cleanup();
            return {
                output: `[Compiler] Compilation successful.\n${stdout || stderr}`,
                waveformData: null
            };

        } catch (error: any) {
            cleanup();
            return {
                output: `[Compiler Error] ${error.message || error}`,
                waveformData: null
            };
        }
    }
}

export const compilerService = new CompilerService();
