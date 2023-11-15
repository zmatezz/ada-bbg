import React from "react";

const Experience = () => {
  return (
    <section className="relative h-[50vh] md:h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dgeeyohmv/image/upload/v1699495713/Ada/qmzmz7ijroxi1gf5pdrs.png')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="pt-4 md:pt-0 w-full mx-auto h-full  md:justify-center items-center flex flex-col relative z-20 px-10 md:px-0 ">
        <div className="container items-center h-full md:max-h-[400px] justify-between w-full flex flex-col md:flex-row gap-4 py-8 md:py-0">
          <div className="w-full md:w-[45%] h-full ">
            <div className="w-full flex ">
              <div className="w-full h-[3px] bg-white "></div>
              <div className="w-full h-[3px] bg-slate-400"></div>
              <div className="w-full h-[3px] bg-[#9adc59]"></div>
            </div>
            <div className="relative w-full h-full flex flex-col bg-[url('https://blog.portoseguro.com.br/wordpress/wp-content/uploads/2020/02/RE-equipamentos-gamer-entenda-a-importancia-de-contratar-um-seguro-1536x1024.jpg')] bg-no-repeat bg-cover grayscale border-[#9adc59] border-2 hover:grayscale-0 transition-all duration-700 bg-center"></div>
            <div className="w-full flex justify-end md:justify-start">
              <img
                className="w-1/2 grayscale-0 relative top-0 right-0"
                src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1699490573/Ada/id2mtkothdjwd1yml8v4.png"
                alt=""
              />
            </div>
          </div>
          <div className="md:w-[45%] flex flex-col h-full  justify-start">
            <div className="flex flex-col">
              <h2 className="font-chakra md:text-[80px] text-[#9adc59] uppercase font-bold  ">
                Conte sua
              </h2>
              <span className="font-chakra md:text-[80px] text-[#9adc59] uppercase font-bold md:text-end">
                Experiência!
              </span>
            </div>
            <div className="w-full flex justify-end">
              <p className="text-slate-400 font-chakra md:text-end">
                Compartilhe sua opinião e as experiências que os jogos te
                proporcionaram!
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-4 gap-4">
              <img
                className="w-[50px] h-[50px] grayscale hover:grayscale-0 transition-all duration-300"
                src="/public/Google_Chrome_icon_(February_2022).svg.webp"
                alt=""
              />
              <img
                className="w-[50px] h-[50px] grayscale hover:grayscale-0 transition-all duration-300"
                src="/public/Firefox_logo,_2017.svg.png"
                alt=""
              />
              <img
                className="w-[50px] h-[50px] grayscale hover:grayscale-0 transition-all duration-300"
                src="/public/Safari_browser_logo.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
