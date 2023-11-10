import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KnowGames = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className=" w-full justify-between p-4 bg-[#0b0a0e]/60">
      <Slider className="segundo-slick" {...settings}>
        <div className="w-full ">
          <img
            className="w-full"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1343400/header.jpg?t=1686737279"
            alt=""
          />
        </div>

        <div className="w-full ">
          <img
            className="w-full"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/239350/header.jpg?t=1632912566"
            alt=""
          />
        </div>
        <div className="w-full ">
          <img
            className="w-full"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg?t=1695655205"
            alt=""
          />
        </div>
        <div className="w-[460px] h-[226px]">
          <img
            className="w-full h-full"
            src="https://images.crazygames.com/agario/20230719092731/agario-cover?auto=format,compress&q=75&cs=strip"
            alt=""
          />
        </div>
        <div className="w-[460px] h-[226px]">
          <img
            className="w-full h-full"
            src="https://slither.io/s/fbthumb3.jpg"
            alt=""
          />
        </div>
        <div className="w-[160px] h-[226px]">
          <img
            className="w-full h-full"
            src="https://s2-techtudo.glbimg.com/MCkfgJe78paku-H66pcND5ZKhPg=/0x0:695x406/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/a/c/3uBbrhTd2bDpqzDIkXoQ/2016-05-25-naruto-online-tutorial-1.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default KnowGames;
