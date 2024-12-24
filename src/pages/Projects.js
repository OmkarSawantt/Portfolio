import React from 'react'
import { GoProjectRoadmap } from 'react-icons/go'

import 'swiper/css';
import CardList from '../components/CardList';
const Projects = () => {
  return (
<section className='Project mt-10 w-auto self-start h-full justify-start'>
  <div className='project-head'>
    <GoProjectRoadmap className='project-logo'/>
    <h2>Projects</h2>
  </div>
    <CardList/>

</section>
  )
}

export default Projects