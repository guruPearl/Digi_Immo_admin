import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosAddCircle } from "react-icons/io";


const AllBuildings = () => {
  const [buildingNumber, setBuildingNumber] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [streetName, setStreetName] = useState("");
  const [syndicId, setSyndicId] = useState("");

  const [buildings, setBuildings] = useState([]);
  const [showAddbuildingPopup, setShowAddbuildingPopup] = useState(false);


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


  const handleSubmit = async (e) => {
    e.preventDefault();
    const encodedCredentials = btoa("Pearl:PearlProdChecker@12390");
    const formData = new FormData();
    formData.append("buildingNumber", buildingNumber);
    formData.append("buildingName", buildingName);
    formData.append("city", city);
    formData.append("pincode", pincode);
    formData.append("streetName", streetName);
    formData.append("syndicId", syndicId);

    console.log("Sending data:", Object.fromEntries(formData.entries()));



    try {
      const response = await axios.post(
        "https://societyadmin.ddns.net/admin/createBuilding",
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
        alert("Building added successfully!");
        closeAddbuildingPopup();
      } else {
        alert(`Failed to add user: ${response.data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error adding building:", error);
      alert(error.response?.data?.message || "Network error. Please try again.");
    }
  };


  const openAddbuildingPopup = () => setShowAddbuildingPopup(true);
  const closeAddbuildingPopup = () => setShowAddbuildingPopup(false);
  return (
    <div className="mt-16 font-bold">
      <h1 className="font-bold text-2xl">Manage Buildings!</h1>

      <div className="pt-3 flex flex-row items-center lg:gap-[794px] gap-2">
        <button
          className="text-md bg-[#41CD68] p-2 cursor-pointer rounded-md flex flex-row items-center text-white lg:gap-1"

          onClick={openAddbuildingPopup}

        >
          <IoIosAddCircle /> Create Building
        </button>

        {showAddbuildingPopup && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            style={{ background: "rgba(0, 0, 0, 0.3)" }}
            onClick={closeAddbuildingPopup}
          >
            <div
              className="bg-white p-6 rounded-xl shadow-lg w-[350px] relative"
              onClick={(e) => e.stopPropagation()}
            >

              <form onSubmit={handleSubmit} className="bg-white rounded-xl w-full max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Building</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-3">
                    <input type="number" name="buildingNumber" placeholder="Building Number" onChange={(e) => setBuildingNumber(e.target.value)} value={buildingNumber} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />

                    <input type="text" name="buildingName" placeholder="Building Name" onChange={(e) => setBuildingName(e.target.value)} value={buildingName} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />

                    <input type="text" name="city" placeholder="City" onChange={(e) => setCity(e.target.value)} value={city} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <input type="number" name="pincode" placeholder="Pincode" onChange={(e) => setPincode(e.target.value)} value={pincode} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />

                    <input type="text" name="streetName" placeholder="Street Name" onChange={(e) => setStreetName(e.target.value)} value={streetName} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />

                    <input type="number" name="syndicId" placeholder="Syndic ID" onChange={(e) => setSyndicId(e.target.value)} value={syndicId} required className="w-full p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#41CD68]" />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button type="button" className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:bg-gray-300 transition" onClick={closeAddbuildingPopup}>Cancel</button>
                  <button type="submit" className="bg-[#41CD68] text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">Add User</button>
                </div>
              </form>

            </div>
          </div>
        )}


      </div>

      <div className="hidden lg:flex flex-row items-center gap-12 bg-[#41CD68] text-white p-3 pl-18 rounded-md mt-4">
        <div className="w-40 text-nowrap">Building Number</div>
        <div className="w-40">Building Name</div>
        <div className="w-40">Pincode</div>
        <div className="w-40">City</div>
        <div className="w-40">StreetName</div>

      </div>
      {buildings?.map((building, index) => (
        <div key={index} className="cursor-pointer mt-2 rounded-md lg:rounded-none mb-4">

          {/* Desktop View (Table Row) */}
          <div className="hidden lg:flex lg:w-full lg:items-center bg-white p-4 rounded-md">
            <div className="flex flex-row gap-20 pl-26">
              <div className="w-20">{building.buildingNumber}</div>
              <div className="w-40">{building.buildingName}</div>
              <div className="w-20">{building.pincode}</div>
              <div className="w-20">{building.city}</div>
              <div className="w-40">{building.streetName}</div>
            </div>
          </div>

          {/* Mobile View (Card Layout) */}
          <div className="lg:hidden bg-white p-4 rounded-lg shadow-md">
            <div className="text-center space-y-2">
              <h4 className="text-sm text-gray-600"><span className="font-bold">Building No:</span> {building.buildingNumber}</h4>
              <h4 className="text-sm text-gray-600"><span className="font-bold">Building Name:</span> {building.buildingName}</h4>
              <h4 className="text-sm text-gray-600"><span className="font-bold">Pincode:</span> {building.pincode}</h4>
              <h4 className="text-sm text-gray-600"><span className="font-bold">City:</span> {building.city}</h4>
              <h4 className="text-sm text-gray-600"><span className="font-bold">Street Name:</span> {building.streetName}</h4>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default AllBuildings;