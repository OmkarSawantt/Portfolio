import React, { useEffect } from 'react'
import { GoProjectRoadmap } from 'react-icons/go'
import Project1 from '../components/Project1';

import 'swiper/css';
const Projects = () => {
  useEffect(() => {
    const section = document.querySelector("section");

    let currentPos = window.pageYOffset;
    let rafId;

    const update = () => {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.35;

      section.style.transform = `skewY(${speed}deg)`;
      currentPos = newPos;
      rafId = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(rafId);
  }, []);
  return (
<section className='Project'>
  <div className='project-head'>
    <GoProjectRoadmap className='project-logo'/>
    <h2>Projects</h2>
  </div>
    <Project1/>
</section>
  )
}

export default Projects