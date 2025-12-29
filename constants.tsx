
import { Product, Warehouse, SalesOrder, PurchaseOrder, Supplier, User, Organization } from './types';

export const FOUNDER_NAME = "Muhammad Murtala";

export const MOCK_ORGANIZATION: Organization = {
  id: 'org-1',
  name: 'Federal University of Tech',
  plan: 'PRO',
  type: 'EDUCATION',
};

export const MOCK_WAREHOUSES: Warehouse[] = [
  { id: 'w1', name: 'Central Science Lab', location: 'Block A, University Campus' },
  { id: 'w2', name: 'General Stores', location: 'Administrative Wing' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Microscope Lens X40',
    sku: 'LAB-001',
    barcode: 'EDU123456789',
    category: 'Laboratory',
    costPrice: 45000,
    sellingPrice: 0, // Asset, not for sale
    quantity: 12,
    reorderLevel: 5,
    warehouseId: 'w1',
    batches: [{ batchNumber: 'BATCH-A1', expiryDate: '2030-01-01', quantity: 12 }],
  },
  {
    id: 'p2',
    name: 'A4 Printing Paper (Carton)',
    sku: 'STN-500',
    barcode: 'ADM987654321',
    category: 'Stationery',
    costPrice: 18000,
    sellingPrice: 0,
    quantity: 85,
    reorderLevel: 20,
    warehouseId: 'w2',
    batches: [{ batchNumber: 'ST-2024', expiryDate: '2028-06-15', quantity: 85 }],
  },
  {
    id: 'p3',
    name: 'Office Desktop HP G9',
    sku: 'IT-202',
    barcode: 'IT456789123',
    category: 'IT Infrastructure',
    costPrice: 420000,
    sellingPrice: 0,
    quantity: 4,
    reorderLevel: 10,
    warehouseId: 'w2',
    batches: [{ batchNumber: 'IT-Q2', expiryDate: '2029-01-20', quantity: 4 }],
  },
];

export const MOCK_ORDERS: SalesOrder[] = [
  {
    id: 'REQ-1001',
    customerName: 'Faculty of Science',
    date: '2024-05-20',
    status: 'COMPLETED',
    total: 0, // Internal requisition
    items: [{ productId: 'p1', quantity: 2, price: 0 }],
  },
];

export const MOCK_PURCHASE_ORDERS: PurchaseOrder[] = [
  {
    id: 'PO-5001',
    supplierId: 's1',
    date: '2024-05-15',
    status: 'RECEIVED',
    total: 90000,
    items: [{ productId: 'p1', quantity: 2, costPrice: 45000 }],
  },
];

export const MOCK_SUPPLIERS: Supplier[] = [
  {
    id: 's1',
    name: 'Global Edu-Tech Supplies',
    contactName: 'Sarah Smith',
    email: 'sarah@edutech.com',
    phone: '+234 802 000 1111',
    balance: 1500000.00,
  },
];

export const MOCK_CURRENT_USER: User = {
  id: 'u1',
  name: 'Admin Officer',
  email: 'admin@university.edu.ng',
  role: 'ADMIN',
  organizationId: 'org-1',
  avatar: 'https://picsum.photos/seed/admin/100/100',
};
