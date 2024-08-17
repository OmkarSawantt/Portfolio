import React from 'react';
import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiDotnet, SiExpress, SiJavascript, SiMongodb } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const Skills = () => {
  const icons = [
    { component: FaHtml5, name: "Html", className: 'html' },
    { component: FaCss3Alt, name: "Css", className: 'css' },
    { component: SiJavascript, name: "Javascript", className: 'javascript' },
    { component: FaReact, name: "ReactJs", className: 'react' },
    { component: FaNodeJs, name: "NodeJs", className: 'node' },
    { component: SiExpress, name: "ExpressJs", className: 'express' },
    { component: SiMongodb, name: "MongoDb", className: 'mongodb' },
    { component: SiCplusplus, name: "C++", className: 'cplus' },
    { component: FaJava, name: "Java", className: 'java' },
    { component: FaPython, name: "Python", className: 'python' },
    { component: TbBrandCSharp, name: "C#", className: 'csharp' },
    { component: SiDotnet, name: ".Net", className: 'dotnet' },
  ];

  return (
    <div className="wrapper">
      <div className="marquee">
        <div className="marquee-group">
          {icons.map((icon, index) => (
            <div className="icon-container" key={`icon1-${index}`} title={icon.name}>
              <icon.component className={icon.className} />
              <span className='icon-name'>{icon.name}</span>
            </div>
          ))}
          {icons.map((icon, index) => (
            <div className="icon-container" key={`icon2-${index}`} title={icon.name}>
              <icon.component className={icon.className} />
              <span className='icon-name'>{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
