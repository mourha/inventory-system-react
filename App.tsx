
import React from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import AICopilot from './components/AICopilot';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { PackagePlus, Lock } from 'lucide-react';
import { MOCK_CURRENT_USER } from './constants';

const SalesView = () => {
  const isManager = MOCK_CURRENT_USER.role === 'MANAGER';
  
  return (
    <div className="p-12 text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
        <PackagePlus size={40} />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Sales & Orders</h2>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">Track customer orders, generate invoices, and manage transaction history in one clean view.</p>
      
      {isManager ? (
        <div className="flex flex-col items-center gap-3">
           <p className="text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
             <Lock size={14} /> Access Restricted
           </p>
           <p className="text-sm text-slate-400 max-w-xs">As a Manager, your focus is on Reports and Inventory. Sales operations are reserved for Staff and Admins.</p>
        </div>
      ) : (
        <button className="px-6 py-2.5 bg-slate-900 dark:bg-emerald-600 text-white rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-emerald-500 transition-all">Create New Order</button>
      )}
    </div>
  );
};

const BillingView = () => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Subscription & Billing</h2>
      <p className="text-slate-500 dark:text-slate-400">Manage your plan and payment methods.</p>
    </div>
    <div className="bg-emerald-900 dark:bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden border border-emerald-800 dark:border-slate-800 shadow-2xl">
      <div className="relative z-10">
        <p className="text-emerald-300 dark:text-emerald-400 text-sm font-bold uppercase tracking-widest mb-1">Current Plan</p>
        <h3 className="text-3xl font-black mb-4">Pro Workspace</h3>
        <p className="text-emerald-100/80 dark:text-slate-400 mb-6 max-w-md">Your plan includes unlimited warehouses and the AI Inventory Copilot. Next billing date is in 25 days.</p>
        <button className="px-6 py-2.5 bg-white dark:bg-emerald-600 text-emerald-900 dark:text-white rounded-xl font-bold hover:bg-emerald-50 dark:hover:bg-emerald-500 transition-all">Manage Subscription</button>
      </div>
      <div className="absolute top-0 right-0 p-8 opacity-20"><PackagePlus size={200} /></div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [view, setView] = React.useState<'landing' | 'login' | 'signup' | 'app' | 'about' | 'contact'>('landing');
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [isCopilotOpen, setIsCopilotOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'inventory': return <Inventory />;
      case 'sales': return <SalesView />;
      case 'billing': return <BillingView />;
      default: return <Dashboard />;
    }
  };

  if (view === 'landing') {
    return (
      <LandingPage 
        onGetStarted={() => setView('signup')} 
        onLogin={() => setView('login')} 
        onNavigateAbout={() => setView('about')}
        onNavigateContact={() => setView('contact')}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    );
  }

  if (view === 'about') {
    return <AboutPage onBack={() => setView('landing')} />;
  }

  if (view === 'contact') {
    return <ContactPage onBack={() => setView('landing')} />;
  }

  if (view === 'login' || view === 'signup') {
    return (
      <Auth 
        mode={view} 
        onSuccess={() => setView('app')} 
        onBack={() => setView('landing')} 
        onToggleMode={() => setView(view === 'login' ? 'signup' : 'login')}
      />
    );
  }

  return (
    <>
      <Layout 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenCopilot={() => setIsCopilotOpen(true)}
        onLogout={() => setView('landing')}
        theme={theme}
        toggleTheme={toggleTheme}
      >
        {renderContent()}
      </Layout>
      <AICopilot 
        isOpen={isCopilotOpen} 
        onClose={() => setIsCopilotOpen(false)} 
      />
    </>
  );
};

export default App;
