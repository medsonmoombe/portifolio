import React from 'react'
import Carousel from 'react-elastic-carousel';
import { ProjectsArr } from '../projects/projects';
import ProjectCard from './ProjectCard';

const Works = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ];
  return (
   <>
      <section className="bg-slate-800 w-5/5 flex flex-col pt-35 h-screen w-full">
       <div className="w-full mt-20">
       <h1 className="text-3xl text-center pb-10 text-amber-700"> My Works</h1>
       <Carousel breakPoints={breakPoints}>
        {
          ProjectsArr.map((project) => (<ProjectCard key={project.id} project={project}  />))
        }
       </Carousel>
       </div>
    </section>
   </>
  )
}

export default Works