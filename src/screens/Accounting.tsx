import { useState } from "react";
import InvoiceList from "../components/InvoiceList"
import invoiceImage from '../assets/invoice-img.svg'



const SAMPLE_INVOICES = Array.from({ length: 8 }, (_, i) => ({
  id: `${i + 1}`,
  date: 'Nov 1, 2019',
  amount: 50.99
}));

const Accounting = () => {

  const [selectedInvoice, setSelectedInvoice] = useState(SAMPLE_INVOICES[0].id);
  const [activeTab, setActiveTab] = useState('all');


  const handleInvoiceSelect = (id: string) => {
    setSelectedInvoice(id);

  };

  return (
    <div className="bg-white m-3  max-h-[calc(100dvh-6rem)] overflow-auto">
      <div className="text-right">
        <button className=" m-4 px-4 py-2 text-sm text-white bg-[#603AE5] rounded-lg">
          Add to Expenses Report
        </button>

      </div>
      <div className=" p-3 bg-white grid md:grid-cols-1 lg:grid-cols-2 gap-4">


        <InvoiceList
          invoices={SAMPLE_INVOICES}
          selectedInvoice={selectedInvoice}
          onSelectInvoice={handleInvoiceSelect}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="align-center border border-dashed border-1 border-gray p-2 max-h-[calc(100dvh-13rem)] overflow-auto">
          <img className="w-full h-full object-contain" src={invoiceImage} alt={selectedInvoice} />
        </div>

      </div>
    </div>
  )
}

export default Accounting