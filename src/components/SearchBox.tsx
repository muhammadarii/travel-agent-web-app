import { RiHotelBedFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <>
      <div className="bg-white w-[1100px] h-[256px] rounded-[16px] shadow-2xl">
        <p className="py-7 pl-12 text-[20px] font-semibold">
          Where are you travelling to?
        </p>
        <div className="flex flex-cols-4 justify-center gap-4 p-4">
          <div className="relative flex items-center border-2 rounded-sm">
            <RiHotelBedFill className="w-[23px] h-[21px] ml-2" />
            <p className="absolute -top-2 left-4 text-[8px] bg-white px-2 rounded-xl">
              Enter Destination
            </p>
            <input
              placeholder="Bali, indonesia"
              type="text"
              className="w-[300px] h-[40px] pl-2 pr-4 rounded-md focus:outline-none  focus:border-transparent"
            />
          </div>
          <div className="relative w-[200px] flex items-center border-2 rounded-sm">
            <p className="absolute -top-2 left-4 text-[8px] bg-white px-2 rounded-xl">
              Check In
            </p>
            <input
              type="date"
              className="w-[200px] h-[40px] pl-2 pr-4 rounded-md focus:outline-none  focus:border-transparent"
            />
          </div>
          <div className="relative w-[200px] flex items-center border-2 rounded-sm">
            <p className="absolute -top-2 left-4 text-[8px] bg-white px-2 rounded-xl">
              Check Out
            </p>
            <input
              type="date"
              className="w-[200px] h-[40px] pl-2 pr-4 rounded-md focus:outline-none  focus:border-transparent"
            />
          </div>
          <div className="relative flex items-center border-2 rounded-sm">
            <FaUser className="ml-2" />
            <p className="absolute -top-2 left-4 text-[8px] bg-white px-2 rounded-xl">
              Rooms & Guests
            </p>
            <select
              className="w-[200px] h-[40px] pl-2 pr-4 rounded-md focus:outline-none  focus:border-transparent"
              name=""
              id=""
            >
              <option value="1">1 room, 2 guests</option>
              <option value="2">1 room, 3 guests</option>
              <option value="3">2 room, 1 guests</option>
              <option value="4">2 room, 2 guests</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
