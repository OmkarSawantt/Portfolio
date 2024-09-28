import React from 'react';
import Card from './Card';
import { FaUserTie } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { TbReport } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
const cards = [
  {
    icon: <FaUserTie/>,
    heading: 'Employee Management System Api',
    description: 'A comprehensive API for managing employee and department details, supporting full CRUD operations for efficient data management',
    technologies:'Node js , Expree js , Mongodb',
    count: '01',
    source: 'https://github.com/OmkarSawantt/Employee_management_Backend.git',
    deployment:'http://employee-management-backend-kwaj.onrender.com'
  },
  {
    icon: <LuListTodo/>,
    heading: 'MERN stack To-Do list',
    description: 'A full-stack To-Do list app built with the MERN stack, featuring task management (create, update, delete), a responsive UI, a RESTful API, and MongoDB for data storage.',
    technologies:'React js , Node js , Expree js , Mongodb',
    count: '02',
    source: 'https://github.com/OmkarSawantt/todo.git',
    deployment:null
  },
  {
    icon: <TbReport/>,
    heading: 'Report Generating Web app',
    description: 'A MERN stack app for creating, editing, and deleting event reports in PDF. Users can input event details, upload images, and access reports securely with JWT authentication. The UI is responsive, built with React and CSS',
    technologies:'React js , Node js , Expree js , Mongodb',
    count: '03',
    source: 'https://github.com/OmkarSawantt/ReportGenerator.git',
    deployment:null
  },
  {
    icon:<TfiWrite/>,
    heading: 'MERN stack blogging Web app',
    description: 'A MERN stack app for generating, editing, and deleting event reports in PDF. Users can input event details, upload images, and access reports securely with JWT. The app features a responsive React and CSS UI',
    technologies:'React js , Node js , Expree js , Mongodb',
    count: '04',
    source: 'https://github.com/OmkarSawantt/BlogBytes_Frontend.git',
    deployment:null
  },

];

const CardList = () => {
  return (
    <div className="cardsList flex flex-wrap gap-8 w-auto justify-center">
      {cards.map((card, index) => (
          <Card {...card} />
      ))}
    </div>
  );
};

export default CardList;