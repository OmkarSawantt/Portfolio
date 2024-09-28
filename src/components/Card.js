import React from 'react';
import { Link } from 'react-router-dom'
const Card = ({ icon, heading, description, count,source,technologies,deployment }) => {
  console.log(deployment);

  return (
    <div className="card-details  w-80 h-full">
      <div className="card-details--inner h-full mb-4">
        <div className="card-icon ">
          <div className='text-6xl mb-8  text-[#FFA28B] '>{icon}</div>
        </div>
        <div className="card-detail">
          <h3 className="card-heading">
            <Link to={'/project'}>{heading}</Link>
          </h3>
          <p className="card-decription mb-4">{description}</p>
          <p className='text-base text-[#D1E8D3] mb-4'><span className=' text-[#FFA28B] font-bold'>Technolgies Used:</span><br></br>{technologies}</p>
        <a href={source} rel="noreferrer" target="_blank" className="m-4 my-4 text-white   font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 mb-4 focus:ring-blue-800"> Source Code</a><br/><br/>
        {
          deployment && (
            <a href={deployment} rel="noreferrer" target="_blank" className="m-4 my-4 text-white   font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700  focus:ring-blue-800">Live Demo</a>
          )
        }
        </div>
        <h6 className="card-count bottom-0 mt-4">{count}</h6>
      </div>
    </div>
  );
};

export default Card;