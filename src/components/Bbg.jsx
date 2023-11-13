import React from "react";
import { Link } from "react-router-dom";

const Bbg = () => {
  return (
    <div className="w-full max-w-[80px] md:max-w-[100px] mx-auto flex justify-center items-center">
      <Link to="/">
        <img
          className="w-full  flex justify-center items-center mx-auto hover:scale-110 transition-all duration-300 "
          src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1698967945/Ada/ilhxvm6qj8ci4guiwbjs.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Bbg;
