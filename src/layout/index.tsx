import { useEffect, useState } from "react";
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import AddDocumentModal from "../components/AddDocumentModal";
import RightPanel from "../components/RightPanel";
import { Outlet } from "react-router";
import HelmetComponent from "../components/Helmet";






const Layout = () => {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position when the mouse moves
  const updateCursorPosition = (e: { clientX: any; clientY: any; }) => {
    if ((e.clientX < window.innerWidth - 24) && (e.clientY < window.innerHeight - 24)) {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };

  }, []);

  const colors = [""];
  const animations = ["animate-pulse duration-200", "animate-bounce duration-300", "animate-ping"];

  const lines = colors.map((color, index) => (
    <div
      key={index}
      className={`line ${color} w-4 h-4 absolute border border-black ${animations[index]} `}
      style={{ top: cursorPosition.y, left: cursorPosition.x, transform: `rotate(${index * 45}deg)`, borderRadius: '100%', zIndex: 9999 }}
    >🔍</div>
  ));

  return (
    <section className="min-h-screen bg-gray-50 flex">
      <HelmetComponent title="Review Bills" name="Keyword" content="review bill, mouse loader, Quickbook" />
      {lines}
      <Sidebar />
      <div className="w-[calc(100vw-22rem)] flex flex-col account-container">
        <Header
          onAddDocument={() => setIsAddModalOpen(true)}
        />
        <Outlet />
      </div>

      <RightPanel
        className="rp-desktop"
      />
      <AddDocumentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </section>
  )
}

export default Layout