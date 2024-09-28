import React from 'react';
import html from '../images/skills/html.png'
import css from '../images/skills/css.png'
import js from '../images/skills/javascript.png'
import tailwind from '../images/skills/tailwind.png'
import react from '../images/skills/react.png'
import node from '../images/skills/node.png'
import express from '../images/skills/express.png'
import mongodb from '../images/skills/mongodb.png'
import sql from '../images/skills/sql.png'
import cplusplus from '../images/skills/c++.png'
import java from '../images/skills/java.png'
import python from '../images/skills/python.png'
import git from '../images/skills/git.png'
import github from '../images/skills/github.png'
const Skills = () => {
  const icons = [
    { component: html, name: "Html" },
    { component: css, name: "Css" },
    { component: js, name: "Javascript" },
    { component: tailwind, name: "Tailwind css" },
    { component: cplusplus, name: "C++" },
    { component: java, name: "Java"},
    { component: python, name: "Python"},
    { component: sql, name: "SQL databases" },
    { component: react, name: "ReactJs" },
    { component: node, name: "NodeJs" },
    { component: express, name: "ExpressJs" },
    { component: mongodb, name: "MongoDb" },
    { component: git, name: "git" },
    { component: github , name: "github" },

  ];

  return (

<div className='flex w-full flex-wrap gap-4 mx-auto justify-center '>
    {
      icons.map((icon,index)=>(
<div className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-18 h-18 lg:w-36 lg:h-36  bg-neutral-800 rounded-xl" key={index}>
  <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24" ></div>
  <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
  <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24" ></div>
  <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
  <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
  <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
  <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>
  <div className="w-ful h-full self-center shadow-xl shadow-neutral-900  bg-[rgba(0,0,0,0.1)] backdrop-blur-sm  rounded-xl flex-col  flex justify-center ">
    <span className="text-slate-50 font-black  items-center text-center">{icon.name}</span>
    <div className=" self-center z-1 w-full mx-auto flex  justify-center">
      {/* <icon.component/> */}
      <img src={icon.component} alt={icon.name} width='75px' className='drop-shadow-2xl'/>
    </div>
  </div>
</div>
      ))
    }
</div>

  );
};

export default Skills;
