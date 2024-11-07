import image1 from "../assets/images/Bali.jpg";
import image2 from "../assets/images/Borobudur.jpg";
import image3 from "../assets/images/Bromo.jpg";
import image4 from "../assets/images/Rinjani.jpg";
import image5 from "../assets/images/Dieng.jpg";
import image6 from "../assets/images/Ubud.jpg";

const data = [
  {
    id: 1,
    title: "Bali",
    desc: "Pandawa Beach",
    location: "Bali, Indonesia",
    price: "5.500.000",
    img: image1,
  },
  {
    id: 2,
    title: "Bromo",
    desc: "Bromo Montain",
    location: "East Java, Indonesia",
    price: "4.500.000",
    img: image3,
  },
  {
    id: 3,
    title: "Borobudur",
    desc: "Borobudur Temple",
    location: "Central Java, Indonesia",
    price: "3.500.000",
    img: image2,
  },
  {
    id: 4,
    title: "Rinjani",
    desc: "Mount Rinjani",
    location: "West Nusa Tenggara, Indonesia",
    price: "2.500.000",
    img: image4,
  },
  {
    id: 5,
    title: "Dieng",
    desc: "Dieng Plateau",
    location: "East Java, Indonesia",
    price: "2.500.000",
    img: image5,
  },
  {
    id: 6,
    title: "Ubud",
    desc: "Ubud Field",
    location: "Bali, Indonesia",
    price: "2.500.000",
    img: image6,
  },
];

const Popular = () => {
  return (
    <>
      <div className="w-full h-auto md:h-screen bg-[#F1F5FA] py-4 mx-auto container">
        <div className="flex flex-row justify-between md:py-10 md:px-[140px]">
          <div className="mr-4 hidden md:block">
            <h1 className="text-[32px] fonnt-semibold w-[247px]">
              Most People Go In Summer
            </h1>
            <div className="relative w-[289px] h-[457px] rounded-[16px] mt-[28px]">
              <div className="absolute rounded-[16px] w-full h-full bg-gradient-to-t from-black to-transparent opacity-60" />
              <img
                src={data[5].img}
                alt="image6"
                className="w-full h-full object-cover rounded-[16px]"
              />
              <div className="relative">
                <div className="absolute bottom-5 left-5">
                  <p className="text-white text-[22px]">{data[5].desc}</p>
                  <p className="text-white text-[16px]">{data[5].location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2 md:mx-4">
            <div className="relative w-[170px] h-[136px] md:w-[289px] md:h-[273px] rounded-[16px]">
              <div className="absolute rounded-[16px] w-full h-full bg-gradient-to-t from-black to-transparent opacity-60" />
              <img
                src={data[0].img}
                alt="image2"
                className="w-full h-full object-fill rounded-[16px]"
              />
              <div className="relative">
                <div className="absolute bottom-2 left-2 md:left-5">
                  <p className="text-white text-[9px] md:text-[22px]">
                    {data[0].desc}
                  </p>
                  <p className="text-white text-[9px] md:text-[16px]">
                    {data[0].location}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[170px] h-[136px] md:w-[289px] md:h-[273px] rounded-[16px] mt-4 md:mt-[34px]">
              <div className="absolute rounded-[16px] w-full h-full bg-gradient-to-t from-black to-transparent opacity-60" />
              <img
                src={data[1].img}
                alt="image3"
                className="w-full h-full object-fill rounded-[16px]"
              />
              <div className="relative">
                <div className="absolute bottom-2 left-2 md:left-5">
                  <p className="text-white text-[9px] md:text-[22px]">
                    {data[1].desc}
                  </p>
                  <p className="text-white text-[9px] md:text-[16px]">
                    {data[1].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2 md:mx-4 ">
            <div className="relative w-[170px] h-[136px] md:w-[289px] md:h-[273px] rounded-[16px]">
              <div className="absolute rounded-[16px] w-full h-full bg-gradient-to-t from-black to-transparent opacity-60" />
              <img
                src={data[2].img}
                alt="image4"
                className="w-full h-full object-fill rounded-[16px]"
              />
              <div className="relative">
                <div className="absolute bottom-2 left-2 md:left-5">
                  <p className="text-white text-[9px] md:text-[22px]">
                    {data[2].desc}
                  </p>
                  <p className="text-white text-[9px] md:text-[16px]">
                    {data[2].location}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[170px] h-[136px] md:w-[289px] md:h-[273px] rounded-[16px] mt-4 md:mt-[34px]">
              <div className="absolute rounded-[16px] w-full h-full bg-gradient-to-t from-black to-transparent opacity-60" />
              <img
                src={data[3].img}
                alt="image1"
                className="w-full h-full object-fill rounded-[16px]"
              />
              <div className="relative">
                <div className="absolute bottom-2 left-2 md:left-5">
                  <p className="text-white text-[9px] md:text-[22px]">
                    {data[3].desc}
                  </p>
                  <p className="text-white text-[9px] md:text-[16px]">
                    {data[3].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:ml-4 hidden md:block">
            <div className="relative w-[289px] h-[580px] rounded-[16px]">
              <div className="absolute rounded-[16px] w-full h-full bg-gradient-to-t from-black to-transparent opacity-60" />
              <img
                src={data[4].img}
                alt="image5"
                className="w-full h-full object-cover rounded-[16px]"
              />
              <div className="relative">
                <div className="absolute bottom-5 left-5">
                  <p className="text-white text-[22px]">{data[4].desc}</p>
                  <p className="text-white text-[16px]">{data[4].location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
