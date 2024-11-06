import Marquee from "react-fast-marquee";
import LogoPesonaIndonesia from "../assets/images/LogoPesonaIndonesia.png";
import LogoMandiri from "../assets/images/mandiri.png";
import LogoIndosat from "../assets/images/Indosat.png";

const SponsorSlide = () => {
  return (
    <div className=" my-4 md:my-10">
      <Marquee autoFill loop={0}>
        <img
          src={LogoPesonaIndonesia}
          alt="Logo"
          className="w-[50px] md:w-[100px] mx-4"
        />
        <img
          src={LogoMandiri}
          alt="Logo"
          className="w-[50px] md:w-[100px] mx-4"
        />
        <img
          src={LogoIndosat}
          alt="Logo"
          className="w-[50px] md:w-[100px] mx-4"
        />
      </Marquee>
    </div>
  );
};

export default SponsorSlide;
