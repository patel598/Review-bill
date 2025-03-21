import React from 'react';
import invoiceImage from '../assets/invoice-img.svg'

interface InvoiceListProps {
  invoices: Array<{ id: string; date: string; amount: number }>;
  selectedInvoice: string;
  onSelectInvoice: (id: string) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const InvoiceList: React.FC<InvoiceListProps> = ({
  invoices,
  selectedInvoice,
  onSelectInvoice,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="w-full min-w-[300px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <button
            onClick={() => onTabChange('all')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'all'
              ? 'border-b-2 border-purple-600'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            All Documents
          </button>
          <button
            onClick={() => onTabChange('bills')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'bills'
              ? 'border-b-2 border-purple-600'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Bills
          </button>
          <button
            onClick={() => onTabChange('receipts')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'receipts'
              ? 'border-b-2 border-purple-600'
              : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            Receipts
          </button>
        </div>
      </div>

      <div className="space-y-2 max-h-[calc(100dvh-16rem)] overflow-auto">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            onClick={() => onSelectInvoice(invoice.id)}
            className={`flex items-center p-3 rounded-lg cursor-pointer ${selectedInvoice === invoice.id ? 'bg-purple-50' : 'hover:bg-gray-50'
              }`}
          >
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <img src={invoiceImage} alt="" />
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium">Bill {invoice.id}</div>
              <div className="text-xs text-gray-500">Date: {invoice.date}</div>
              <div className="text-xs text-gray-500">€ {invoice.amount.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InvoiceList