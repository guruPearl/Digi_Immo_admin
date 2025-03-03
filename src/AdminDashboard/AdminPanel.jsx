import { useState } from "react";
import { FaTachometerAlt, FaUsers, FaCog , FaIcons} from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { TbClipboardTypography } from "react-icons/tb";
import { SiGooglemaps } from "react-icons/si";

import AdminNavbar from "./AdminNavbar";
export default function AdminPanel() {

  

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "User Profile", icon: <FaUsers /> },
    { name: "Table List", icon: <FaTableList /> },
    { name: "TypoGraphy", icon: <TbClipboardTypography />},
    { name: "Icons", icon: <FaIcons /> },
    { name: "Maps", icon: <SiGooglemaps /> },
    { name: "Settings", icon: <FaCog /> }
  ];


  return (
    <>
    <div className="bg-gray-100 h-auto">  <AdminNavbar /></div>
  
 
    </>
  );
}
