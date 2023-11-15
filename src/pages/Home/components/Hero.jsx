import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dgeeyohmv/image/upload/v1699495713/Ada/qmzmz7ijroxi1gf5pdrs.png')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="container w-full mx-auto h-full justify-center items-center flex flex-col relative z-20 px-10 md:px-0">
        <div className="items-center h-full max-h-[400px] justify-between w-full flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[45%] h-full flex flex-col  justify-between">
            <div className="w-full flex">
              <div className="w-full h-[3px] bg-white "></div>
              <div className="w-full h-[3px] bg-slate-400"></div>
              <div className="w-full h-[3px] bg-[#9adc59]"></div>
            </div>
            <div className="flex flex-row md:flex-col gap-2 md:gap-0 ">
              <h2 className="relative font-chakra  text-xl md:text-7xl text-[#9adc59] uppercase font-bold ">
                Best Browser
              </h2>
              <span className="font-chakra text-xl md:text-7xl text-[#9adc59] uppercase font-bold ">
                Games
              </span>
            </div>
            <div className="w-full flex">
              <p className="text-slate-400 font-chakra ">
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

          <div className="w-full md:w-[45%] h-full">
            <div className="relative w-full h-full flex flex-col bg-[url('https://s3b.cashify.in/gpro/uploads/2022/05/25010007/Best-Browser-Games.jpg')] bg-no-repeat bg-cover grayscale border-[#9adc59] border-2 hover:grayscale-0 transition-all duration-700 bg-center"></div>
            <div className="w-full flex justify-start md:justify-end">
              <img
                className="w-1/2 grayscale-0 relative "
                src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1699490573/Ada/id2mtkothdjwd1yml8v4.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full absolute max-w-[40px] md:max-w-[80px] mx-auto flex justify-center items-center bottom-8 ">
          <img
            className="w-full  flex justify-center items-center mx-auto grayscale hover:grayscale-0 transition-all duration-300 "
            src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1698936424/Ada/gaym0a7dqpbygkq2jeo7.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
