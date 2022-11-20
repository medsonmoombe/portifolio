import React from "react";
import { motion } from "framer-motion";
import { SpanText } from "./sidebar/SpanText";
import img from "../asset/images/emma.png";

const Home = () => {
  const headingText = "Hi, I'm Emmanuel".split("");
  return (
    <section className="bg-slate-800 w-5/5 flex pt-35 sm:pt-8 h-screen w-full sm:flex-col" id="home">
      <div className="w-5/5 gap-y-2 sm:mt-20 flex flex-col pl-20 sm:pl-0 flex flex-col  justify-center items-center sm:w-4/5 sm:m-auto">
        <div className="my_intro w-5/5">
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-5xl ml-8 mt-20  w-5/5 this">
            <span className="text-white bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-amber-600 md:text-6xl lg:text-5xl sm:text-3xl">
              {headingText.map((letter, index) => {
                return (
                  <SpanText
                    key={index}
                    className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 "
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </SpanText>
                );
              })}
            </span>
          </h1>
          <h2 className="lg:text-2xl md:text-xl sm:text-xl font-extrabold dark:text-white pl-8 pt-3 text-cyan-600 w-5/5">
            I'm a software Developer
          </h2>
        </div>
        <div className="para_intro flex justify-center items-center w-5/5 ">
          <p className="my-4  text-gray-500  ml-8 md:text-xl lg:text-2xl sm:text-xl w-5/5">
            A design-minded Developer focused on building beautiful interfaces &
            experiences.
          </p>
        </div>
        <div className="flex gap-3 mb-0 justify-start items-start w-5/5 mr-auto ml-8 sm:order-3">
          <a
            href="#"
            className="justify-start items-start bg-cyan-600 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-600  hover:text-white transition duration-150 ease-out hover:ease-in sm:py-1 sm:px-5 sm:text-xs"
          >
            Hire me
          </a>
          <a
            href="#"
            className="bg-cyan-600 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded ml-8 hover:bg-amber-600  hover:text-white transition duration-150 ease-out hover:ease-in sm:py-1 sm:px-4 sm:text-xs"
          >
            {" "}
            Download Resume
          </a>
        </div>
      </div>
      <div className=" w-4/5 sm:h-[300px] md:h-[400px] gap-y-5 flex flex-col  flex justify-center items-center mt-8  sm:mt-3 sm:m-auto  sm:rounded-full sm:hidden">
        <img
        whileHover={{scale: 1.2}}
        src={img} alt="profile image" className="w-86 h-80 sm:w-60 h-80 sm:ml-auto m-auto sm:m-auto sm:mt-0 md:mt-0 sm:rounded-full"/>
      </div>
    </section>
  );
}; 

export default Home;
