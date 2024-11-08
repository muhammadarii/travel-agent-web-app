import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SponsorSlide from "../components/SponsorSlide";
import Popular from "../components/Popular";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="-mt-16 ">
        <Hero />
        <SponsorSlide />
        <Popular />
      </div>
    </>
  );
};

export default Home;
