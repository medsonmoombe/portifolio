import React from "react";
import { SpanText } from "./sidebar/SpanText";

const Home = () => {
  const headingText = "Hi, I'm Emmanuel Moombe".split("");
  return (
    <section className="bg-slate-800 w-full flex pt-40">
      <div className="left-div w-4/5 gap-y-5 flex flex-col pl-20">
        <div className="my_intro">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ml-8 mt-20 this">
            <span className="text-white bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-amber-600 ">
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
          <h2 className="text-4xl font-extrabold dark:text-white pl-8 pt-3 text-cyan-600">
            I'm a software Developer
          </h2>
        </div>
        <div className="para_intro">
          <p className="my-4 text-lg text-gray-500 text-2xl ml-8 w-2/5">
            A design-minded Developer focused on building beautiful interfaces &
            experiences.
          </p>
        </div>
        <div className="button-d-v flex gap-3">
          <a
            href="#"
            className="bg-cyan-600 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded ml-8 hover:bg-amber-600  hover:text-white transition duration-150 ease-out hover:ease-in"
          >
            Hire me
          </a>
          <a
            href="#"
            className="bg-cyan-600 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded ml-8 hover:bg-amber-600  hover:text-white transition duration-150 ease-out hover:ease-in"
          >
            {" "}
            Download Resume
          </a>
        </div>
      </div>
      <div className="right-div">Right</div>
    </section>
  );
};

export default Home;
