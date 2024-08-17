import React, { useEffect, useRef, useState } from 'react';
import IBM_Backend from '../images/cerificates/IBM-Backend.jpg'
import Meta_Frontend from '../images/cerificates/Meta_Frontend.jpg'
import IBM_JS from '../images/cerificates/Ibm_js.jpg'
import NoSql from '../images/cerificates/NoSql.jpg'
import Java from '../images/cerificates/java.jpg'
import Python from '../images/cerificates/python.jpg'

const Certificates = () => {
  const [count, setCount] = useState(1);
  const sliderRef = useRef(null);
  const slideListRef = useRef(null);

  const handleResize = () => {
    if (sliderRef.current) {
      sliderRef.current.style.width = `${sliderRef.current.offsetWidth}px`;
    }
  };

  const prevSlide = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(slideListRef.current.children.length - 1);
    }
  };

  const nextSlide = () => {
    if (count < slideListRef.current.children.length) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  };

  useEffect(() => {
    const sliderWidth = sliderRef.current.offsetWidth;
    slideListRef.current.style.left = `-${(count - 1) * sliderWidth}px`;

    const handleResizeEvent = () => {
      handleResize();
    };

    window.addEventListener('resize', handleResizeEvent);

    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
      clearInterval(interval);
    };
  }, [count, nextSlide]);

  return (
    <div id="slider" ref={sliderRef}>
      <ul id="slideWrap" ref={slideListRef}>
        <li><img src={IBM_Backend} alt="" /></li>
        <li><img src={Meta_Frontend} alt="" /></li>
        <li><img src={IBM_JS} alt="" /></li>
        <li><img src={NoSql} alt="" /></li>
        <li><img src={Java} alt="" /></li>
        <li><img src={Python} alt="" /></li>
      </ul>
      <button id="prev" onClick={() => prevSlide()}>&#8810;</button>
      <button id="next" onClick={() => nextSlide()}>&#8811;</button>
    </div>
  );
};

export default Certificates;
