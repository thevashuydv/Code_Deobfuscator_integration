import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  // Placeholder button handlers
  const onGetStarted = () => {};
  const onVisualizeTimeline = () => navigate("/timeline");
  const onScanDecodeStrings = () => navigate("/stringanalzer");
  const onExplainFunction = () => navigate("/code-explanation");
  const onEnterPlayground = () => navigate("/gamified-playground");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-950 text-white flex flex-col justify-between font-sans">
      
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center relative overflow-hidden">
       
        <div className="absolute inset-0 pointer-events-none select-none opacity-10 blur-2xl z-0" aria-hidden>
          <pre className="text-xs md:text-base text-white/30 whitespace-pre-wrap font-mono">
            {`function _0xabc(){return 'obfuscated';}
const _0xdef = _0xabc();`}
          </pre>
        </div>
       
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-white/10 via-white/5 to-white/0 opacity-20 rounded-full blur-3xl animate-spin-slow z-0" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-zinc-300 to-zinc-100 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Obfuscation Analysis Toolkit
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto drop-shadow">
            Analyze, Decrypt, and Understand Obfuscated Code with Visuals and Rule-Based Insights.
          </p>
          <button
            onClick={onGetStarted}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-700 transition-all duration-200 font-semibold shadow-2xl text-white text-lg focus:outline-none focus:ring-4 focus:ring-white/30 scale-105 hover:scale-110 active:scale-100 border border-white/10"
          >
            🧪 Get Started
          </button>
        </div>
      </section>

     
      <main className="flex-1 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-16">
        
        <section className="bg-gradient-to-br from-zinc-900 via-zinc-800/80 to-zinc-900/60 rounded-3xl p-10 flex flex-col items-start shadow-2xl border border-white/10 hover:shadow-white/10 transition-shadow duration-300 group relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-white/10 to-zinc-700/10 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-2 animate-bounce">📈</span>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              Obfuscation Timeline Explorer
            </h2>
          </div>
          <p className="text-zinc-400 mb-8">
            Visualize the evolution of obfuscated code and track deobfuscation steps over time.
          </p>
          <button
            onClick={onVisualizeTimeline}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-900 hover:to-zinc-700 transition-all duration-200 font-semibold shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 scale-105 hover:scale-110 active:scale-100 border border-white/10"
          >
            Visualize Timeline
          </button>
        </section>

        
        <section className="bg-gradient-to-br from-zinc-900 via-zinc-800/80 to-zinc-900/60 rounded-3xl p-10 flex flex-col items-start shadow-2xl border border-white/10 hover:shadow-white/10 transition-shadow duration-300 group relative overflow-hidden">
          <div className="absolute left-0 bottom-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-zinc-700/10 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-2 animate-pulse">🔍</span>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              String Entropy Analyzer
            </h2>
          </div>
          <p className="text-zinc-400 mb-8">
            Detect suspicious strings and decode hidden messages in obfuscated JavaScript.
          </p>
          <button
            onClick={onScanDecodeStrings}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-900 hover:to-zinc-700 transition-all duration-200 font-semibold shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 scale-105 hover:scale-110 active:scale-100 border border-white/10"
          >
            Scan & Decode Strings
          </button>
        </section>

        
        <section className="bg-gradient-to-br from-zinc-900 via-zinc-800/80 to-zinc-900/60 rounded-3xl p-10 flex flex-col items-start shadow-2xl border border-white/10 hover:shadow-white/10 transition-shadow duration-300 group relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-zinc-700/10 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-2 animate-spin-slow">💡</span>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              Explain Obfuscated Function
            </h2>
          </div>
          <p className="text-zinc-400 mb-8">
            Get human-readable explanations for complex, obfuscated functions instantly.
          </p>
          <button
            onClick={onExplainFunction}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-900 hover:to-zinc-700 transition-all duration-200 font-semibold shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 scale-105 hover:scale-110 active:scale-100 border border-white/10"
          >
            Explain Function
          </button>
        </section>

       
        <section className="bg-gradient-to-br from-zinc-900 via-zinc-800/80 to-zinc-900/60 rounded-3xl p-10 flex flex-col items-start shadow-2xl border border-white/10 hover:shadow-white/10 transition-shadow duration-300 group relative overflow-hidden">
          <div className="absolute left-0 top-0 w-32 h-32 bg-gradient-to-br from-white/10 to-zinc-700/10 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-2 animate-bounce">🧑‍💻</span>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              Deobfuscation Playground
            </h2>
          </div>
          <p className="text-zinc-400 mb-8">
            Experiment with code, test deobfuscation rules, and visualize results in a safe sandbox.
          </p>
          <button
            onClick={onEnterPlayground}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-900 hover:to-zinc-700 transition-all duration-200 font-semibold shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20 scale-105 hover:scale-110 active:scale-100 border border-white/10"
          >
            Enter Playground
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-4 flex flex-col md:flex-row items-center justify-between bg-black border-t border-zinc-800 text-zinc-400 text-sm mt-8 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-white/10 to-zinc-700/10 rounded-full blur-2xl opacity-20" />
        <div className="mb-2 md:mb-0 z-10">
          Built by [Your Name] ·
        </div>
        <div className="flex space-x-4 z-10">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Docs</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
      {/* Custom Animations */}
      <style>{`
        @keyframes spin-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </div>
  );
};

export default LandingPage;
