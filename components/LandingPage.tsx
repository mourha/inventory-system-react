
import React from 'react';
import { Shield, Zap, BarChart3, Globe, ArrowRight, Check, Bot, GraduationCap, Building2, Store, Sun, Moon } from 'lucide-react';
import { FOUNDER_NAME } from '../constants';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
  onNavigateAbout: () => void;
  onNavigateContact: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onLogin, onNavigateAbout, onNavigateContact, theme, toggleTheme }) => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto sticky top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-600/20">S</div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Sustain Stack</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#sectors" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sectors</a>
          <button onClick={onNavigateAbout} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</button>
          <a href="#pricing" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Pricing</a>
          <button onClick={onNavigateContact} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact</button>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={onLogin} className="hidden sm:block text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">Log in</button>
          <button onClick={onGetStarted} className="px-5 py-2.5 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-br from-emerald-50/50 via-white to-blue-50/30 dark:from-emerald-900/10 dark:via-transparent dark:to-blue-900/10 -z-10 pointer-events-none opacity-50"></div>
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100 dark:border-emerald-800 shadow-sm">
            <Bot size={14} />
            AI-Powered Resource Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            Empowering <span className="text-emerald-600 dark:text-emerald-400">Institutions</span> to Manage What Matters.
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            The all-in-one stack for <b>Universities</b>, <b>Government Agencies</b>, and <b>Enterprises</b>. Founded by {FOUNDER_NAME}, we are building the future of African logistics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button onClick={onGetStarted} className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-emerald-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-emerald-500 transition-all shadow-xl shadow-slate-900/20 dark:shadow-emerald-900/20 active:scale-95">
              Start Your Free Trial <ArrowRight size={20} />
            </button>
            <button onClick={onNavigateContact} className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95">
              Request Government Demo
            </button>
          </div>
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 dark:opacity-20 grayscale hover:grayscale-0 transition-all duration-700 cursor-default">
            <div className="flex flex-col items-center gap-2">
              <GraduationCap size={32} />
              <span className="font-black text-sm tracking-widest">EDUCATION</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Building2 size={32} />
              <span className="font-black text-sm tracking-widest">GOVERNMENT</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Store size={32} />
              <span className="font-black text-sm tracking-widest">ENTERPRISE</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield size={32} />
              <span className="font-black text-sm tracking-widest">PHARMACY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Solutions */}
      <section id="sectors" className="bg-slate-50 dark:bg-slate-900/50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">One Stack. Every Sector.</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Built to handle the unique compliance and scale requirements of public and private institutions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl dark:hover:shadow-emerald-900/5 transition-all group">
              <GraduationCap className="text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-4 dark:text-white">Schools & Universities</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Track laboratory equipment, consumable chemicals, and library assets across multiple faculties with per-department budget tracking.</p>
              <ul className="space-y-3">
                {['Departmental Requisitions', 'Asset Depreciation', 'Lab Stock Management'].map(li => (
                  <li key={li} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300"><Check size={14} className="text-emerald-500 dark:text-emerald-400" /> {li}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl dark:hover:shadow-emerald-900/5 transition-all group">
              <Building2 className="text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-4 dark:text-white">Government Organizations</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Industrial-strength transparency for public sector distribution. Audit-ready logs for every single movement of state resources.</p>
              <ul className="space-y-3">
                {['Full Audit Trails', 'Regional Warehouse Sync', 'Compliance Reports'].map(li => (
                  <li key={li} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300"><Check size={14} className="text-emerald-500 dark:text-emerald-400" /> {li}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl dark:hover:shadow-emerald-900/5 transition-all group">
              <Store className="text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-4 dark:text-white">Enterprise Logistics</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Omnichannel inventory for modern retail and wholesale. Real-time insights into fast-moving vs slow-moving inventory items.</p>
              <ul className="space-y-3">
                {['Multi-Store Support', 'Batch & Expiry Alerts', 'POS Integration Ready'].map(li => (
                  <li key={li} className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300"><Check size={14} className="text-emerald-500 dark:text-emerald-400" /> {li}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Institutional Pricing</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4">Transparent rates for startups, universities, and federal agencies.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col hover:border-emerald-500 dark:hover:border-emerald-500/30 transition-all">
              <h3 className="text-lg font-bold mb-2 text-slate-400">Startup</h3>
              <div className="text-4xl font-black mb-6 text-slate-900 dark:text-white">₦0 <span className="text-sm font-normal text-slate-500">/mo</span></div>
              <ul className="space-y-4 flex-1 mb-8">
                {['1 Storefront', '500 SKUs', 'Community Support'].map(li => (
                  <li key={li} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><Check size={16} className="text-emerald-500"/> {li}</li>
                ))}
              </ul>
              <button onClick={onGetStarted} className="w-full py-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Start Free</button>
            </div>
            <div className="p-8 bg-slate-900 dark:bg-emerald-600 text-white rounded-3xl flex flex-col scale-105 shadow-2xl relative overflow-hidden ring-4 ring-emerald-500/20 dark:ring-emerald-500/10">
              <div className="absolute top-0 right-0 bg-emerald-500 dark:bg-slate-900 text-xs font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">Growth</div>
              <h3 className="text-lg font-bold mb-2">Institutional</h3>
              <div className="text-4xl font-black mb-6">₦25,000 <span className="text-sm font-normal text-slate-400 dark:text-emerald-100/50">/mo</span></div>
              <ul className="space-y-4 flex-1 mb-8">
                {['5 Departments', 'Unlimited Users', 'Advanced AI Copilot', 'Priority Support'].map(li => (
                  <li key={li} className="flex items-center gap-2 text-sm text-slate-300 dark:text-white/80"><Check size={16} className="text-emerald-400 dark:text-white"/> {li}</li>
                ))}
              </ul>
              <button onClick={onGetStarted} className="w-full py-3 bg-emerald-500 dark:bg-white text-slate-950 rounded-xl font-bold hover:bg-emerald-400 dark:hover:bg-slate-100 transition-all">Start 14-day Trial</button>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col hover:border-emerald-500 dark:hover:border-emerald-500/30 transition-all">
              <h3 className="text-lg font-bold mb-2 text-slate-400">Gov/University</h3>
              <div className="text-4xl font-black mb-6 text-slate-900 dark:text-white">Custom</div>
              <ul className="space-y-4 flex-1 mb-8">
                {['Full Campus License', 'On-premise Deployment', 'Dedicated Success Team', 'Custom Audit Tools'].map(li => (
                  <li key={li} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><Check size={16} className="text-emerald-500"/> {li}</li>
                ))}
              </ul>
              <button onClick={onNavigateContact} className="w-full py-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-600/20">S</div>
              <span className="text-xl font-bold dark:text-white">Sustain Stack</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm">The leading resource management operating system for West Africa's institutional landscape.</p>
            <p className="text-xs text-slate-400 dark:text-slate-600 font-bold uppercase tracking-widest mt-6">Founded by {FOUNDER_NAME}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><button onClick={onNavigateAbout} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About {FOUNDER_NAME}</button></li>
              <li><button onClick={onNavigateContact} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Campus License</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Audit Compliance</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 dark:border-slate-900 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-600 font-medium">© 2024 Sustain Stack. All rights reserved. Locally engineered with excellence.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
