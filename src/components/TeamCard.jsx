import React from "react";
import { FaStar } from "react-icons/fa";

function TeamCard() {
  return (
    <>
      <div className="w-full h-auto  flex flex-col items-center justify-center gap-8 bg-green-box swiper-bg py-16 ">
        <h1 className=" text-lg sm:text-4xl text-gray-600 leading-relaxed text-center w-4/5">
          "Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s"
        </h1>
        {/* <div className=' flex justify-center items-center gap-4'>
    <FaStar className=' text-[#47ef47]' />
    <FaStar className=' text-[#47ef47]' />
    <FaStar className=' text-[#47ef47]' />
    <FaStar className=' text-[#47ef47]' />
    <FaStar className=' text-[#47ef47]'/>
    </div> */}
        <div className="flex items-center gap-4">
          {/* <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
            <img src="https://rairaksa.github.io/assets/img/rai.jpg"/>
        </div> */}
          <div className="flex flex-col tracking-wider">
            <label className="text-gray-600 font-bold text-base">
              Rai Raksa Muhamad
            </label>
            <label className="text-gray-400 font-normal text-sm">
              Fullstack PHP Developer
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
