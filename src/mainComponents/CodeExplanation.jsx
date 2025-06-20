import React, { useState } from 'react';
import { parseFunction } from '../codeexplain/components/FunctionParser';
import { analyzeAST } from '../codeexplain/components/FunctionParser';
import { generateExplanation } from '../codeexplain/components/ExplanationGenerator';
import { generateObfuscationExplanation } from '../codeexplain/components/ObfuscationDetector';
import '../../src/index.css'; // Ensure Tailwind CSS is imported

function CodeExplanation() {
  const [code, setCode] = useState(`function example() {\n  // Your code here\n}`);
  const [activeTab, setActiveTab] = useState('structure'); // 'structure' or 'obfuscation'
  const [explanation, setExplanation] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    try {
      const parseResult = parseFunction(code);
      const analysis = analyzeAST(parseResult);
      
      if (analysis.error) {
        setExplanation({ error: analysis.error });
        return;
      }
      
      if (activeTab === 'structure') {
        const exp = generateExplanation(analysis, code);
        setExplanation(exp);
      } else {
        const exp = generateObfuscationExplanation(code);
        setExplanation(exp);
      }
    } catch (error) {
      console.error('Analysis failed:', error);
      setExplanation({ error: 'Failed to analyze the code. Please check the syntax.' });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const renderExplanation = (exp) => {
    if (!exp) return null;

    if (exp.error) {
      return (
        <div className="mt-8">
          <div className="p-8 bg-red-900/30 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-semibold text-red-400">Error Parsing Code</h3>
            <p className="text-red-200">{exp.error}</p>
            <p className="mt-4 text-gray-400">Please check your code syntax and try again.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="mt-8 space-y-6">
        {Array.isArray(exp) ? exp.map((step, index) => (
          <div key={index} className="p-8 bg-[#0f1729] rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-[#4fffb0]">{step.title}</h3>
            <p className="text-gray-300">{step.content}</p>
          </div>
        )) : <p>No analysis available</p>}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white font-sans">
      <header className="px-4 py-12 text-center">
        <h1 className="text-5xl font-bold mb-3 text-[#4fffb0]">Decipher Hub</h1>
        <p className="text-gray-400 text-lg">
          Analyze and understand JavaScript code structure and obfuscation techniques
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-[#0d1526] rounded-xl shadow-2xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <svg 
                className="w-5 h-5 text-[#4fffb0] mr-2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <h2 className="text-xl font-semibold text-[#4fffb0]">Code Input</h2>
            </div>

            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setActiveTab('structure')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'structure'
                    ? 'bg-[#4fffb0] text-[#0a0f1c]'
                    : 'text-gray-400 hover:text-[#4fffb0]'
                }`}
              >
                Structure
              </button>
              <button
                onClick={() => setActiveTab('obfuscation')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'obfuscation'
                    ? 'bg-[#4fffb0] text-[#0a0f1c]'
                    : 'text-gray-400 hover:text-[#4fffb0]'
                }`}
              >
                Obfuscation
              </button>
            </div>

            <div className="relative rounded-lg overflow-hidden bg-[#0f1729] border border-gray-800">
              <div className="flex items-center space-x-1.5 absolute left-3 top-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="mt-8 p-4">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Paste JavaScript function to analyze:"
                  className="w-full h-48 bg-transparent text-gray-300 font-mono text-sm placeholder-gray-600 focus:outline-none resize-none"
                  spellCheck="false"
                />
              </div>
            </div>

            <div className="mt-6">
              <button 
                onClick={handleAnalyze}
                className="w-full py-3 bg-[#4fffb0] text-[#0a0f1c] rounded-lg font-medium hover:bg-[#3fd88f] transition-colors"
              >
                Analyze Code
              </button>
            </div>

            {explanation && (
              <div className="mt-8">
                <div className="p-8 bg-[#0f1729] rounded-lg border border-gray-800">
                  <div className="flex items-center space-x-3 mb-8">
                    <svg 
                      className="w-5 h-5 text-[#4fffb0]" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 className="text-2xl font-semibold text-[#4fffb0]">Analysis Results</h3>
                  </div>
                  <div className="space-y-8">
                    <div className="prose prose-invert max-w-none">
                      {renderExplanation(explanation)}
                    </div>
                    <div className="pt-6 mt-6 text-sm text-gray-400 border-t border-gray-800">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          Analyzed {new Date().toLocaleTimeString()}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                          {activeTab === 'structure' ? 'Structure Analysis' : 'Obfuscation Analysis'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="text-center text-gray-500 pb-8">
        <p>Decipher Hub - Understand complex code at a glance</p>
      </footer>
    </div>
  );
}

export default CodeExplanation;
