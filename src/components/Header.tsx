import React, { useState } from 'react';
import { Search, Bell, Settings, User, AlignJustify, X } from 'lucide-react';
import DropdownComponent from './Dropdown';

interface HeaderProps {
  onAddDocument: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddDocument }) => {
  const [show, setShow] = useState<boolean>(false)
  const [search, setSearch] = useState('')
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)





  function toggleCollapse(): void {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <header className="flex items-baseline justify-between p-2 gap-2 bg-white border-b">
      <div className="flex items-center gap-2 min-w-[326px]">
        <p className='font-bold '>Review</p>
        <div className="relative min-w-[94px] ">
          <DropdownComponent bgcolor={""} text='Google' color='#000000' />
        </div>
        <button className=" min-w-[94px] px-4 py-2 text-sm text-green-600 bg-green-50 rounded-lg">
          QuickBook's Data
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm justify-end relative">
        <div className="relative u_s_n-desktop ">
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
        <button onClick={onAddDocument} className="u_s_n_ad_e-desktop text-purple-500 min-w-[94px] px-4 py-2 rounded-lg border-none bg-[#603AE51A] hover:bg-purple-500 hover:text-white" >
          Export to Excel
        </button>
        <button onClick={onAddDocument} className=" u_s_n_ad-desktop border-none min-w-[94px] bg-[#603AE51A] text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-700 hover:text-white">
          Add Document
        </button>

        <DropdownComponent bgcolor={"bg-[#603AE51A] u_s_n_ad_e_c-desktop"} text='Contacts' color='#603AE5' />
        <div className="bg-[#603AE51A] p-2 rounded-lg u_s_n-desktop">
          <Bell className="h-5 w-6 text-gray-600 cursor-pointer " />
        </div>
        <div className="bg-[#603AE51A] p-2 rounded-lg u_s_n-desktop">
          <Settings className="h-5 w-6 text-gray-600 cursor-pointer" />
        </div>
        <div className="bg-[#603AE51A] p-2 rounded-lg u_s_n-desktop">
          <User className="h-5 w-6 text-gray-600 cursor-pointer" />
        </div>



        <button
          onClick={toggleCollapse}
          className={`transition-transform hidden duration-300 ${isCollapsed ? 'rotate-90' : ''} u_s_n-screen`}
        >
          <span className="material-icons">
            {
              isCollapsed ? <X /> :
                <AlignJustify />
            }
          </span>
        </button>
        {
          isCollapsed &&
          <div className="absolute top-10 right-2 z-10 bg-[#2d8681] rounded-lg p-2 w-max">
            <div className="relative border-b border-black rounded-lg">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-700" />
              <input
                autoFocus
                type="text"
                placeholder="Search..."
                className={`pl-10 pr-4 py-2 bg-[#603AE51A] rounded-lg min-w-[200px] w-full
              focus:outline-none focus:ring-2 focus:ring-purple-500 `}
                onFocus={() => setShow(true)}
                onBlur={() => setShow(false)}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="bg-[#603AE51A] p-2 rounded-lg flex gap-1 mb-1 border-b border-black ">
              <Bell className="h-5 w-6 text-gray-600 cursor-pointer " />
              <span>Notification</span>
            </div>
            <div className="bg-[#603AE51A] p-2 rounded-lg flex gap-1 mb-1 border-b border-black ">
              <Settings className="h-5 w-6 text-gray-600 cursor-pointer" />
              <span>Settings</span>
            </div>
            <div className="bg-[#603AE51A] p-2 rounded-lg flex gap-1 mb-1 border-b border-black  ">
              <User className="h-5 w-6 text-gray-600 cursor-pointer" />
              <span>Profile</span>
            </div>
            <button onClick={onAddDocument} className=" u_s_n_ad-screen hidden w-full text-start border-b border-black min-w-[94px] bg-[#603AE51A]  px-4 py-2 rounded-lg hover:bg-purple-700 hover:text-white">
              Add Document
            </button>
            <button onClick={onAddDocument} className="u_s_n_ad_e-screen hidden w-full text-start border-b border-black min-w-[94px] px-4 py-2 rounded-lg  bg-[#603AE51A] hover:bg-purple-500 hover:text-white" >
              Export to Excel
            </button>
            <DropdownComponent bgcolor={"bg-[#603AE51A] u_s_n_ad_e_c-screen hidden  border-b border-black"} text='Contacts' color='#000000' border="border-none border-b border-black" />
          </div>
        }

      </div>

    </header>
  );
}

export default Header