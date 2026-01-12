
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Challenge {
    id: string;
    title: string;
    description: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    initialCode: string;
    testbench?: string; // Optional if we decide to show it
}

const ChallengeRunner: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [challenge, setChallenge] = useState<Challenge | null>(null);
    const [userCode, setUserCode] = useState('');
    const [consoleOutput, setConsoleOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock fetch for now, replace with API call
        const fetchChallenge = async () => {
            try {
                const session = localStorage.getItem('hdlbase_mock_session');
                const sessionData = session ? JSON.parse(session) : {};
                const token = sessionData.token || sessionData.uid;

                if (!id) return;

                const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/challenges/${id}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await res.json();
                if (data.status === 'success') {
                    setChallenge(data.data);
                    setUserCode(data.data.initialCode);
                } else {
                    setConsoleOutput(`Error loading challenge: ${data.message}`);
                }
            } catch (err: any) {
                setConsoleOutput(`Error: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchChallenge();
    }, [id]);

    const handleRun = async () => {
        if (!challenge) return;
        setIsRunning(true);
        setConsoleOutput('Compiling and Simulating...');

        try {
            const session = localStorage.getItem('hdlbase_mock_session');
            const sessionData = session ? JSON.parse(session) : {};
            const token = sessionData.token || sessionData.uid;

            // We send the user's code AND the hidden testbench (if fetched) 
            // OR we rely on the backend to fetch the TB. 
            // Current 'simulation.controller' expects 'testbenchCode' in body.
            // So we must pass it. Ideally fetches from `challenge` object.
            // NOTE: If getChallengeById didn't return testbench, this fails.
            // We ensure backend sends it for now.

            const payload = {
                code: userCode,
                testbenchCode: challenge.testbench || '// No Testbench Found',
                language: 'Verilog'
            };

            const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/v1/simulation/run`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            if (data.status === 'success') {
                setConsoleOutput(data.data.output);
            } else {
                setConsoleOutput(`Simulation Request Failed: ${data.message}`);
            }
        } catch (err: any) {
            setConsoleOutput(`Error: ${err.message}`);
        } finally {
            setIsRunning(false);
        }
    };

    if (loading) return <div className="bg-gunmetal min-h-screen text-white flex items-center justify-center">Loading Challenge...</div>;
    if (!challenge) return <div className="bg-gunmetal min-h-screen text-white flex items-center justify-center">Challenge not found.</div>;

    return (
        <div className="flex flex-col h-screen bg-gunmetal text-white font-sans overflow-hidden">
            {/* Header */}
            <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-matte">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white transition-colors">
                        &larr; Exit
                    </button>
                    <h1 className="font-bold text-lg tracking-tight">{challenge.title}</h1>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' :
                            challenge.difficulty === 'Medium' ? 'bg-orange-500/20 text-orange-500' :
                                'bg-red-500/20 text-red-500'
                        }`}>
                        {challenge.difficulty}
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleRun}
                        disabled={isRunning}
                        className={`px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider transition-all shadow-lg ${isRunning ? 'bg-gray-600 cursor-not-allowed' : 'bg-learner hover:bg-learner/80 text-white shadow-learner/20'
                            }`}
                    >
                        {isRunning ? 'Running...' : 'Run Simulation'}
                    </button>
                </div>
            </header>

            {/* Main Split Layout */}
            <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
                {/* Left: Problem Description */}
                <div className="w-full md:w-5/12 border-r border-white/10 flex flex-col bg-matte/50">
                    <div className="p-6 overflow-y-auto flex-grow prose prose-invert max-w-none">
                        <div className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                            {challenge.description}
                        </div>
                    </div>
                </div>

                {/* Right: Code & Console */}
                <div className="w-full md:w-7/12 flex flex-col bg-gunmetal">
                    {/* Code Editor */}
                    <div className="flex-grow flex flex-col border-b border-white/10">
                        <div className="px-4 py-2 bg-white/5 text-[10px] font-black uppercase tracking-widest text-gray-500 border-b border-white/5 flex justify-between">
                            <span>Design.v (Verilog)</span>
                            <span>Editor Mode</span>
                        </div>
                        <textarea
                            value={userCode}
                            onChange={(e) => setUserCode(e.target.value)}
                            className="flex-grow w-full bg-[#1e1e1e] text-gray-300 font-mono text-sm p-4 outline-none resize-none"
                            spellCheck={false}
                        />
                    </div>

                    {/* Console Output */}
                    <div className="h-1/3 flex flex-col bg-[#0d1117]">
                        <div className="px-4 py-2 bg-white/5 text-[10px] font-black uppercase tracking-widest text-gray-500 border-b border-white/5">
                            Simulation Console
                        </div>
                        <pre className="flex-grow p-4 font-mono text-xs text-green-400 overflow-y-auto whitespace-pre-wrap">
                            {consoleOutput || '// Ready to simulate...'}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengeRunner;
