import { IoIosAddCircle } from "react-icons/io";

import { BsBoxArrowInLeft } from "react-icons/bs";
import { MdEditSquare } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
const Manageuser = () => {
    return (
      <div className="mt-16 ">
      
        <h1 className="font-bold text-2xl">Manage Users!</h1>
     

        <div className="pt-3 flex flex-row items-center lg:gap-[750px] gap-2 ">
          <button className=" text-md  bg-[#41CD68] p-2  cursor-pointer rounded-md flex flex-row items-center text-white lg:gap-1" type="button"><IoIosAddCircle />
          Add Users</button>
          <button type="button" className="text-md bg-white p-2 pl-2 pr-2 cursor-pointer rounded-md border-1 border-[#41CD68] text-[#41CD68] flex flex-row items-center gap-2"><BsBoxArrowInLeft />
          Filter Users</button>
        </div>
      
        <div className="bg-white p-6 mt-6">
          <tr className="flex lg:flex-row flex-col items-center lg:gap-24 gap-2">
            <th>Photo</th>
            <td className="lg:hidden block">
              <img src="public/dashboard/download (1).jpg" alt="/"  className="h-12"/>
            </td>
            <th>User Name</th>
            <td className="lg:hidden block">Guru</td>
            <th>Mobile </th>
            <td className="lg:hidden block">6346932696</td>
            <th className="lg:pl-6">Email</th>
            <td className="lg:hidden block">guruvachan@gmail.com</td>
            <th className="lg:pl-16">Operation</th>
            <td className="flex fle-row items-center gap-4 lg:hidden block "><button className="text-[#41CD68] cursor-pointer text-xl"><IoNewspaper /></button><button className="text-[#41CD68] cursor-pointer text-xl"><MdEditSquare /></button><button className="text-[#41CD68] cursor-pointer text-xl"><MdDelete /></button></td>
            <th className="lg:pl-4">Action</th>
            <td className="lg:hidden block"><button type="button" className="p-1 pl-3 pr-3 text-sm text-white bg-[#41CD68] rounded-md flex flex-row items-center gap-2"><IoLogIn />Login</button></td>
          </tr>
          <div className="lg:block hidden">

          
          <tr className="flex lg:flex-row flex-col items-center gap-22 text-center ">
            <td>
              <img src="public/dashboard/download (1).jpg" alt="/"  className="h-12"/>
            </td>
            <td>Guru</td>
            <td className="pl-8">6346932697</td>
            <td>guru@gmail.com</td>
            <td className="flex fle-row items-center gap-4"><button className="text-[#41CD68] cursor-pointer text-xl"><IoNewspaper /></button><button className="text-[#41CD68] cursor-pointer text-xl"><MdEditSquare /></button><button className="text-[#41CD68] cursor-pointer text-xl"><MdDelete /></button></td>
            <td><button type="button" className="p-1 pl-3 pr-3 text-sm text-white bg-[#41CD68] rounded-md flex flex-row items-center gap-2"><IoLogIn />Login</button></td>
          </tr>
          </div>
        </div>
      </div>
    );
  };
  
  export default Manageuser;
  