import { FaPlane } from "react-icons/fa6";
import { RiHotelBedFill } from "react-icons/ri";

const NavMobile = () => {
  return (
    <div className="md:hidden absolute top-[55px] left-0 right-0 bg-black bg-opacity-70 text-white py-4 space-y-4 flex flex-col items-center rounded-b-2xl">
      <div className="flex items-center gap-1 cursor-pointer hover:text-[#1F4AA8]">
        <FaPlane className="w-[22px] h-[20px]" />
        <p className="text-[14px]">Find Flight</p>
      </div>
      <div className="flex items-center gap-1 cursor-pointer hover:text-[#1F4AA8]">
        <RiHotelBedFill className="w-[23px] h-[21px]" />
        <p className="text-[14px]">Find Stays</p>
      </div>
      <button className="w-[100px] h-[40px] text-white rounded-md hover:text-[#1F4AA8]">
        Login
      </button>
      <button className="w-[100px] h-[40px] bg-[#FFFFFF] text-black rounded-md hover:text-white hover:bg-[#1F4AA8]">
        Sign Up
      </button>
    </div>
  );
};

export default NavMobile;
