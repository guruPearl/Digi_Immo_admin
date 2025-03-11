import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosAddCircle } from "react-icons/io";


const AllBuildings = () => {
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

    return (
        <div className="mt-16 font-bold">
             <h1 className="font-bold text-2xl">Manage Buildings!</h1>
            
                  <div className="pt-3 flex flex-row items-center lg:gap-[794px] gap-2">
                    <button
                      className="text-md bg-[#41CD68] p-2 cursor-pointer rounded-md flex flex-row items-center text-white lg:gap-1"
                  
                    >
                      <IoIosAddCircle /> Create Building
                    </button>
            
                  
                  </div>

             <div className="hidden lg:flex flex-row items-center gap-6 bg-[#41CD68] text-white p-3 rounded-md mt-4">
            <div className="w-40 text-nowrap">Building Number</div>
            <div className="w-40">Building Name</div>
            <div className="w-40">Pincode</div>
            <div className="w-40">City</div>
            <div className="w-40">StreetName</div>
       
          </div>
            {buildings.map((building, index) => (
                <div
                    key={index}
                    className=" cursor-pointer mt-2  rounded-md lg:rounded-none mb-4 "

                >
                    {/* Desktop View (Table Row) */}
                    <div className="hidden lg:flex lg:w-full lg:items-center  bg-white p-4 rounded-md"
                    >
                        <div className="flex flex-row gap-42">
                        <div className="w-4 ">{building.buildingNumber}</div>
                            <div className="w-4">{building.buildingName}</div>
                            <div className="w-4">{building.pincode}</div>
                            <div className="w-4 ">{building.city}</div>
                            <div className="w-4">{building.streetName}</div>
                           
                        </div>

                    </div>
                </div>

            ))}
        </div>
    );
};

export default AllBuildings;
