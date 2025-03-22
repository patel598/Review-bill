export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: 'paid' | 'unpaid';
  billNumber: string;
  dueDate: string;
  items: InvoiceItem[];
}

export interface InvoiceItem {
  description: string;
  price: number;
  quantity: number;
  total: number;
}