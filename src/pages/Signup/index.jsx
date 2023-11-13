import React from "react";
import Bbg from "../../components/Bbg";
import Form from "./components/Form";
import Ada from "../../components/Ada";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  return (
    <div>
      <div className="bg-[rgb(15,11,23)] h-screen md:h-screen w-full ">
        <div className="w-full h-full justify-between flex flex-col items-center mx-auto py-8 md:py-10 md:px-10 gap-4 bg-[url('https://ada-site-frontend.s3.sa-east-1.amazonaws.com/home/home-background.svg')] bg-no-repeat bg-fit bg-right bg-black/40">
          <Bbg />
          <Form />
          <Ada />
        </div>
      </div>
    </div>
  );
};

export default Signup;
