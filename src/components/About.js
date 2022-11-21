import React from "react";
import { motion } from "framer-motion";
import img from "../asset/images/emma.png";

const About = () => {
  return (
    <>
      <section className="bg-slate-800 w-5/5 flex flex-col pt-35 h-screen w-full gap-8 items-center">
        <motion.div
                initial={{ opacity: 0, x: -50}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 , duration: 0.6}}>
        <h1 className="text-3xl text-center pb-10 text-cyan-700 font-bold w-full pt mt-20">
          About Me
        </h1>
        <div
        className=" w-6/5 sm:h-[250px] md:h-[400px] flex flex-col  flex justify-center items-center pt-2  sm:mt-3  sm:rounded-full m-auto">
          <img
            whileHover={{ scale: 1.2 }}
            src={img}
            alt="profile image"
            className="w-80 h-60 sm:w-60 h-80 sm:ml-auto m-auto sm:m-auto sm:mt-0 md:mt-0 sm:rounded-full rounded-full border-8 border-cyan-600"
          />
        </div>
        <div
        className="pt-2">
          <article className="w-full m-auto">
            <p className="abt-para w-3/5 m-auto text-gray-500 sm:text-sm">
              Hello, I'm a software developer! I can help you build a product,
              feature or website. Look through some of my work and experience!
              If you like what you see and have a project you need coded, don't
              hesitate to contact me.
            </p>
          </article>
        </div>
        <div
         className="flex gap-3 mb-0  ml-42  w-3/5 m-auto md:mt-8 sm:mt-4 mt-8">
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
        </motion.div>
      </section>
    </>
  );
};

export default About;
