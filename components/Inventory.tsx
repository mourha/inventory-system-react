
import React from 'react';
import { Search, Filter, Plus, MoreVertical, AlertCircle, Trash2, Edit2, PackagePlus, FileDown, Lock } from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_ORGANIZATION, MOCK_CURRENT_USER } from '../constants';
import { Product } from '../types';

const Inventory: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const isInstitutional = MOCK_ORGANIZATION.type === 'EDUCATION' || MOCK_ORGANIZATION.type === 'GOVERNMENT';
  const canManageStock = MOCK_CURRENT_USER.role === 'ADMIN' || MOCK_CURRENT_USER.role === 'MANAGER';
  
  const filteredProducts = MOCK_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{isInstitutional ? 'Resource Registry' : 'Inventory'}</h1>
          <p className="text-slate-500 dark:text-slate-400">Manage institutional assets and consumable stock levels.</p>
        </div>
        <div className="flex gap-2">
          {canManageStock ? (
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-slate-800 dark:hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/10">
              <Plus size={18} />
              <span>Add Resource</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-xl text-sm font-medium cursor-not-allowed border border-slate-200 dark:border-slate-700">
              <Lock size={16} />
              <span>View Only</span>
            </div>
          )}
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
            <FileDown size={18} />
            <span>Export Registry</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900/50 dark:backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search assets by name or SKU..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 rounded-xl text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-all">
              <Filter size={18} />
              <span>Filters</span>
            </button>
            <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-xl px-4 py-2 outline-none appearance-none cursor-pointer">
              <option>All Depts</option>
              <option>Laboratory</option>
              <option>Stationery</option>
              <option>IT Hub</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                <th className="px-6 py-4">Resource / Asset</th>
                <th className="px-6 py-4">SKU/Code</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Qty</th>
                <th className="px-6 py-4">Unit Cost</th>
                <th className="px-6 py-4">Condition</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredProducts.map((product) => {
                const isLowStock = product.quantity <= product.reorderLevel;
                const isCritical = product.quantity === 0;

                return (
                  <tr key={product.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                          {product.image ? (
                            <img src={product.image} className="w-full h-full object-cover rounded-lg" alt="" />
                          ) : (
                            <PackagePlus size={20} />
                          )}
                        </div>
                        <span className="font-medium text-slate-900 dark:text-slate-200">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{product.sku}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-[10px] font-bold uppercase tracking-tight">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">{product.quantity}</td>
                    <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-mono">₦{product.costPrice.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      {isCritical ? (
                        <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                          <AlertCircle size={16} />
                          <span className="text-[10px] font-black uppercase tracking-tighter">Depleted</span>
                        </div>
                      ) : isLowStock ? (
                        <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                          <AlertCircle size={16} />
                          <span className="text-[10px] font-black uppercase tracking-tighter">Reorder</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                          <div className="w-2 h-2 bg-current rounded-full"></div>
                          <span className="text-[10px] font-black uppercase tracking-tighter">Verified</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {canManageStock ? (
                          <>
                            <button className="p-2 text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors" title="Edit">
                              <Edit2 size={16} />
                            </button>
                            <button className="p-2 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-colors" title="Archive">
                              <Trash2 size={16} />
                            </button>
                          </>
                        ) : (
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2">Read Only</span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filteredProducts.length === 0 && (
            <div className="p-20 text-center bg-slate-50/30 dark:bg-slate-900/30">
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-300 dark:text-slate-600 shadow-xl shadow-slate-200/50 dark:shadow-none">
                <Search size={32} />
              </div>
              <h3 className="text-slate-900 dark:text-white text-lg font-bold">No assets found</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-2 text-sm leading-relaxed">Try adjusting your department filter or refine your search query to find the specific resource.</p>
              <button onClick={() => setSearchTerm('')} className="mt-8 px-6 py-2.5 bg-slate-900 dark:bg-slate-700 text-white rounded-xl text-sm font-bold hover:opacity-90 transition-all">Clear Search</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
