import { useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const HelpDesk = () => {
  const images = [
    "/dashboard/download (1).jpg",
    "/dashboard/download (1).jpg",

  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-16">
      <h2 className="font-bold text-2xl">HelpDesk Tracker</h2>

      <div className="flex lg:flex-row md:flex-row items-center lg:gap-12  flex-col">
        <div
          className="flex flex-row  lg:w-[440px] w-[350px] bg-white m-6 lg:p-6 p-3 lg:gap-14 md:gap-4  rounded-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <div>
            <span className="font-bold text-nowrap">Subject :</span>
            <p className="text-gray-400 text-nowrap">Ticket Id :</p>
            <p className="text-gray-400 text-nowrap">Discription :</p>
            <p className="text-gray-400 text-nowrap">Date :</p>

            <div className="flex flex-row items-center gap-2 pt-2">
              <button type="button"
                className="bg-blue-100 text-blue-400 pt-1 pb-1 pl-3 pr-3 rounded-full  text-nowrap">Create Ticket</button>
              <button type="button"
                className="bg-yellow-100 text-yellow-400 pt-1 pb-1 pl-3 pr-3 rounded-full text-nowrap">Update Ticket</button>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="bg-green-100 text-green-400 pt-1 pb-1 pl-3 pr-3 rounded-full"
            >
              Open
            </button>
          </div>
        </div>

        <div
          className="flex flex-row lg:w-[440px]  w-[350px] bg-white m-6 lg:p-6 p-3 lg:gap-14 md:gap-6  rounded-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <div>
            <span className="font-bold text-nowrap">Subject :</span>
            <p className="text-gray-400 text-nowrap">Ticket Id :</p>
            <p className="text-gray-400 text-nowrap">Discription :</p>
            <p className="text-gray-400 text-nowrap">Date :</p>

            <div className="flex flex-row items-center gap-2 pt-2">
              <button type="button"
                className="bg-blue-100 text-blue-400 pt-1 pb-1 pl-3 pr-3 rounded-full  text-nowrap">Create Ticket</button>
              <button type="button"
                className="bg-yellow-100 text-yellow-400 pt-1 pb-1 pl-3 pr-3 rounded-full text-nowrap">Update Ticket</button>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="bg-green-100 text-green-400 pt-1 pb-1 pl-3 pr-3 rounded-full"
            >
              Open
            </button>
          </div>
        </div>
      </div>

      {open && (
         <div
         className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
         style={{ background: "rgba(0, 0, 0, 0.3)" }}
         onClick={() => setOpen(false)}
       >
         <div
           className="bg-white lg:w-[300px] w-80 rounded-2xl  shadow-lg relative lg:m-0 md:m-0 m-4"
           onClick={(e) => e.stopPropagation()}
         >
           <div className="overflow-hidden rounded-2xl">
             <div className="p-0">
             <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-auto "
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto max-h-[300px] object-contain" />
                </SwiperSlide>
              ))}
            </Swiper>
             </div>
           </div>
   
           <div className="p-5">
             <div>
               <span className="font-bold text-nowrap">Subject :</span>
               <p className="text-gray-400 text-nowrap">Ticket Id :</p>
               <span className="text-gray-400 text-nowrap">
                 Status:{" "}
                 <button
                   type="button"
                   className="bg-green-100 text-green-400 pt-1 pb-1 pl-3 pr-3 rounded-full ml-32"
                 >
                   Open
                 </button>
               </span>
               <p className="text-gray-400 text-nowrap">Description :</p>
               <p className="text-gray-400 text-nowrap">Date :</p>
   
               <div className="flex flex-row items-center gap-2 mt-2">
                 <button
                   type="button"
                   className="bg-blue-100 text-blue-400 pt-1 pb-1 pl-3 pr-3 rounded-full text-nowrap"
                 >
                   Create Ticket
                 </button>
                 <button
                   type="button"
                   className="bg-yellow-100 text-yellow-400 pt-1 pb-1 pl-3 pr-3 rounded-full text-nowrap"
                 >
                   Update Ticket
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
      )}
    </div>
  );
};

export default HelpDesk;
