import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full p-12 items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dgeeyohmv/image/upload/v1699495713/Ada/qmzmz7ijroxi1gf5pdrs.png')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="container w-full mx-auto h-full justify-center items-center flex flex-col relative z-20">
        <div className="container relative items-center h-full max-h-[400px] justify-between w-full flex flex-col gap-8 md:gap-4">
          <div className="w-full h-full">
            <div className="w-[20%] flex ">
              <div className="w-full h-[3px] bg-white "></div>
              <div className="w-full h-[3px] bg-slate-400"></div>
              <div className="w-full h-[3px] bg-[#9adc59]"></div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-start">
            <div className="flex flex-col">
              <h2 className="font-chakra md:text-[80px] text-[#9adc59] uppercase font-bold text-center ">
                LET'S START THE GAME
              </h2>
              <p className="text-slate-400 font-chakra text-center">
                Feito com 💚 Matheus Costa.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex justify-end">
            <div className="w-[20%] flex  ">
              <div className="w-full h-[3px] bg-white "></div>
              <div className="w-full h-[3px] bg-slate-400"></div>
              <div className="w-full h-[3px] bg-[#9adc59]"></div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start">
          <img
            className="w-1/4 grayscale-0 relative -bottom-10 right-0"
            src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1699490573/Ada/id2mtkothdjwd1yml8v4.png"
            alt=""
          />
        </div>
        <div className="w-full absolute max-w-[80px] mx-auto flex flex-col justify-center items-center bottom-0 ">
          <img
            className="w-full  flex justify-center items-center mx-auto grayscale hover:grayscale-0 transition-all duration-300 "
            src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1698936424/Ada/gaym0a7dqpbygkq2jeo7.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
