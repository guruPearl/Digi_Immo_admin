import { useEffect, useState } from "react";
import axios from "axios";


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
            {buildings.map((building, index) => (
                <div
                    key={index}
                    className=" cursor-pointer mt-2  rounded-md lg:rounded-none mb-4 "

                >
                    {/* Desktop View (Table Row) */}
                    <div className="hidden lg:flex lg:w-full lg:items-center  bg-white p-4 rounded-md"
                    >
                        <div className="flex flex-row gap-30">
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
