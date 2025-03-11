
const Sidebar = ({ isOpen, setOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { name: "Dashboard", img:"/sidebar/speedometer 1.png" },
    { name: "Manage User",img:"/sidebar/manage-315 (2) 1.png"  },
    { name: "HelpDesk Trackers", img:"/sidebar/customer-support-1716 1.png" },
    { name: "All Buildings", img:"/sidebar/cash 1.png" },
    { name: "Expense Tracker",img:"/sidebar/budget 1.png" },
    { name: "Utility Tracker", img:"/sidebar/utility 1.png" },
    { name: "General Ledger", img:"/sidebar/information 1.png" },
    { name: "Asset & Inventory", img:"/sidebar/inventory 1.png"},
    { name: "Vendor Master",img:"/sidebar/vendor 1.png" },
    { name: "Projects & Meetings",img:"/sidebar/conversation 1.png"  },
    { name: "Facility & Activity", img:"/sidebar/calendar 1.png" },
    { name: "Pranking Manager",img:"/sidebar/car 1.png"  },
    { name: "Staff Manager", img:"/sidebar/team 1.png" },
    { name: "Notice Manager",img:"/sidebar/notice 1.png"  },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#484747] shadow-md pt-1  transform md:mt-20 lg:mt-20 mt-16 ${
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
