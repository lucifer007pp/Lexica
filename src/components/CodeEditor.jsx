import { useState } from 'react';

export default function CodeEditor() {
    const [code, setCode] = useState(
        `// Welcome to Lexica! Happy Coding To You\n// Write your code here`
    );
    const [output, setOutput] = useState([]);

    const runCode = () => {
        try {
            const originalConsoleLog = console.log;
            const logs = [];

            console.log = (...args) => {
                logs.push(args.join(' '));
                originalConsoleLog(...args);
            };

            setOutput([]);
            new Function(code)();
            console.log = originalConsoleLog;
            setOutput(logs);
        } catch (error) {
            setOutput([`Error: ${error.message}`]);
        }
    };

    // Count the number of lines in the code
    const lineCount = code.split('\n').length;

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-gray-200">
            <div className="flex-grow flex flex-col overflow-hidden">
                <div className="flex-grow min-h-0 flex">
                    {/* Line numbers column */}
                    <div className="bg-gray-800 text-gray-400 text-right p-4 font-mono overflow-hidden">
                        {Array.from({ length: lineCount }, (_, i) => (
                            <div key={i} className="h-5 leading-5">{i + 1}</div>
                        ))}
                    </div>

                    {/* Code editor area */}
                    <div className="flex-grow">
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full p-4 pl-2 bg-gray-800 text-gray-100 font-mono resize-none outline-none"
                spellCheck="false"
            />
                    </div>
                </div>

                <div className="flex flex-col h-1/3 border-t border-gray-700">
                    <div className="bg-gray-800 p-2 flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Output</h2>
                        <button
                            onClick={runCode}
                            className="px-4 py-1 bg-green-600 rounded hover:bg-green-500"
                        >
                            Run Code
                        </button>
                    </div>
                    <div className="flex-grow overflow-auto p-4 bg-gray-800 font-mono text-sm">
                        {output.length > 0 ? (
                            output.map((line, index) => (
                                <div key={index} className="mb-1">{line}</div>
                            ))
                        ) : (
                            <div className="text-gray-500">Click "Run Code" to see output</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}