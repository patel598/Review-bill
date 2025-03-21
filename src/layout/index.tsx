import { useState } from "react";
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import AddDocumentModal from "../components/AddDocumentModal";
import RightPanel from "../components/RightPanel";
import { Outlet } from "react-router";






const Layout = () => {

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isRightPanelOpen] = useState(true);


    return (
        <section className="min-h-screen bg-gray-50 flex">
            <Sidebar />
            <div className="w-[calc(100vw-22rem)] flex flex-col ">
                <Header
                    onAddDocument={() => setIsAddModalOpen(true)}
                />
                <Outlet />
            </div>

            <RightPanel
                isOpen={isRightPanelOpen}
            // onClose={() => setIsRightPanelOpen(false)}
            />
            <AddDocumentModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />



        </section>
    )
}

export default Layout