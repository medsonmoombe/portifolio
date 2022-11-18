import React from "react";
import { BiLink } from "react-icons/bi";
import { BsCode } from "react-icons/bs";

const ProjectCard = ({ project }) => {
  const { title, img, description, link } = project;
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-cyan-700 w-full">
        <img className="w-full h-40" src={img} alt="project name" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base w-30 overflow-ellipsis">{description}...</p>
        </div>
        <div className="flex justify-center items-center">
          {/* <div className="px-6 pt-4 pb-2 w-4/5 flex justify-center items-center">
            <a
              href={link}
              className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              <BiLink className="text-amber-700" />
              live
            </a>
          </div>
          <div className="px-6 pt-4 pb-2 w-4/5 flex justify-center items-center">
            <a
              href={link}
              className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              <BsCode className="text-amber-700 mt-1" />
              see code
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
