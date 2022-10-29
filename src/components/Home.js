import React from "react";
import { SpanText } from "./sidebar/SpanText";

const Home = () => {
  const headingText = "Hi, I'm Emmanuel Moombe".split("");
  return (
    <section className="bg-slate-800 w-full">
      <div className="left-div">
        <div className="my_intro">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl ml-8 mt-20">
            <span className="text-white bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
              {
                headingText.map((letter, index) => {
                   return(
                     <SpanText key={index} className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">{letter === " " ? "\u00A0" : letter}</SpanText>
                   )
                })
              }
            </span>
          </h1>
          I'm a software Developer
        </div>
        <div className="para_intro">
          A design-minded Developer focused on building beautiful interfaces &
          experiences.
        </div>
        <div className="button-d-v"></div>
      </div>
      <div className="right-div">Right</div>
    </section>
  );
};

export default Home;
