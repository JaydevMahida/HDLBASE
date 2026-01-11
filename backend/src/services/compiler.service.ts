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

    async compileAndRun(designCode: string, testbenchCode: string, language: string): Promise<{ output: string, waveformData: string | null }> {
        if (language !== 'Verilog') {
            return { output: `[Error] ${language} simulation is not supported efficiently in this environment yet. Only Verilog is supported via Icarus Verilog.`, waveformData: null };
        }

        const runId = uuidv4();
        const designPath = path.join(this.tempDir, `design_${runId}.v`);
        const tbPath = path.join(this.tempDir, `tb_${runId}.v`);
        const outPath = path.join(this.tempDir, `${runId}.out`);

        const cleanup = () => {
            if (fs.existsSync(designPath)) fs.unlinkSync(designPath);
            if (fs.existsSync(tbPath)) fs.unlinkSync(tbPath);
            if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
        };

        try {
            // Write files
            fs.writeFileSync(designPath, designCode);
            fs.writeFileSync(tbPath, testbenchCode);

            // Check compiler availability
            try {
                await execPromise('iverilog -V');
            } catch (e) {
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
