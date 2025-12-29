
import React from 'react';
import { ArrowLeft, Mail, Lock, User, Github } from 'lucide-react';

interface AuthProps {
  mode: 'login' | 'signup';
  onSuccess: () => void;
  onBack: () => void;
  onToggleMode: () => void;
}

const Auth: React.FC<AuthProps> = ({ mode, onSuccess, onBack, onToggleMode }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 text-sm font-semibold">
          <ArrowLeft size={16} /> Back to home
        </button>
        
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
          <div className="text-center mb-10">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg shadow-emerald-600/20">S</div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              {mode === 'login' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="text-slate-500 mt-2 text-sm">
              {mode === 'login' ? 'Enter your credentials to access your workspace.' : 'Get started with a 14-day free trial today.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider px-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input required type="text" placeholder="John Doe" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm" />
                </div>
              </div>
            )}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider px-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input required type="email" placeholder="john@example.com" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider px-1 flex justify-between">
                Password
                {mode === 'login' && <a href="#" className="text-emerald-600 hover:text-emerald-700 normal-case">Forgot?</a>}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input required type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm" />
              </div>
            </div>

            <button disabled={isLoading} className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-[0.98] disabled:bg-slate-400 mt-2 flex items-center justify-center gap-2">
              {isLoading ? 'Processing...' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold tracking-widest">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-sm font-semibold">
              <Github size={18} /> GitHub
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-sm font-semibold">
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" /> Google
            </button>
          </div>

          <p className="text-center mt-10 text-sm text-slate-500">
            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
            <button onClick={onToggleMode} className="text-emerald-600 font-bold hover:text-emerald-700">{mode === 'login' ? 'Sign up' : 'Log in'}</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
