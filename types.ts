
export type Role = 'ADMIN' | 'MANAGER' | 'STAFF';
export type PlanType = 'FREE' | 'PRO' | 'ENTERPRISE';
export type OrganizationType = 'RETAIL' | 'PHARMACY' | 'EDUCATION' | 'GOVERNMENT' | 'WAREHOUSE' | 'ENTERPRISE';

export interface Organization {
  id: string;
  name: string;
  plan: PlanType;
  type: OrganizationType;
  logo?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  organizationId: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  barcode: string;
  category: string;
  costPrice: number;
  sellingPrice: number;
  quantity: number;
  reorderLevel: number;
  image?: string;
  warehouseId: string;
  batches: Batch[];
}

export interface Batch {
  batchNumber: string;
  expiryDate: string;
  quantity: number;
}

export interface Warehouse {
  id: string;
  name: string;
  location: string;
}

export interface SalesOrder {
  id: string;
  customerName: string;
  date: string;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  total: number;
  items: { productId: string; quantity: number; price: number }[];
}

export interface PurchaseOrder {
  id: string;
  supplierId: string;
  date: string;
  status: 'PENDING' | 'RECEIVED' | 'CANCELLED';
  total: number;
  items: { productId: string; quantity: number; costPrice: number }[];
}

export interface Supplier {
  id: string;
  name: string;
  contactName: string;
  email: string;
  phone: string;
  balance: number;
}

export interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  timestamp: string;
  details: string;
}
