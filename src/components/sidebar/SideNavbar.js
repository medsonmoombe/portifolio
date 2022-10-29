import React, {useState} from "react";
import { FaHome, FaTasks, FaUser } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdContacts } from "react-icons/md";
import { motion } from "framer-motion";
import logo from "../../asset/images/log.png";

const SideNavbar = () => {
   const [current, setCurrent] = useState(false);

   const hundleCurrent = () => {
      setCurrent(true);
   }


  return (
    <>
      <aside className="w-64" aria-label="Sidebar h-100">
        <div className="overflow-y-auto py-4 px-3 bg-cyan-700 rounded bg-cyan-700 h-screen pt-20">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5}}
          >
            <div className="pb-8">
              <img
                src={logo}
                alt="logo"
                className="w-40 h-40 m-auto rounded-full"
              />
            </div>
          </motion.div>
          <ul className="space-y-8 m-0">
            <li className={current ? "bg-red-600" : ""}>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-amber-600 dark:hover:bg-gray-700 hover:text-white transition duration-300 ease-out hover:ease-in"
              
              >
                <FaHome />
                <span className="ml-8">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/works"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-amber-600 dark:hover:bg-gray-700 hover:text-white transition duration-300 ease-out hover:ease-in"
              >
                <FaTasks />
                <span className="flex-1 ml-8 whitespace-nowrap">Works</span>
                <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-amber-600 dark:hover:bg-gray-700 hover:text-white transition duration-300 ease-out hover:ease-in"
              >
                <FaUser />
                <span className="flex-1 ml-8 whitespace-nowrap">About</span>
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-amber-600 dark:hover:bg-gray-700 hover:text-white transition duration-300 ease-out hover:ease-in"
              >
                <GiSkills />
                <span className="flex-1 ml-8 whitespace-nowrap">Skills</span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-amber-600 white:hover:bg-gray-700 hover:text-white transition duration-300 ease-out hover:ease-in"
              >
                <MdContacts />
                <span className="flex-1 ml-8 whitespace-nowrap">Contacts</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideNavbar;
