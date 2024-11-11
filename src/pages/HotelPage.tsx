import React from "react";
import Navbar from "../components/Navbar";
import HotelHeader from "../components/HotelHeader";
import SearchBox from "../components/SearchBox";

const HotelPage = () => {
  return (
    <>
      <Navbar />
      <HotelHeader />
      <div className="flex justify-center -mt-[100px]">
        <SearchBox />
      </div>
    </>
  );
};

export default HotelPage;
