import React, { useState } from 'react';
import { Search, Bell, Settings, User } from 'lucide-react';
import DropdownComponent from './Dropdown';

interface HeaderProps {
  onAddDocument: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddDocument }) => {
  const [show, setShow] = useState<boolean>(false)
  const [search, setSearch] = useState('')
  return (
    <header className="flex items-baseline justify-between p-2 gap-2 bg-white border-b flex-wrap">
      <div className="flex items-center gap-2 min-w-[326px]">
        <p className='font-bold '>Review</p>
        <div className="relative min-w-[94px] ">
          <DropdownComponent bgcolor={""} text='Google' color='#000000' />
        </div>
        <button className=" min-w-[94px] px-4 py-2 text-sm text-green-600 bg-green-50 rounded-lg">
          QuickBook's Data
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm flex-wrap justify-end">
        <div className="relative flex-1 ">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className={`pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-100
              ease-in-out ${show || search ? "min-w-[200px] w-full" : "w-0"}
              `}
            onFocus={() => setShow(true)}
            onBlur={() => setShow(false)}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button onClick={onAddDocument} className="text-purple-500 min-w-[94px] px-4 py-2 rounded-lg border-none bg-[#603AE51A] hover:bg-purple-500 hover:text-white" >
          Export to Excel
        </button>
        <button onClick={onAddDocument} className=" border-none min-w-[94px] bg-[#603AE51A] text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-700 hover:text-white">
          Add Document
        </button>

        <DropdownComponent bgcolor={"bg-[#603AE51A]"} text='Contacts' color='#603AE5' />
        <div className="bg-[#603AE51A] p-2 rounded-lg">
          <Bell className="h-5 w-6 text-gray-600 cursor-pointer " />
        </div>
        <div className="bg-[#603AE51A] p-2 rounded-lg">
          <Settings className="h-5 w-6 text-gray-600 cursor-pointer" />
        </div>
        <div className="bg-[#603AE51A] p-2 rounded-lg">
          <User className="h-5 w-6 text-gray-600 cursor-pointer" />
        </div>


      </div>
    </header>
  );
}

export default Header