import React from "react";
import Slider from "react-slick";

const Home = () => {
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
  };
  return (
    <div className="w-full h-full relative">
      <header className="w-full z-30 transparent p-4 border-b border-[#9adc59] fixed">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-full max-w-[80px] md:max-w-[80px] mx-auto flex justify-center items-center">
            <img
              className="w-full  flex justify-center items-center mx-auto hover:scale-110 transition-all duration-300 "
              src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1698967945/Ada/ilhxvm6qj8ci4guiwbjs.png"
              alt=""
            />
          </div>
          <div className="w-full flex justify-end items-center gap-3">
            <p className="font-chakra font-bold text-slate-400 hover:text-[#9adc59]">
              jogos
            </p>
            <p className="font-chakra font-bold text-slate-400 hover:text-[#9adc59]">
              login
            </p>
            <p className="font-chakra font-bold text-slate-400 hover:text-[#9adc59]">
              cadastrar-se
            </p>
          </div>
        </div>
      </header>
      <div className="relative w-full h-screen">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dgeeyohmv/image/upload/v1699495713/Ada/qmzmz7ijroxi1gf5pdrs.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="container w-full mx-auto h-full justify-center items-center flex flex-col relative z-20">
          <div className="items-center h-full max-h-[400px] justify-between w-full flex gap-4">
            <div className="w-[45%] h-full flex flex-col  justify-between">
              <div className="w-full flex">
                <div className="w-full h-[3px] bg-white "></div>
                <div className="w-full h-[3px] bg-slate-400"></div>
                <div className="w-full h-[3px] bg-[#9adc59]"></div>
              </div>
              <div className="flex flex-col">
                <h2 className="font-chakra text-[80px] text-[#9adc59] uppercase font-bold ">
                  Best Browser
                </h2>
                <span className="font-chakra text-[80px] text-[#9adc59] uppercase font-bold ">
                  Games
                </span>
              </div>
              <div className="w-full flex">
                <p className="text-slate-400 font-chakra">
                  Best Browser Games é o lugar certo pra encontrar os jogos mais
                  irados do momento. Nossa missão é trazer informações sobre os
                  jogos mais incríveis para você.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="bg-slate-400 p-2 px-8 text-white border-[#9adc59] border">
                  Explorar
                </button>
                <button className="bg-white p-2 px-8 text-slate-400 border-[#9adc59] border">
                  Explorar
                </button>
              </div>
            </div>
            <div className="w-[45%] h-full flex flex-col bg-[url('/public/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808.jpeg')] bg-no-repeat bg-cover grayscale border-[#9adc59] border-2 hover:grayscale-0 transition-all duration-700"></div>
          </div>
          <div className="w-full absolute max-w-[80px] mx-auto flex justify-center items-center bottom-8 ">
            <img
              className="w-full  flex justify-center items-center mx-auto grayscale hover:grayscale-0 transition-all duration-300 "
              src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1698936424/Ada/gaym0a7dqpbygkq2jeo7.png"
              alt=""
            />
          </div>
          {/* <Slider {...settings}>
          <div>
            <img
              src="https://i.pinimg.com/736x/b3/c7/23/b3c723820ac7f5e45c331a03c4ad8f2c.jpg"
              alt=""
            />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}
        </div>
      </div>
      {/* Segunda Seção */}
      <section className="w-full py-8 bg-[url('https://res.cloudinary.com/dgeeyohmv/image/upload/v1699500261/Ada/srdl8riyyhrzt9qnzmsy.png')] bg-cover bg-center mx-auto bg-fixed relative">
        <div className="container mx-auto w-full ">
          <div className="items-center h-full  justify-between w-full flex flex-col gap-4">
            <div className="w-full flex flex-col  ">
              <div className="flex bg-[#0b0a0e] h-full gap-4 ">
                <div className="flex items-center justify-center flex-col">
                  <div className="w-[3px] h-full bg-white "></div>
                  <div className="w-[3px] h-full bg-slate-400"></div>
                  <div className="w-[3px] h-full bg-[#9adc59]"></div>
                </div>
                <div className="w-full flex flex-col">
                  <span className="font-chakra text-[30px] text-[#9adc59] uppercase font-bold ">
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
            <div className="w-full h-[460px] bg-cover flex justify-center items-center bg-carousel-1 bg-no-repeat "></div>
            <div className="w-full h-[460px] bg-cover flex justify-center items-center bg-carousel-2 bg-no-repeat "></div>
            <div className="w-full h-[460px] bg-cover flex justify-center items-center bg-carousel-3 bg-no-repeat "></div>
            <div className="w-full h-[460px] bg-cover flex justify-center items-center bg-carousel-4 bg-no-repeat "></div>
            <div className="w-full h-[460px] bg-cover flex justify-center items-center bg-carousel-5 bg-no-repeat "></div>
          </Slider>
        </div>
      </section>
      <section className="container w-full mx-auto bg-black"></section>
    </div>
  );
};

export default Home;
