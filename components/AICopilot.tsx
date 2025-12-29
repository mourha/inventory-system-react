
import React from 'react';
import { X, Send, Bot, Sparkles, Loader2 } from 'lucide-react';
import { askInventoryCopilot } from '../services/geminiService';
import { MOCK_PRODUCTS, MOCK_ORDERS, MOCK_PURCHASE_ORDERS, MOCK_SUPPLIERS } from '../constants';

interface AICopilotProps {
  isOpen: boolean;
  onClose: () => void;
}

const AICopilot: React.FC<AICopilotProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = React.useState('');
  const [messages, setMessages] = React.useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Hi! I am your Sustain Stack Copilot. Ask me anything about your stock levels, sales trends, or reordering suggestions.' }
  ]);
  const [isTyping, setIsTyping] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim()) return;
    
    const userMsg = query;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setQuery('');
    setIsTyping(true);

    const context = { 
      products: MOCK_PRODUCTS, 
      salesOrders: MOCK_ORDERS,
      purchaseOrders: MOCK_PURCHASE_ORDERS,
      suppliers: MOCK_SUPPLIERS
    };
    
    const response = await askInventoryCopilot(userMsg, context);
    
    setMessages(prev => [...prev, { role: 'ai', text: response || "Something went wrong." }]);
    setIsTyping(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col h-[80vh] sm:h-[600px] overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 p-6 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
              <Bot size={24} />
            </div>
            <div>
              <h2 className="text-white font-bold leading-tight">Inventory Copilot</h2>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-slate-400 text-xs font-medium">Online & Learning</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`
                max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                ${m.role === 'user' 
                  ? 'bg-emerald-600 text-white rounded-tr-none' 
                  : 'bg-slate-100 text-slate-800 rounded-tl-none'}
              `}>
                {m.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-slate-400" />
                <span className="text-xs text-slate-500 font-medium tracking-wide italic">Analyzing business data...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestions */}
        <div className="px-6 pb-2 flex gap-2 overflow-x-auto shrink-0 no-scrollbar">
          {['Reorder suggestions', 'Low stock report', 'Supplier summary'].map(s => (
            <button 
              key={s} 
              onClick={() => { setQuery(s); }}
              className="whitespace-nowrap px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold rounded-full hover:bg-slate-100 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-slate-100 shrink-0">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-1.5 pr-2">
            <input 
              type="text" 
              placeholder="Ask about your inventory..."
              className="flex-1 bg-transparent border-none outline-none px-3 py-2 text-sm text-slate-900"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={!query.trim() || isTyping}
              className="w-9 h-9 bg-emerald-600 text-white rounded-lg flex items-center justify-center disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICopilot;
