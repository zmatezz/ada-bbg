import React from "react";
import Slider from "react-slick";

const Discover = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full  mx-auto h-full justify-center items-center flex flex-col gap-4 px-10 md:px-0  py-8 bg-[url('https://res.cloudinary.com/dgeeyohmv/image/upload/v1699500261/Ada/srdl8riyyhrzt9qnzmsy.png')] bg-cover bg-center bg-fixed relative">
      <div className="container mx-auto w-full ">
        <div className="items-center  justify-between w-full flex flex-col gap-4">
          <div className="w-full flex flex-col">
            <div className="flex bg-[#0b0a0e] gap-4  p-4">
              <div className="flex items-center justify-center flex-col">
                <div className="w-[3px] h-full bg-white "></div>
                <div className="w-[3px] h-full bg-slate-400"></div>
                <div className="w-[3px] h-full bg-[#9adc59]"></div>
              </div>
              <div className="w-full flex flex-col">
                <span className="font-chakra text-lg md:text-[30px] text-[#9adc59] uppercase font-bold ">
                  Descubra jogos incríveis
                </span>
                <p className="text-slate-400 font-chakra">
                  Conheça os jogos mais incríveis de todos os tempos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <img
            className="w-1/2 max-h-[440px] "
            src="https://www.nuuvem.com/lp/pt/pascoa-gamer/images/banner-BR.jpg"
            alt=""
          />
          <img
            className="w-1/2  max-h-[440px]  "
            src="https://www.nuuvem.com/lp/pt/verao-gamer/images/BR-PRATA-BANNER.jpg"
            alt=""
          />
          <img
            className="w-1/2  max-h-[440px]  "
            src="https://www.nuuvem.com/lp/pt/inverno-gamer/images/BANNER-BR.jpg"
            alt=""
          />
        </Slider>
      </div>
    </section>
  );
};

export default Discover;
