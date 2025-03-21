import React from 'react';
import Modal from './Modal';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Export to Excel">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date Range</label>
          <div className="grid grid-cols-2 gap-4 mt-1">
            <input
              type="date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
            <input
              type="date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Export Type</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
            <option>All Documents</option>
            <option>Selected Documents</option>
          </select>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Export
        </button>
      </div>
    </Modal>
  );
}

export default ExportModal