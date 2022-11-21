import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaAngellist } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section className="bg-slate-800 w-5/5 flex flex-col pt-35 h-screen w-full">
        <h1 className="text-2xl text-center pb-10 sm:pb-2 text-cyan-700 font-bold w-full pt mt-20">
          Get in Touch
        </h1>
        <div className="flex m-auto w-5/5 gap-4 sm:flex-col">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="icon-sec bg-cyan-800 w-2/5 sm:w-3/5 sm:h-50  m-auto rounded"
          >
            <div className="flex justify-center items-center flex-col mt-20 sm:mt-8 gap-4 sm:gap-2">
              <a
                className="text-2xl text-amber-600 sm:text-sm"
                href="https://www.linkedin.com/in/emmanuelmoombe/"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-2xl text-amber-600 sm:text-sm"
                href="https://angel.co/u/emmanuel-moombe-1"
              >
                <FaAngellist />
              </a>
              <a
                className="text-2xl text-amber-600 sm:text-sm"
                href="https://github.com/medsonmoombe"
              >
                <FaGithub />
              </a>
              <a
                className="text-2xl text-amber-600 sm:text-sm"
                href="https://medium.com/@medsonmoombe21"
              >
                <FaMedium />
              </a>
              <a
                className="text-2xl text-amber-600 sm:text-sm"
                href="https://twitter.com/@emmanue78388405"
              >
                <FaTwitter />
              </a>
              <div className="flex justify-center items-center mb-8">
                <MdEmail className="text-2xl text-amber-600" />
                <a
                  className="text-xl text-amber-600 sm:text-xs"
                  href="mailto:medsonmoombe21@gmail.com"
                >
                  medsonmoombe21@gmail
                </a>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            action="https://formspree.io/f/xnqwbvpv"
            method="post"
            className="flex flex-col w-5/5 bg-gray-700 rounded p-4 sm:m-auto"
          >
            <h1 className="text-xl text-cyan-700 ml-2">Let's talk</h1>
            <p className="my-4  text-white  ml-2 md:text-xl lg:text-2xl sm:text-sm w-5/5">
              I'm always interested in hearing about new projects, so if you'd
              like to chat please get in touch.
            </p>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="outline-none bg-gray-700 border-b-2 border-amber-700 mb-2 text-sm text-cyan-700 ml-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="outline-none bg-gray-700 border-b-2 border-amber-700 mb-2 text-sm text-cyan-700 ml-2"
              required
            />
            <textarea
              className="outline-none rounded bg-gray-500 text-sm text-white p-2 ml-2"
              type="text"
              name="text area"
              placeholder="text area"
              required
            ></textarea>
            <button
              type="submit"
              className="flex justify-start w-fit ml-2 bg-cyan-600 hover:bg-amber-600 text-white  py-1 px-2 mt-4 rounded hover:bg-amber-600  hover:text-white transition duration-150 ease-out hover:ease-in sm:py-1 sm:px-4 sm:text-xs"
            >
              Get in touch
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
