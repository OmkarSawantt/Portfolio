import React from 'react'
import { SiGithub,SiLinkedin ,SiCoursera } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <footer>
      <div className='footer_element'>
        <h2>Omkar Sawant</h2>
        <ul className='first_list'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/project'}>Projects</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
        <ul className='second_list'>
          <li><a href='https://github.com/OmkarSawantt' target="_blank"  rel="noreferrer"><SiGithub style={{color:'F67280', fontSize:'2rem'}}></SiGithub></a></li>
          <li><a href='https://www.linkedin.com/in/omkar-sawant-5283b1283/' target="_blank"  rel="noreferrer"><SiLinkedin style={{color:'F67280', fontSize:'2rem'}}></SiLinkedin></a></li>
          <li><a href='https://www.coursera.org/user/00f3311e7a015bbf1164218a221f1ce9' target="_blank"  rel="noreferrer"><SiCoursera style={{color:'F67280', fontSize:'2rem'}}></SiCoursera></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
