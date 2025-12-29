
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  AreaChart,
  Area
} from 'recharts';
import { Package, TrendingUp, AlertTriangle, Building2, ArrowUpRight, ArrowDownRight, ClipboardList } from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_ORDERS, MOCK_ORGANIZATION } from '../constants';

const Dashboard: React.FC = () => {
  const isInstitutional = MOCK_ORGANIZATION.type === 'EDUCATION' || MOCK_ORGANIZATION.type === 'GOVERNMENT';

  const stats = [
    { label: isInstitutional ? 'Total Resources' : 'Total Products', value: MOCK_PRODUCTS.length, icon: Package, color: 'bg-blue-500 dark:bg-blue-600', trend: '+4%' },
    { label: isInstitutional ? 'Active Requisitions' : 'Total Revenue', value: isInstitutional ? MOCK_ORDERS.length : `₦${MOCK_ORDERS.reduce((acc, o) => acc + o.total, 0).toLocaleString()}`, icon: ClipboardList, color: 'bg-emerald-500 dark:bg-emerald-600', trend: '+8%' },
    { label: 'Critical Levels', value: MOCK_PRODUCTS.filter(p => p.quantity <= p.reorderLevel).length, icon: AlertTriangle, color: 'bg-amber-500 dark:bg-amber-600', trend: '-2%' },
    { label: isInstitutional ? 'Asset Valuation' : 'Stock Value', value: `₦${MOCK_PRODUCTS.reduce((acc, p) => acc + (p.quantity * p.costPrice), 0).toLocaleString()}`, icon: TrendingUp, color: 'bg-indigo-500 dark:bg-indigo-600', trend: '+5%' },
  ];

  const salesData = [
    { name: 'Mon', sales: 4000 },
    { name: 'Tue', sales: 3000 },
    { name: 'Wed', sales: 2000 },
    { name: 'Thu', sales: 2780 },
    { name: 'Fri', sales: 1890 },
    { name: 'Sat', sales: 2390 },
    { name: 'Sun', sales: 3490 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Workspace Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400">Resource overview for {MOCK_ORGANIZATION.name}</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest shadow-sm">
          <Building2 size={14} />
          Sector: {MOCK_ORGANIZATION.type}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900/50 dark:backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md dark:hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.color} p-3 rounded-xl text-white shadow-lg shadow-emerald-500/10`}>
                <stat.icon size={24} />
              </div>
              <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400'}`}>
                {stat.trend.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900/50 dark:backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white">{isInstitutional ? 'Resource Allocation Trends' : 'Revenue Performance'}</h3>
            <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 rounded-lg px-3 py-2 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" className="dark:opacity-10" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '12px', backgroundColor: '#1e293b', border: 'none', color: '#fff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  itemStyle={{color: '#fff'}}
                />
                <Area type="monotone" dataKey="sales" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/50 dark:backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-bold text-slate-900 dark:text-white mb-6">{isInstitutional ? 'Internal Audit Log' : 'Recent Activity'}</h3>
          <div className="space-y-6">
            {[
              { label: isInstitutional ? 'Lab Kit Distribution' : 'Order Shipped', loc: isInstitutional ? 'Science Wing' : 'Main Warehouse', time: '1h ago' },
              { label: isInstitutional ? 'Stock Audit Complete' : 'Inventory Restocked', loc: isInstitutional ? 'Main Store' : 'Secondary Warehouse', time: '3h ago' },
              { label: isInstitutional ? 'New Asset Registered' : 'New Product Added', loc: isInstitutional ? 'IT Dept' : 'Catalog', time: '5h ago' },
              { label: isInstitutional ? 'Paper Requisition' : 'Bulk Sale Recorded', loc: isInstitutional ? 'Admin Office' : 'POS Terminal 1', time: '8h ago' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 mt-2 bg-emerald-500 rounded-full shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-200">{activity.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{activity.loc} • {activity.time}</p>
                </div>
              </div>
            ))}
            <button className="w-full py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors">
              Full History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
