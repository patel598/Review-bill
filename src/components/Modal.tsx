import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string[];
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const [active, setActive] = useState(Array.isArray(title) ? title[0] : title)

  function handleSelect(e: any): void {
    setActive(e.target.id)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-[50%] p-6">
        <div className="flex justify-between items-center mb-4" onClick={(e) => handleSelect(e)}>
          {
            title.length ?
              title.map(val =>
                <h2 key={val} id={val} className={`text-sm font-normal  px-4 py-1  ${active === val ? "text-[#603AE5] border border-gray-200 rounded-lg" : "text-[#8181A5]"}`}>{val}</h2>
              )
              :
              <h2 className={`text-sm font-normal text-gray-500 `}>{title}</h2>
          }

          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal