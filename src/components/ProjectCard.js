import React from "react";
import { motion } from "framer-motion";
import { BiLink } from "react-icons/bi";
import { BsCode } from "react-icons/bs";

const ProjectCard = ({ project }) => {
  const { title, img, description, link , code, lang} = project;
  return (
    <>
      <motion.div 
      className="max-w-sm rounded overflow-hidden shadow-lg bg-cyan-700 w-full h-auto">
        <motion.img 
            whileHover={{scale: 1.05}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full h-42" src={img} alt="project name"></motion.img>
        <div className="px-1 py-1">
          <div className="font-bold text-xl mb-2 text-amber-600 font-bold	 capitalize">{title}</div>
          <p className="text-white text-base w-30 overflow-ellipsis sm:text-xs">{description}...</p>
          <div className="flex justify-start items-start gap-2">
          <span className="bg-amber-700 text-white border-0 px-2 py-0 rounded">{lang[0]}</span>
          <span className="bg-amber-700 text-white border-0 px-2 py-0 rounded">{lang[1]}</span>
          <span className="bg-amber-700 text-white border-0 px-2 py-0 rounded">{lang[2]}</span>
          </div>
        </div>
        <div className="flex justify-start items-baseline ">
          <div className="px-6 pb-2 w-4/5 flex justify-center items-center mb-4">
            <a
              href={link}
              className="flex bg-transparent rounded-full px-3 py-1 sm:text-xs  text-white mr-2 mb-2 hover:underline"
            >
              <BiLink className="text-amber-700" />
              live
            </a>
          </div>
          <div className="px-6 pt-4 pb-2 w-4/5 flex justify-center items-center sm:pl-0 mb-4">
            <a
              href={code}
              className="flex bg-transparent  px-3 py-1 sm:text-xs  text-white mr-2 mb-2 hover:underline transition duration-150 ease-out hover:ease-in"
            >
              <BsCode className="text-amber-700 mt-1" />
              see code
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
