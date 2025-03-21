import logo from '../assets/logo.svg'

import { menuItems } from '../utils/data';

const Sidebar = () => {

  return (
    <aside className="w-21 bg-[#5E43F3] min-h-screen text-white">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-bold mb-4 hidden md:block">
          <img src={logo} alt="" />
        </div>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-2 mb-1 cursor-pointer ${item.active ? 'bg-white/10 border-l-4 border-white' : 'hover:bg-white/5'
              }`}
          >
            <img src={item.icon} className="" />
            <h5 className="text-sm hidden md:block">{item.label}</h5>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar