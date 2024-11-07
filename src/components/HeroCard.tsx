import Bali from "../assets/images/Bali.jpg";
import Bromo from "../assets/images/Bromo.jpg";
import Borobudur from "../assets/images/Borobudur.jpg";
import Rinjani from "../assets/images/Rinjani.jpg";
import Dieng from "../assets/images/Dieng.jpg";
import Ubud from "../assets/images/Ubud.jpg";

const data = [
  {
    id: 1,
    title: "Bali",
    desc: "Pandawa Beach",
    location: "Bali",
    price: "5.500.000",
    img: Bali,
  },
  {
    id: 2,
    title: "Bromo",
    desc: "Bromo Montain",
    location: "East Java",
    price: "4.500.000",
    img: Bromo,
  },
  {
    id: 3,
    title: "Borobudur",
    desc: "Borobudur Temple",
    location: "Central Java",
    price: "3.500.000",
    img: Borobudur,
  },
  {
    id: 4,
    title: "Rinjani",
    desc: "Mount Rinjani",
    location: "West Nusa Tenggara",
    price: "6.000.000",
    img: Rinjani,
  },
  {
    id: 5,
    title: "Dieng",
    desc: "Mount Dieng",
    location: "Central Java",
    price: "5.000.000",
    img: Dieng,
  },
  {
    id: 6,
    title: "Ubud",
    desc: "Mount Ubud",
    location: "Bali",
    price: "4.500.000",
    img: Ubud,
  },
];

const HeroCard = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-2 w-fit">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative w-[340px] h-[200px] md:w-[1044px] md:h-[600px]"
        >
          <div className="z-10 absolute rounded-2xl w-full h-full bg-gradient-to-t from-black to-transparent opacity-60" />
          <img
            src={item.img}
            alt={item.title}
            className="rounded-2xl w-full h-full object-cover"
          />
          <div className="absolute flex flex-col md:gap-2 z-10 bottom-5 left-[10px] md:bottom-10 md:left-[30px]">
            <p className="text-white text-xs md:text-[32px] tracking-wide">
              {item.desc}
            </p>
            <p className="text-white text-xs md:text-[24px] tracking-wide md:mt-2">
              at {item.location}
            </p>
            <p className="text-white text-xs md:text-sm">
              Start from IDR {item.price}
            </p>
          </div>
          <button className="z-10 absolute bg-[#1F4AA8] md:w-[222px] md:h-[50px] rounded-sm bottom-5 md:bottom-10 right-[10px] md:right-[30px] p-1 text-white text-xs md:text-[18px]">
            Make a Reservation
          </button>
        </div>
      ))}
    </div>
  );
};

export default HeroCard;
