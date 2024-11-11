import FlightHeader from "../components/FlightHeader";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";

const FlightPage = () => {
  return (
    <>
      <Navbar />
      <FlightHeader />
      <div className="flex justify-center -mt-[100px]">
        <SearchBox />
      </div>
    </>
  );
};

export default FlightPage;
