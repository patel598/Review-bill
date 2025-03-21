import React, { useState } from 'react';
import Modal from './Modal';
import { Upload } from 'lucide-react';
import copy from '../assets/copy.svg';
import { useCopyToClipboard } from './useCopyHook';

interface AddDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddDocumentModal: React.FC<AddDocumentModalProps> = ({ isOpen, onClose }) => {
  const [selectedClient, setSelectedClient] = useState('');
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={["EasyUpload", "Bills", "Receipts", "Bank"]}>
      <div className="space-y-4">
        <div className="flex gap-2">

          <div className='w-1/2'>
            <label className="block text-sm font-medium text-gray-700">Document Owner</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value="Accountant 01"
              readOnly
            />
          </div>

          <div className='w-1/2'>
            <label className="block text-sm font-medium text-gray-700">Client</label>
            <select
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="">Select Client</option>
              <option value="client1">Client 1</option>
              <option value="client2">Client 2</option>
            </select>
          </div>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">Drag & Drop or Choose file to upload</p>
          <p className="text-xs text-gray-500">JPG, PNG, PDF, CSV</p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg">
            Add Receipt
          </button>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600">Send Over Email</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="text-sm">Single: </span>
              <input
                type="text"
                value="abc.single@gmail.com"
                readOnly
                className="ml-2 text-sm text-gray-600"
              />
              <img className='w-4 h-5' src={copy} alt="" onClick={() => copyToClipboard("abc.single@gmail.com")} />
            </div>
            <div className="flex items-center">
              <span className="text-sm">Multiple: </span>
              <input
                type="text"
                value="abc.multiple@gmail.com"
                readOnly
                className="ml-2 text-sm text-gray-600"
              />
              <img className='w-4 h-5' src={copy} alt="" onClick={() => copyToClipboard("abc.multiple@gmail.com")} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AddDocumentModal