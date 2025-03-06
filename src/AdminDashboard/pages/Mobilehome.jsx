import React from "react";


const Mobilehome = () => {
  return (
 <>
<div className="bg-gray-200 h-28 md:hidden block flex flex-row items-center gap-8 justify-center pt-26 pb-14 text-center">
<div>
<img src="/dashboard/sms (1) 1.png" alt="/" className="h-14  bg-white rounded-full p-2 " />

<span className="text-xs text-nowarp">SEND SMS</span>
</div>
<div>
<img src="/dashboard/mail (1) 1.png" alt="/" className="h-14  bg-white rounded-full p-2"/>
<span className="text-xs text-nowrap">SEND FLASH</span>
</div>
<div>
<img src="/dashboard/home-icon-silhouette 1.png" alt="/" className="h-14  bg-white rounded-full p-2" />
<span className="text-xs  text-nowarp">UNITS</span>
</div>
<div>
<img src="/dashboard/manage-315 (2) 1 (1).png" alt="/" className="h-14  bg-white rounded-full p-2"/>
<span className="text-xs pl-2 text-nowrap">USERS</span>
</div>
</div>

{/* first part */}

<div className="bg-gray-100 pt-8 md:hidden block">
<div className="flex justify-center items-center flex-col ">
<div className="flex items-center flex-row bg-[#615F6A] pt-6 pb-6 pl-14 pr-10  w-[315px] h-[60px] ">
  <h2 className="text-xl  text-white text-nowrap">Approve New Member</h2>
</div>
<div className="flex flex-row items-center w-[315px] h-[110px] bg-white  shadow-lg gap-10 justify-center md:hidden block">
 <div> <span className="text-xl ">Rajaram <br /> B3-26 </span></div>
<div className="flex flex-row items-center gap-4">
<span className=" text-xl">Owner </span>
  <img src="/dashboard/correct 1.png" alt="/" className="h-8"/>
  <img src="/dashboard/remove (1) 1.png" alt="" className="h-8" />
</div>
</div>

<div className="flex justify-center items-center flex-col mt-8">
<div className="flex flex-row items-center justify-center gap-5 md:hidden block">
  <div className="bg-[#46BB51]  w-[137px] h-[36px] text-center">
<h2 className="text-white pt-1.5">View All</h2>
  </div>
  <div className="bg-[#5A9260]  w-[137px] h-[36px] text-center">
<h2 className="text-white pt-1.5 ">Add Member</h2>
  </div>
</div>
</div>
</div>

{/* second part */}

<div className="flex justify-center items-center flex-col mt-8">
<div className="flex items-center flex-row bg-[#615F6A] p-6 pl-20  w-[315px] h-[60px] md:hidden block">
  <h2 className="text-xl  text-white text-nowrap">Open Meetings</h2>

</div>
<div className="flex flex-row items-center w-[315px] h-[110px] bg-white  shadow-lg gap-10 justify-center md:hidden block">
 <div> <span className="text-xl flex flex-col">Security  <span className="text-xs">March 16 2022</span> Association Committee </span></div>

<span className=" text-xl">View </span>
 
</div>

<div className="flex justify-center items-center flex-col mt-8">
<div className="flex flex-row items-center justify-center gap-5  md:hidden block">
  <div className="bg-[#46BB51]  w-[137px] h-[36px] text-center">
<h2 className="text-white pt-1.5 ">View All</h2> 
  </div>
  <div className="bg-[#5A9260]  w-[137px] h-[36px] text-center">
<h2 className="text-white pt-1.5 ">Create</h2>
  </div>
</div>
</div>
</div>
</div>
 </>
  );
};

export default Mobilehome;
