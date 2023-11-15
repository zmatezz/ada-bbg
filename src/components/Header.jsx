import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const handleMobileMenuClick = () => {
    setMenuHidden(!isMenuHidden);
    stickyHeader();
  };

  const [isMenuHidden, setMenuHidden] = useState(true);

  const stickyHeader = () => {
    const header = document.querySelector("header");

    if (header) {
      if (window.scrollY > 100) {
        header.classList.remove("transparent");
        header.classList.add(
          "border-b",
          "border-[#9adc59]",
          "bg-[#0b0a0e]",
          "transition-colors",
          "duration-300",
          "ease-in-out"
        );
      } else {
        header.classList.remove("border-b", "border-[#9adc59]", "bg-[#0b0a0e]");
        header.classList.add(
          "transparent",
          "transition-colors",
          "duration-300",
          "ease-in-out"
        );
      }
    }
  };

  useEffect(() => {
    stickyHeader();
    window.addEventListener("scroll", stickyHeader);

    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return (
    <header className="w-full z-30 transparent p-4 transition-all  fixed">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="w-full max-w-[60px] md:max-w-[80px] mx-auto flex flex-col md:flex-row justify-center items-center">
          <img
            className="w-full hidden md:flex relative justify-center items-center mx-auto hover:scale-110 transition-all duration-300 "
            src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1698967945/Ada/ilhxvm6qj8ci4guiwbjs.png"
            alt=""
          />
          <img
            id="mobile-logo"
            onClick={handleMobileMenuClick}
            className="w-full flex  md:hidden relative justify-center items-center mx-auto hover:scale-110 transition-all duration-300 "
            src="https://res.cloudinary.com/dgeeyohmv/image/upload/v1698967945/Ada/ilhxvm6qj8ci4guiwbjs.png"
            alt=""
          />
        </div>
        <div
          id="navigation-menu"
          className={`w-full ${
            isMenuHidden ? "hidden" : ""
          } text-center mx-auto md:flex flex-col md:flex-row md:justify-end items-center gap-3`}
        >
          <p className="font-chakra font-bold text-slate-400 hover:text-[#9adc59]">
            <Link to="/login">login</Link>
          </p>
          <p className="font-chakra font-bold text-slate-400 hover:text-[#9adc59]">
            <Link to="/register">cadastrar-se</Link>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
