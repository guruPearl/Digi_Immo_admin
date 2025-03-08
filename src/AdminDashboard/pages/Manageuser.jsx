import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosAddCircle } from "react-icons/io";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";

const Manageuser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const encodedCredentials = btoa("Pearl:PearlProdChecker@12390");
        const response = await axios.get("https://societyadmin.ddns.net/admin/listSyndics", {
          headers: { Authorization: `Basic ${encodedCredentials}` }
        });

        setUsers(response.data || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const openPopup = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  return (
    <div className="mt-16">
      <h1 className="font-bold text-2xl">Manage Users!</h1>

      <div className="pt-3 flex flex-row items-center lg:gap-[750px] gap-2">
        <button className="text-md bg-[#41CD68] p-2 cursor-pointer rounded-md flex flex-row items-center text-white lg:gap-1">
          <IoIosAddCircle /> Add Users
        </button>
        <button className="text-md bg-white p-2 pl-2 pr-2 cursor-pointer rounded-md border border-[#41CD68] text-[#41CD68] flex flex-row items-center gap-2">
          <BsBoxArrowInLeft /> Filter Users
        </button>
      </div>

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && users.length > 0 && (
  <div className="m-6">
    {/* Header (Only visible in desktop view) */}
    <div className="hidden lg:flex flex-row items-center gap-6 bg-[#41CD68] text-white p-3 rounded-md">
      <div className="w-20">Logo</div>
      <div className="w-40">Syndic Name</div>
      <div className="w-40">Email</div>
      <div className="w-40">Syndic Address</div>
      <div className="w-40">Syndic BTW</div>
      <div className="w-40">Role</div>
      <div className="w-40">Operation</div>
    </div>

    {/* User List */}
    {users.map((user) => (
      <div
        key={user.id}
        className=" cursor-pointer p-4  rounded-md lg:rounded-none mb-4 lg:mb-0 lg:flex lg:flex-row lg:items-center lg:gap-6"
        onClick={() => openPopup(user)}
      >
        {/* Desktop View (Table Row) */}
        <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-between">
          <div className="w-20">
            <img src={user.syndicLogo || "/dashboard/default-user.jpg"} alt="User" className="h-12" />
          </div>
          <div className="w-40">{user.syndicName}</div>
          <div className="w-40">{user.email}</div>
          <div className="w-40">{user.syndicAddress}</div>
          <div className="w-40">{user.syndicBTW}</div>
          <div className="w-40">{user.role}</div>
          <div className="w-40 flex gap-3">
            <button className="text-[#41CD68] cursor-pointer text-xl"><IoNewspaper /></button>
            <button className="text-[#41CD68] cursor-pointer text-xl"><MdEditSquare /></button>
            <button className="text-[#41CD68] cursor-pointer text-xl"><MdDelete /></button>
          </div>
        </div>

        {/* Mobile View (Card Layout) */}
        <div className="lg:hidden bg-white p-4 rounded-lg ">
          <div className="flex items-center gap-4">
            <img src={user.syndicLogo || "/dashboard/default-user.jpg"} alt="User" className="h-12" />
            <div>
              <h2 className="font-bold text-lg">{user.syndicName}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600"><span className="font-bold">Address:</span> {user.syndicAddress}</p>
          <p className="text-sm text-gray-600"><span className="font-bold">BTW:</span> {user.syndicBTW}</p>
          <p className="text-sm text-gray-600"><span className="font-bold">Role:</span> {user.role}</p>
          <div className="flex justify-end mt-3 gap-3">
            <button className="text-[#41CD68] cursor-pointer text-xl"><IoNewspaper /></button>
            <button className="text-[#41CD68] cursor-pointer text-xl"><MdEditSquare /></button>
            <button className="text-[#41CD68] cursor-pointer text-xl"><MdDelete /></button>
          </div>
        </div>
      </div>
    ))}
  </div>
)}

      {!loading && !error && users.length === 0 && <p>No users found.</p>}

      {open && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"    style={{ background: "rgba(0, 0, 0, 0.3)" }} onClick={() => setOpen(false)}>
          <div className="bg-white lg:w-[350px] w-80 rounded-2xl shadow-lg relative lg:m-0 md:m-0 m-4 p-5" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-2">{selectedUser.syndicName}'s Details</h2>
            <div className="overflow-hidden">
                <img src={selectedUser.syndicLogo || "/dashboard/default-user.jpg"} alt="User" className="h-full w-full object-cover" />
              </div>
            <p className="text-gray-600"><span className="font-bold">Email:</span> {selectedUser.email}</p>
            <p className="text-gray-600"><span className="font-bold">Syndic Admin Email:</span> {selectedUser.syndicAdminEmail}</p>
            <p className="text-gray-400"><span className="font-bold">Syndic Address:</span> {selectedUser.syndicAddress}</p>
            <p className="text-gray-400"><span className="font-bold">Syndic BTW:</span> {selectedUser.syndicBTW}</p>
            <p className="text-gray-600"><span className="font-bold">Syndic Website:</span> {selectedUser.syndicWebsite}</p>
            <p className="text-gray-400"><span className="font-bold">Role:</span> {selectedUser.role}</p>
            <p className="text-gray-400"><span className="font-bold">Status:</span> {selectedUser.status}</p>

            <div className="mt-4">
              <button className="bg-blue-100 text-blue-400 py-1 px-3 rounded-full mr-2">Edit</button>
              <button className="bg-red-100 text-red-400 py-1 px-3 rounded-full">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manageuser;
