import React from "react";
import { motion } from "framer-motion";
import { skills } from "../projects/projects";

const Services = () => {
  return (
    <>
      <section className="bg-slate-800 w-5/5 flex flex-col pt-35 h-screen w-full">
        <h1 className="text-3xl text-center pb-10 text-cyan-700 font-bold w-full mt-20">
          My Skills
        </h1>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-4 m-auto gap-8 w-4/5 sm:mt-0"
        >
          {skills.map((skill) => (
            <motion.span
              drag
              dragConstraints={{
                top: -40,
                right: 30,
                bottom: 120,
                left: -30,
              }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              transition={{duration:1}}
              dragElastic={0.5}
              whileHover={{scale: 1.2}}
              whileTap={{ cursor: "grabbing" }}
              key={skill.id}
            >
              <img className="w-14 m-auto" src={skill.icon} alt="skills" />
            </motion.span>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Services;
