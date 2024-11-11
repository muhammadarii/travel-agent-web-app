import Image from "../assets/images/Flight.jpg";

const FlightHeader = () => {
  return (
    <div>
      <div className="-mt-10">
        {/* <div className="absolute rounded-2xl w-full h-[600px] md:h-[700px] bg-gradient-to-b from-black to-transparent opacity-60" /> */}
        <img
          src={Image}
          alt="Header"
          className="rounded-2xl w-full h-[537px] md:h-[700px] object-cover"
        />
        <div className="absolute top-[40%] left-[20%] translate-x-[-50%] translate-y-[-50%] font-semibold w-[440px] text-white">
          <h1 className="text-[45px] tracking-wide leading-[50px]">
            Make Your Travel Whishlist, we'll do the rest
          </h1>
          <p>Special offers to suit your plan</p>
        </div>
      </div>
    </div>
  );
};

export default FlightHeader;
