import React from "react";
import Slider from "react-slick";

import Header from "../../components/Header";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import Experience from "./components/Experience";
import KnowNewGames from "./components/KnowNewGames";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <div className=" w-full h-full relative">
      <Header />
      <Hero />
      <Discover />
      <Experience />
      <KnowNewGames />
      <Footer />
    </div>
  );
};

export default Home;
