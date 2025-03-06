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

      <div className=" m-6  ">
        <tr className="flex lg:flex-row  flex-col items-center lg:gap-24 gap-2 mb-4 lg:p-2 lg:pb-2 pb-4  rounded-md lg:bg-[#41CD68] bg-white  lg:text-white">
          <th className="lg:block hidden">Photo</th>
          <td className="lg:hidden block overflow-hidden">
            <img src="public/dashboard/download (1).jpg" alt="/" className="w-80 h-full object-cover" />
          </td>
          <th className="lg:block hidden ">User Name</th>
          <div className="lg:hidden block flex flex-row gap-28">
            <th>User Name</th>
            <td className="">Guru</td>
          </div>
          <th className="lg:block hidden">Mobile </th>
          <div className="lg:hidden block flex flex-row gap-24">
            <th>Mobile </th>
            <td className="">6346932696</td>
          </div>
          <th className="lg:pl-6 lg:block hidden">Email</th>
          <div className="lg:hidden block flex flex-row gap-18">
            <th className="">Email</th>
            <td className="">guru@gmail.com</td>
          </div>
          <th className="lg:pl-16 lg:block hidden">Operation</th>
          <div className="lg:hidden block flex flex-row gap-16">
            <th className="">Operation</th>
            <td className="flex fle-row items-center gap-4"><button className="lg:text-white text-[#41CD68] cursor-pointer text-xl"><IoNewspaper /></button><button className="lg:text-white text-[#41CD68] cursor-pointer text-xl"><MdEditSquare /></button><button className="lg:text-white text-[#41CD68] cursor-pointer text-xl"><MdDelete /></button></td>

          </div>
        </tr>
        <div className="lg:block hidden">


          <tr className="flex lg:flex-row flex-col items-center gap-22 text-center ">
            <td>
              <img src="public/dashboard/download (1).jpg" alt="/" className="h-12" />
            </td>
            <td>Guru</td>
            <td className="pl-8">6346932697</td>
            <td>guru@gmail.com</td>
            <td className="flex fle-row items-center gap-4"><button className="text-[#41CD68] cursor-pointer text-xl"><IoNewspaper /></button><button className="text-[#41CD68] cursor-pointer text-xl"><MdEditSquare /></button><button className="text-[#41CD68] cursor-pointer text-xl"><MdDelete /></button></td>

          </tr>
        </div>
      </div>

      <div className=" m-6 mt-2  ">
        <tr className="flex lg:flex-row flex-col items-center lg:gap-24 gap-2 mb-4 lg:p-2 lg:pb-2 pb-4  rounded-md lg:bg-[#41CD68] bg-white  lg:text-white">
          <th className="lg:block hidden">Photo</th>
          <td className="lg:hidden block overflow-hidden">
            <img src="public/dashboard/download (1).jpg" alt="/" className="w-80 h-full object-cover" />
          </td>
          <th className="lg:block hidden ">User Name</th>
          <div className="lg:hidden block flex flex-row gap-28">
            <th>User Name</th>
            <td className="">Guru</td>
          </div>
          <th className="lg:block hidden">Mobile </th>
          <div className="lg:hidden block flex flex-row gap-24">
            <th>Mobile </th>
            <td className="">6346932696</td>
          </div>
          <th className="lg:pl-6 lg:block hidden">Email</th>
          <div className="lg:hidden block flex flex-row gap-18">
            <th className="">Email</th>
            <td className="">guru@gmail.com</td>
          </div>
          <th className="lg:pl-16 lg:block hidden">Operation</th>
          <div className="lg:hidden block flex flex-row gap-16">
            <th className="">Operation</th>
            <td className="flex fle-row items-center gap-4"><button className="lg:text-white text-[#41CD68] cursor-pointer text-xl"><IoNewspaper /></button><button className="lg:text-white text-[#41CD68] cursor-pointer text-xl"><MdEditSquare /></button><button className="lg:text-white text-[#41CD68] cursor-pointer text-xl"><MdDelete /></button></td>

          </div>
        </tr>
        <div className="lg:block hidden">


          <tr className="flex lg:flex-row flex-col items-center gap-22 text-center ">
            <td>
              <img src="public/dashboard/download (1).jpg" alt="/" className="h-12" />
            </td>
            <td>Guru</td>
            <td className="pl-8">6346932697</td>
            <td>guru@gmail.com</td>
            <td className="flex fle-row items-center gap-4"><button className="text-[#41CD68] cursor-pointer text-xl"><IoNewspaper /></button><button className="text-[#41CD68] cursor-pointer text-xl"><MdEditSquare /></button><button className="text-[#41CD68] cursor-pointer text-xl"><MdDelete /></button></td>

          </tr>
        </div>
      </div>
    </div>
  );
};

export default Manageuser;
