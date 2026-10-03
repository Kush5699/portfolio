import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, ChevronRight, CornerDownLeft, Sparkles, Download, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TerminalDrawer({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Kush Patel Workstation Environment [Version 2.5.0-Release]' },
    { type: 'system', text: 'Type "help" or click quick chips below to query candidate engineering telemetry.' },
    { type: 'output', text: 'Current Status: DA-IICT M.Tech (CPI: 9.75) | Amazon ML Summer School | Gemini Ambassador' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    const newHistory = [...history, { type: 'input', text: `$ ${raw}` }];

    if (cmd === 'help') {
      newHistory.push({
        type: 'output',
        text: 'Available Commands: metrics | projects | skills | cv | experience | contact | clear',
      });
    } else if (cmd === 'metrics') {
      newHistory.push({
        type: 'output',
        text: `[Candidate Verified Metrics]
- DA-IICT M.Tech CPI: 9.75 / 10 (Rank 1 Tier)
- Amazon ML Summer School 2026: Selected Top 3,000 across India
- Google Gemini Student Ambassador (Selected Jun 2026)
- ICPR 2026 Agriculture: Global 3rd Place (574 participants / 328 teams)
- Kaggle Bidding Predictions: Solo Rank 1 Public / Rank 2 Private (832K rows)
- GATE Dual Qualified: CS (Score: 456) | Data Science & AI (Score: 413)
- Competitive Programming: LeetCode (1682) | CodeChef 3-Star (1658) | Codeforces (1089)`,
      });
    } else if (cmd === 'projects') {
      newHistory.push({
        type: 'output',
        text: `[Selected Systems]
1. SyncVSR: First Gujarati Visual Speech Recognition (AV-HuBERT + Conformer + MMS-300m)
2. ShelfMind AI: YOLO26s (91.7% mAP@50 on SKU-110K 1.73M annotations) + DINOv2 256-d + FAISS
3. MS-AFR-Net: Fingerprint Recognition with 53.5% EER reduction, 9.8x TAR@FAR=0.1%
4. ICPR 2026: 3rd Place Global crop disease classification on 12-channel Sentinel-2 (89.3% Acc)
5. Document Verification App: Flutter mobile app with ML Kit OCR + Groq API
6. Textbook RAG: Multi-agent LangGraph workflow with self-corrective retrieval loops`,
      });
    } else if (cmd === 'skills') {
      newHistory.push({
        type: 'output',
        text: `[Core Competencies]
- Languages: Python, C/C++, SQL, Dart, JavaScript, TypeScript
- Frameworks: PyTorch, TensorFlow, Scikit-learn, OpenCV, Flutter, FastAPI, React
- Specialized: Cross-modal VSR, Dense Object Detection, Spatial Transformer Networks, LangGraph, FAISS
- CS Foundations: Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS`,
      });
    } else if (cmd === 'cv' || cmd === 'resume') {
      newHistory.push({
        type: 'output',
        text: 'Initiating resume download from /Kush_Patel_Resume.pdf...',
      });
      const link = document.createElement('a');
      link.href = portfolioData.personalInfo.resumeUrl;
      link.download = 'Kush_Patel_Resume.pdf';
      link.click();
    } else if (cmd === 'experience') {
      newHistory.push({
        type: 'output',
        text: `[Experience Timeline]
- Teaching Assistant: Data Structures & Algorithms (C++) at DA-IICT (Aug 2025 - Present)
- Flutter Developer Intern: HP Param IT Solutions (Jan 2025 - May 2025)
- Google Gemini Student Ambassador: Campus Lead (Jun 2026 - Present)
- Core Member: Technical Wing, AI Club DA-IICT`,
      });
    } else if (cmd === 'contact') {
      newHistory.push({
        type: 'output',
        text: `[Direct Channels]
Email: ${portfolioData.personalInfo.email}
Phone: ${portfolioData.personalInfo.phone}
LinkedIn: ${portfolioData.personalInfo.linkedin}
GitHub: ${portfolioData.personalInfo.github}`,
      });
    } else if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${raw}". Type "help" for a list of valid commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-3xl h-[85vh] sm:h-[580px] bg-[#0A0D14] border border-slate-700/80 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono text-xs text-slate-200">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111622] border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="text-slate-400 font-semibold text-[11px] ml-2 flex items-center space-x-1">
              <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>kush_patel_workstation@daiict:~</span>
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="hidden sm:inline text-[10px] text-slate-500">Press ESC or Close</span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="flex items-center space-x-1.5 px-4 py-2 bg-[#0d121c] border-b border-slate-800/60 overflow-x-auto text-[10px]">
          <span className="text-slate-500 whitespace-nowrap">Presets:</span>
          {['metrics', 'projects', 'skills', 'experience', 'cv', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 border border-slate-700/60 transition-colors whitespace-nowrap"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Output Console Log */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2.5 leading-relaxed selection:bg-sky-400 selection:text-black">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {item.type === 'system' && (
                <span className="text-slate-500 block">{item.text}</span>
              )}
              {item.type === 'input' && (
                <span className="text-sky-400 font-bold block">{item.text}</span>
              )}
              {item.type === 'output' && (
                <span className="text-slate-300 block">{item.text}</span>
              )}
              {item.type === 'error' && (
                <span className="text-rose-400 block">{item.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="p-3 bg-[#111622] border-t border-slate-800 flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-sky-400 flex-shrink-0" />
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder-slate-600 text-xs font-mono"
            autoFocus
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="px-3 py-1 rounded bg-sky-500 text-black font-bold text-[11px] hover:bg-sky-400 transition-colors flex items-center space-x-1"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
