import React from 'react';
import IBM_Backend from '../images/cerificates/IBM-Backend.jpg'
import Meta_Frontend from '../images/cerificates/Meta_Frontend.jpg'
import IBM_JS from '../images/cerificates/Ibm_js.jpg'
import NoSql from '../images/cerificates/NoSql.jpg'
import Java from '../images/cerificates/java.jpg'
import Python from '../images/cerificates/python.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Certificates = () => {

  return (
    <Carousel className=' w-2/3 mb-4 h-full rounded'>
      <div className='h-auto '><img src={IBM_Backend} alt='cerificate1' /></div>
      <div className='h-auto '><img src={Meta_Frontend} alt='cerificate2'  /></div>
      <div className='h-auto '><img src={IBM_JS} alt='cerificate3'  /></div>
      <div className='h-auto '><img src={NoSql} alt='cerificate4'/></div>
      <div className='h-auto '><img src={Java} alt='cerificate5' /></div>
      <div className='h-auto '><img src={Python} alt='cerificate6' /></div>
    </Carousel>
  );
};

export default Certificates;
