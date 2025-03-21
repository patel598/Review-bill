import { useState } from 'react';
import logo from '../assets/logo.svg'

import { menuItems } from '../utils/data';
import { useNavigate } from 'react-router';

const Sidebar = () => {
  const [menu, setMenu] = useState([...menuItems])
  const navigate = useNavigate()

  function handleNavigate(ind: number): void {
    const newMenu = menu.map((val, index) => {
      return (
        {
          ...val, active: ind === index ? true : false
        }

      )
    })

    setMenu([...newMenu] as any)
    navigate(newMenu[ind].link)
  }

  return (
    <aside className="w-21 bg-[#5E43F3] min-h-screen text-white">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-bold mb-4 hidden md:block">
          <img src={logo} alt="" />
        </div>
        {menu.map((item, index) => (
          <div
            onClick={() => handleNavigate(index)}
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