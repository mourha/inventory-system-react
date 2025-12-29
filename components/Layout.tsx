
import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut, 
  Bell, 
  ChevronDown,
  Menu,
  X,
  Bot,
  Building2,
  CreditCard,
  Sun,
  Moon
} from 'lucide-react';
import { MOCK_CURRENT_USER, MOCK_WAREHOUSES, MOCK_ORGANIZATION } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCopilot: () => void;
  onLogout: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, onOpenCopilot, onLogout, theme, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [selectedWarehouse, setSelectedWarehouse] = React.useState(MOCK_WAREHOUSES[0]);

  const userRole = MOCK_CURRENT_USER.role;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
    { id: 'inventory', label: 'Inventory', icon: Package, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
    { id: 'sales', label: 'Sales & Orders', icon: ShoppingCart, roles: ['ADMIN', 'MANAGER', 'STAFF'] },
    { id: 'suppliers', label: 'Suppliers', icon: Users, roles: ['ADMIN', 'MANAGER'] },
    { id: 'billing', label: 'Billing & Plan', icon: CreditCard, roles: ['ADMIN'] },
    { id: 'settings', label: 'Settings', icon: Settings, roles: ['ADMIN', 'MANAGER'] },
  ];

  const visibleNavItems = navItems.filter(item => item.roles.includes(userRole));

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {!isSidebarOpen && <div className="fixed inset-0 bg-slate-900/20 dark:bg-black/40 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsSidebarOpen(true)} />}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 shadow-2xl lg:shadow-none`}>
        <div className="flex flex-col h-full">
          {/* Org Switcher */}
          <div className="p-4">
            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-600/10">
                {MOCK_ORGANIZATION.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Workspace</p>
                   <span className="px-1 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[8px] font-black rounded uppercase tracking-tighter leading-none">{userRole}</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{MOCK_ORGANIZATION.name}</p>
              </div>
              <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600" />
            </div>
          </div>

          <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto">
            {visibleNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${activeTab === item.id ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}
              >
                <item.icon size={20} className={activeTab === item.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'} />
                <span className="text-sm">{item.label}</span>
                {item.id === 'billing' && <span className="ml-auto px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-black rounded-md uppercase tracking-tighter">{MOCK_ORGANIZATION.plan}</span>}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-100 dark:border-slate-800">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 flex items-center gap-3">
              <img src={MOCK_CURRENT_USER.avatar} alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate leading-none">{MOCK_CURRENT_USER.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-1">{MOCK_CURRENT_USER.email}</p>
              </div>
              <button onClick={onLogout} className="text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/20">
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shrink-0 z-30">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-slate-600 dark:text-slate-400" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <Building2 size={16} />
              <span>{selectedWarehouse.name}</span>
              <ChevronDown size={14} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={onOpenCopilot} className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-emerald-600 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-800 dark:hover:bg-emerald-500 transition-all active:scale-95 shadow-lg shadow-slate-900/10">
              <Bot size={16} /> Ask AI Assistant
            </button>
            <div className="relative group">
              <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
