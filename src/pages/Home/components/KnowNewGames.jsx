import React from "react";
import KnowGames from "./KnowGames";

const KnowNewGames = () => {
  return (
    <section className="w-full  mx-auto h-full justify-center items-center flex flex-col gap-4 px-10 md:px-0  py-8 bg-[url('https://res.cloudinary.com/dgeeyohmv/image/upload/v1699500261/Ada/srdl8riyyhrzt9qnzmsy.png')] bg-cover bg-center bg-fixed relative">
      <div className="container mx-auto w-full ">
        <div className="container items-center h-full  justify-between w-full flex flex-col gap-4">
          <div className="container w-full flex flex-col  ">
            <div className="container flex bg-[#0b0a0e] h-full gap-4 ">
              <div className="flex items-center justify-center flex-col">
                <div className="w-[3px] h-full bg-white "></div>
                <div className="w-[3px] h-full bg-slate-400"></div>
                <div className="w-[3px] h-full bg-[#9adc59]"></div>
              </div>
              <div className="w-full flex flex-col">
                <span className="font-chakra md:text-[30px] text-[#9adc59] uppercase font-bold ">
                  Você conhece esses jogos?
                </span>
                <p className="text-slate-400 font-chakra">
                  Compartilhe sua opinião sobre os jogos ou conheça eles agora!
                </p>
              </div>
            </div>
          </div>
        </div>

        <KnowGames />
      </div>
    </section>
  );
};

export default KnowNewGames;
