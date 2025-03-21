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
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add event listener to track cursor movement
    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // Define different colors and animations
  const colors = ["🔍"];
  const animations = ["animate-pulse duration-200", "animate-bounce duration-300", "animate-ping"];

  const lines = colors.map((color, index) => (
    <div
      key={index}
      className={`line ${color} w-12 h-12 absolute drop-shadow-xl ${animations[index]} `}
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