import React from 'react'
import Carousel from 'react-elastic-carousel';
import { ProjectsArr } from '../projects/projects';

const Works = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
   <>
      <section className="bg-slate-800 w-5/5 flex pt-35 h-screen w-full">
       <h1> Some of my works</h1>
       <div>
       <Carousel breakPoints={breakPoints}>
        {
          ProjectsArr.map((project) => (<li>{ProjectsArr.title}</li>))
        }
       </Carousel>
       </div>
    </section>
   </>
  )
}

export default Works