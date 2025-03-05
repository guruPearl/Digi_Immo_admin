import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./pages/Dashboard";
import Mobilehome from "./pages/Mobilehome";
import Manageuser from "./pages/Manageuser";
import HelpDesk from "./pages/HelpDesk";
import Income from "./pages/Income";
import ExpenseTracker from "./pages/ExpenseTracker";
import Utility from "./pages/Utility";
import General from "./pages/General";
import AssetInventory from "./pages/AssetInventory";
import Vendor from "./pages/Vendor";
import ProjectsMeetings from "./pages/ProjectsMeetings";
import Facility from "./pages/Facility";
import PrankingManager from "./pages/PrankingManager";
import StaffManager from "./pages/StaffManager";
import NoticeManager from "./pages/NoticeManager";
export default function AdminNavbar() {
  const [isOpen, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Manage User":
        return <Manageuser />;
      case "HelpDesk Trackers":
        return <HelpDesk />;
      case "Income Tracker":
        return <Income />;
      case "Expense Tracker":
        return <ExpenseTracker />;
      case "Utility Tracker":
        return <Utility />;
      case "General Ledger":
        return <General />;
      case "Asset & Inventory":
        return <AssetInventory />;
      case "Vendor Master":
        return <Vendor />;
      case "Projects & Meetings":
        return <ProjectsMeetings />;
      case "Facility & Activity":
        return <Facility />;
      case "Pranking Manager":
        return <PrankingManager />;
      case "Staff Manager":
        return <StaffManager />;
      case "Notice Manager":
        return <NoticeManager />;
      default:
        return <Dashboard />;
    }
  };


  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-3 bg-[#41CD68] text-white shadow-md fixed w-full">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-4">
          <img src="/logo (1).png" alt="Logo" className="h-10 md:h-14 md:block hidden" />
          <button onClick={() => setOpen(!isOpen)} className="md:hidden">
            <IoMdMenu className="text-3xl" />
          </button>
          <p className="text-xl font-bold text-nowrap md:hidden block ">Society Management App</p>
          <p className="text-xl font-bold text-nowrap md:block hidden">Society Management AppLication Admin</p>

          <img src="/logo (1).png" alt="Logo" className="h-10 md:h-14 md:hidden block" />


        </div>


        <div className="hidden md:flex items-center space-x-6">
          <button className="cursor-pointer">Admin</button>
          <button className="cursor-pointer">Configure SMA</button>
          <button className="cursor-pointer">Log Out</button>
        </div>
      </nav>

      <Sidebar isOpen={isOpen} setOpen={setOpen} activeTab={activeTab} setActiveTab={setActiveTab} />



      <div className="p-6 md:ml-64 ">{renderContent()}</div>
      <Mobilehome />
    </>
  );
}
