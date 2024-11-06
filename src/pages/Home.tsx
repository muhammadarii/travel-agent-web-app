import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SponsorSlide from "../components/SponsorSlide";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16 md:mt-24">
        <Hero />
        <SponsorSlide />
      </div>
    </>
  );
};

export default Home;
