
const Sidebar = ({ isOpen, setOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { name: "Dashboard", img:"/public/sidebar/speedometer 1.png" },
    { name: "Manage User ",img:"public/sidebar/manage-315 (2) 1.png"  },
    { name: "HelpDesk Trackers", img:"public/sidebar/customer-support-1716 1.png" },
    { name: "Income Tracker", img:"public/sidebar/cash 1.png" },
    { name: "Expense Tracker",img:"public/sidebar/budget 1.png" },
    { name: "Utility Tracker", img:"public/sidebar/utility 1.png" },
    { name: "Gereral Ledger", img:"public/sidebar/information 1.png" },
    { name: "Asset & Inventory", img:"public/sidebar/inventory 1.png"},
    { name: "Vendor Master",img:"public/sidebar/vendor 1.png" },
    { name: "Projects & Meetings",img:"public/sidebar/conversation 1.png"  },
    { name: "Facility & Activity", img:"public/sidebar/calendar 1.png" },
    { name: "Pranking Manager",img:"public/sidebar/car 1.png"  },
    { name: "Staff Manager", img:"public/sidebar/team 1.png" },
    { name: "Notice Manager",img:"public/sidebar/notice 1.png"  },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#484747] shadow-md pt-4  transform md:mt-18 mt-14 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform md:block`}
    >
  
      <button className="md:hidden mb-4 text-right text-gray-600 text-white" onClick={() => setOpen(false)}>
        ✖ Close
      </button>

   
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex  cursor-pointer  w-full transition-colors text-white p-2 ${
              activeTab === item.name
                ? "bg-[#696969] text-white w-full"
                : "hover:bg-[#696969]"
            }`}
            onClick={() => {
              setActiveTab(item.name);
              setOpen(false); 
            }}
          >
        <img src={item.img} alt="/"  className="mr-4 h-4"/>
            {item.name}
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
