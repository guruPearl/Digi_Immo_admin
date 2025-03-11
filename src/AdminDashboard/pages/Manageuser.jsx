import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosAddCircle } from "react-icons/io";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { MdEditSquare, MdDelete } from "react-icons/md";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { data } from "react-router-dom";
const Manageuser = ({ userId, user }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showBuildingDetails, setShowBuildingDetails] = useState(false);
  const [showAddUserPopup, setShowAddUserPopup] = useState(false);
  const [ownerApproved, setOwnerApproved] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [boxNumber, setboxNumber] = useState("");
  const [flatNumber, setflatNumber] = useState("");
  const [flatType, setflatType] = useState("");
  const [floor, setfloor] = useState("");
  const [role, setrole] = useState("");

  const [buildingId, setBuildingId] = useState("");
  const [buildings, setBuildings] = useState([]);


  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        const encodedCredentials = btoa("Pearl:PearlProdChecker@12390");

        const response = await axios.get(
          "https://societyadmin.ddns.net/admin/buildings",
          {
            headers: { Authorization: `Basic ${encodedCredentials}` },
          }
        );

        console.log("API Response:", response);
        setBuildings(response.data);
      } catch (error) {
        if (error.response) {
          console.error("API Error:", error.response.status, error.response.data);
        } else {
          console.error("Network Error:", error.message);
        }
      }
    };

    fetchBuildings();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const encodedCredentials = btoa("Pearl:PearlProdChecker@12390");
        const response = await axios.get("https://societyadmin.ddns.net/admin/users", {
          headers: { Authorization: `Basic ${encodedCredentials}` }
        });
        console.log(response.data);

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


  const handleApprove = async (id) => {
    const encodedCredentials = btoa("Pearl:PearlProdChecker@12390");
    const token = localStorage.getItem("token");

    try {
      const rs = await axios.get(
        `https://societyadmin.ddns.net/admin/approveUser?userId=${id}`,
        {
          headers: { 'Authorization': `Bearer ${token}` }
        }
      );

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, ownerApproved: rs.data.ownerApproved } : user
        )
      );

      setOwnerApproved(rs.data.ownerApproved);
    } catch (error) {
      console.error("Approval failed", error);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const encodedCredentials = btoa("Pearl:PearlProdChecker@12390");
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password)
    formData.append("boxNumber", boxNumber)
    formData.append("flatNumber", flatNumber)
    formData.append("flatType", flatType)
    formData.append("floor", floor)
    formData.append("role", role)
    formData.append("buildingId", buildingId)

    console.log("Sending data:", Object.fromEntries(formData.entries()));



    try {
      const response = await axios.post(
        "https://societyadmin.ddns.net/admin/createUser",
        formData,
        {
          headers: {
            "Authorization": `Basic ${encodedCredentials}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response Data:", response.data);

      if (response.status === 200 || response.status === 201) {
        alert("User added successfully!");
        closeAddUserPopup();
      } else {
        alert(`Failed to add user: ${response.data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error adding user:", error);
      alert(error.response?.data?.message || "Network error. Please try again.");
    }
  };


  const handleDeleteUser = () => {


    fetch(`https://societyadmin.ddns.net/admin/approveUser?userId=${userId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("User deleted successfully!");

        } else {
          alert("Failed to delete user.");
        }
      })
      .catch((error) => console.error("Delete error:", error));
  };
  const openAddUserPopup = () => setShowAddUserPopup(true);
  const closeAddUserPopup = () => setShowAddUserPopup(false);

  return (
    <div className="mt-16">
      <h1 className="font-bold text-2xl">Manage Users!</h1>

      <div className="pt-3 flex flex-row items-center lg:gap-[794px] gap-2">
        <button
          className="text-md bg-[#41CD68] p-2 cursor-pointer rounded-md flex flex-row items-center text-white lg:gap-1"
          onClick={openAddUserPopup}
        >
          <IoIosAddCircle /> Add Users
        </button>

        <button className="text-md bg-white p-2 pl-2 pr-2 cursor-pointer rounded-md border border-[#41CD68] text-[#41CD68] flex flex-row items-center gap-2">
          <BsBoxArrowInLeft /> Filter Users
        </button>
      </div>
      {showAddUserPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
          onClick={closeAddUserPopup}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg w-[350px] relative"
            onClick={(e) => e.stopPropagation()}
          >

            <form onSubmit={handleSubmit} className="bg-white rounded-xl w-full max-w-md mx-auto">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New User</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  <input type="text" name="firstName" placeholder="First Name" onChange={(e) => setfirstName(e.target.value)} value={firstName} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                  <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setlastName(e.target.value)} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                  <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                  <input type="tel" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                  <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                </div>
                <div className="flex flex-col gap-3">
                  <input type="number" name="boxNumber" placeholder="Box Number" value={boxNumber} onChange={(e) => setboxNumber(e.target.value)} className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                  <input type="number" name="flatNumber" placeholder="Flat Number" value={flatNumber} onChange={(e) => setflatNumber(e.target.value)} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                  <input type="text" name="flatType" placeholder="Flat Type" value={flatType} onChange={(e) => setflatType(e.target.value)} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                  <input type="number" name="floor" placeholder="Floor" value={floor} onChange={(e) => setfloor(e.target.value)} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                  <input type="text" name="role" placeholder="Role" value={role} onChange={(e) => setrole(e.target.value)} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                  <select
                    name="buildingId"
                    value={buildingId}
                    onChange={(e) => setBuildingId(e.target.value)}

                    required
                    className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]"
                  >
                    <option value="" disabled>Building Building</option>
                    {buildings.map((building, index) => (
                      <option key={index} value={building.id} >
                        <span> {building.buildingName}</span>
                      </option>
                    ))}
                  </select>

                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition" onClick={closeAddUserPopup}>Cancel</button>
                <button type="submit" className="bg-[#41CD68] text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">Add User</button>
              </div>
            </form>

          </div>
        </div>
      )}

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && users.length > 0 && (
        <div className="m-6">
          {/* Header (Only visible in desktop view) */}
          <div className="hidden lg:flex flex-row items-center gap-6 bg-[#41CD68] text-white p-3 rounded-md">
            <div className="w-20">Role</div>
            <div className="w-40">First Name</div>
            <div className="w-40">Last Name</div>
            <div className="w-40">Email</div>
            <div className="w-40">Phone Number</div>
            <div className="w-40">Operation</div>
          </div>

          {/* User List */}
          {users?.map((user) => (
            <div
              key={user.id}
              className=" cursor-pointer mt-2  rounded-md lg:rounded-none mb-4 "

            >
              {/* Desktop View (Table Row) */}
              <div className="hidden lg:flex lg:w-full lg:items-center  bg-white p-4 rounded-md"
              >
                <div className="flex flex-row gap-30" onClick={() => openPopup(user)}>
                  <div className="w-4">{user.role}</div>
                  <div className="w-4">{user.firstName}</div>
                  <div className="w-4 ">{user.lastName}</div>
                  <div className="w-4">{user.email}</div>
                  <div className="w-4 ml-26">{user.phoneNumber}</div>
                </div>
                <div className="w-40 flex gap-3 ml-38">
                  <button onClick={() => handleApprove(user.id)} className="">
                    {user.ownerApproved ? <FaCheck className="text-[#41CD68] cursor-pointer text-xl"/>
                      :  <FaCheck className="text-gray-600 cursor-pointer text-xl"/>}
                  </button>



                  <button className="text-[#41CD68] cursor-pointer text-xl">
                    <MdEditSquare />
                  </button>





                  <button
                    className="text-red-500 cursor-pointer text-xl"
                    onClick={handleDeleteUser}
                  >
                    <MdDelete />
                  </button>


                </div>
              </div>

              {/* Mobile View (Card Layout) */}
              <div className="lg:hidden bg-white p-4 rounded-lg shadow-md">

                {/* Additional Info */}
                <div className="mt-4 space-y-2 text-center" onClick={() => openPopup(user)}>
                  <h4 className="text-sm text-gray-600"><span className="font-bold">Role:</span> {user.role}</h4>
                  <h4 className="text-sm text-gray-600"><span className="font-bold">First Name:</span> {user.firstName}</h4>
                  <h4 className="text-sm text-gray-600"><span className="font-bold">Last Name:</span> {user.lastName}</h4>
                  <h4 className="text-sm text-gray-600"><span className="font-bold">Email:</span> {user.email}</h4>
                  <h4 className="text-sm text-gray-600"><span className="font-bold">OwnerApproved:</span> {user.ownerApproved}</h4>
                  <h4 className="text-sm text-gray-600"><span className="font-bold">Residence:</span> {user.residence}</h4>
                  <h4 className="text-sm text-gray-600"><span className="font-bold">Floor:</span> {user.floor}</h4>
                  <h4 className="text-sm text-gray-600"><span className="font-bold">Flat Number:</span> {user.flatNumber}</h4>
                  <h4 className="text-sm text-gray-600"><span className="font-bold">Flat Type:</span> {user.flatType}</h4>
                  <h4 className="text-sm text-gray-600"><span className="font-bold">Box Number:</span> {user.boxNumber}</h4>


                </div>

                {/* Action Buttons */}
                <div className="flex justify-center mt-4 gap-3">
                  <button onClick={() => handleApprove(user.id)} className="text-[#41CD68] cursor-pointer text-xl">
                    {user.ownerApproved ? <FaCheck />
                      : <ImCross />}
                  </button>

                  <button className="text-[#41CD68] cursor-pointer text-2xl"><MdEditSquare /></button>
                  <button className="text-[#41CD68] cursor-pointer text-2xl"><MdDelete /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && users.length === 0 && <p>No users found.</p>}

      {open && selectedUser && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white lg:w-[350px] w-80 rounded-2xl shadow-lg relative lg:m-0 md:m-0 m-4 p-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Conditionally Render User or Building Details */}
            {!showBuildingDetails ? (
              <>
                <div className="flex justify-center">
                  <img className="rounded-full h-28 w-28 object-fill border-gray-600 border-1" src={selectedUser.building?.syndicLogo || "https://www.freestock.com/450/freestock_565622158.jpg"} alt="User" />
                </div>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Role:</span> <span className="text-end"> {selectedUser.role}</span>
                </h4>

                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">First Name:</span> <span className="text-end">{selectedUser.firstName}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Last Name:</span> <span className="text-end">{selectedUser.lastName}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Email:</span><span className="text-end"> {selectedUser.email}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Phone Number:</span><span className="text-end"> {selectedUser.phoneNumber}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Owner Approved:</span>
                  <span className="text-end">
                    {selectedUser.ownerApproved ? "✅ Approved" : "❌ Not Approved"}
                  </span>
                </h4>

                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Syndic Approved:</span>
                  <span className="text-end">
                    {selectedUser.syndicApproved ? "✅ Approved" : "❌ Not Approved"}
                  </span>
                </h4>

                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Residence:</span><span className="text-end"> {selectedUser.residence}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Floor:</span><span className="text-end"> {selectedUser.floor}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Flat Number:</span><span className="text-end"> {selectedUser.flatNumber}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Flat Type:</span><span className="text-end"> {selectedUser.flatType}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Box Number:</span> <span className="text-end">{selectedUser.boxNumber}</span>
                </h4>


                <div className="">
                  <div>
                    <button
                      className="bg-green-200 text-green-400 py-1 px-2 rounded-full mr-2 text-xs cursor-pointer text-nowrap"
                      onClick={() => setShowBuildingDetails(true)}
                    >
                      Building Details
                    </button>
                  </div>

                </div>
              </>
            ) : (
              // Building Details View
              <>

                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Building Name:</span> <span className="text-end">{selectedUser.building?.buildingName} </span>               </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Street Name:</span> <span className="text-end">{selectedUser.building?.streetName}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Building Number:</span><span className="text-end"> {selectedUser.building?.buildingNumber}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Pincode:</span> <span className="text-end">{selectedUser.building?.pincode}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">City:</span> <span className="text-end">{selectedUser.building?.city}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Syndic Name:</span><span className="text-end"> {selectedUser.building?.syndicName}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Syndic Address:</span><span className="text-end"> {selectedUser.building?.syndicAddress}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Syndic BTW:</span> <span className="text-end">{selectedUser.building?.syndicBTW}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Syndic Admin Email:</span> <span className="text-end">{selectedUser.building?.syndicAdminEmail}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Syndic Website:</span> <span className="text-end">{selectedUser.building?.syndicWebsite}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Admin Name:</span> <span className="text-end">{selectedUser.building?.adminName}</span>
                </h4>
                <h4 className="text-sm text-gray-600 flex items-end justify-between">
                  <span className="font-bold">Full Address:</span> <span className="text-end">{selectedUser.building?.fullAddress}</span>
                </h4>
                <div className="flex justify-end">
                  <button
                    className="bg-gray-200 text-gray-600 py-1 px-3 rounded-full cursor-pointer"
                    onClick={() => setShowBuildingDetails(false)}
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Manageuser;
