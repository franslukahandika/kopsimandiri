
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, User, Loader2, Sparkles, BrainCircuit } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Selamat datang di SI MANDIRI AI Advisory. Saya adalah asisten cerdas yang didukung oleh model penalaran tingkat tinggi (Thinking Mode) untuk membantu Anda menganalisis strategi ekonomi, manajemen risiko, dan operasional koperasi. Apa yang bisa saya bantu hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          thinkingConfig: { thinkingBudget: 32768 },
          systemInstruction: `Anda adalah AI Penasihat Strategis untuk SI MANDIRI (Koperasi Digital Nasional). 
          Gunakan kemampuan penalaran mendalam (Thinking Mode) untuk menjawab pertanyaan kompleks terkait ekonomi Syariah, 
          strategi bisnis sektor riil, hilirisasi industri, dan tata kelola koperasi. 
          Bahasa: Indonesia Profesional. Nada: Otoritatif, Bijak, dan Strategis.`
        },
      });

      const modelText = response.text || 'Maaf, saya tidak dapat memproses permintaan tersebut saat ini.';
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Terjadi gangguan teknis pada sistem penalaran AI. Mohon coba beberapa saat lagi.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[70vh] bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#1a4d2e] p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#d4af37] rounded-xl text-[#1a4d2e]">
            <BrainCircuit size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">AI Strategic Advisory</h3>
            <p className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black">Thinking Mode Active (Gemini 3 Pro)</p>
          </div>
        </div>
        <div className="p-2 bg-white/10 rounded-full">
           <Sparkles size={16} className="text-[#d4af37]" />
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-[#1a4d2e] text-white' : 'bg-[#d4af37] text-[#1a4d2e]'}`}>
                {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-[#1a4d2e] text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'}`}>
                {m.text}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="flex gap-3 items-center text-slate-400 italic text-xs">
              <Loader2 className="animate-spin" size={16} />
              AI sedang berpikir secara mendalam...
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-6 bg-white border-t border-slate-100">
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Tanyakan analisis strategis atau operasional..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#1a4d2e] transition-all"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
          />
          <button 
            type="submit"
            disabled={loading || !input.trim()}
            className="p-4 bg-[#1a4d2e] text-white rounded-2xl hover:bg-[#0e2b1a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-4 uppercase font-bold tracking-widest">
          Sistem Pendukung Keputusan Berbasis Kecerdasan Buatan (Gemini-3-Pro Thinking)
        </p>
      </form>
    </div>
  );
};

export default AIAssistant;
