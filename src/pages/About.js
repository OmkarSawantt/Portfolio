import React, { useEffect } from 'react';
import { VscAccount } from 'react-icons/vsc';
import image from '../images/cloud-line-art.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Split and animate text in about_summery_part1
    const splitTypes1 = document.querySelectorAll('.about_summery_part1 p');
    splitTypes1.forEach((textElement) => {
      const text = new SplitType(textElement, { types: 'words', tagName: 'span' });

      gsap.fromTo(
        text.words,
        { color: '#000', opacity: 0 },
        {
          color: '#D1E8D3',
          opacity: 1,
          duration: 0.3,
          stagger: 0.2,
          scrollTrigger: {
            trigger: textElement,
            start: 'top 100%',
            end: 'top 0%',
            scrub: true,
            toggleActions: 'play play reverse reverse',
          },
        }
      );
    });

    // Split and animate text in about_summery_part2
    const splitTypes2 = document.querySelectorAll('.secondPara p');
    splitTypes2.forEach((textElement) => {
      const text = new SplitType(textElement, { types: 'words', tagName: 'span' });

      gsap.fromTo(
        text.words,
        { color: '#000', opacity: 0 },
        {
          color: '#D1E8D3',
          opacity: 1,
          duration: 0.3,
          stagger: 0.2,
          scrollTrigger: {
            trigger: textElement,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            toggleActions: 'play play reverse reverse',
          },
        }
      );
    });

    // Initialize and clean up Lenis instance
    const lenis = new Lenis({ smoothWheel: true, smoothTouch: false });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <section className='About'>
      <div className='intro'>
        <div className='about_head'>
          <VscAccount className='about_logo' />
          <h2>About me</h2>
        </div>
        <h3>
          I am an aspiring IT student with a profound passion for technology and problem-solving. Currently, I am pursuing a Bachelor's degree in Information Technology, with a strong focus on web development. My expertise lies in using cutting-edge technologies like React, Node.js, Express, and MongoDB to create dynamic and responsive web applications.
        </h3>
        <div className='about_summery_part1'>
          <p>
            My journey in the tech world began with a curiosity to understand how things work and a desire to build solutions that make a difference. Over time, this curiosity has evolved into a deep commitment to mastering the tools and technologies that drive the digital age. I am particularly interested in developing scalable, user-friendly applications that not only meet but exceed client expectations.<br /><br />
            Beyond academics, I am constantly working on personal projects that challenge my skills and push the boundaries of what I can create. I thrive in environments where I can collaborate with others, learn new concepts, and apply my knowledge to solve real-world problems. My goal is to bridge the gap between theoretical knowledge and practical application, ensuring that every project I undertake is a step towards becoming a well-rounded IT professional.
          </p>
        </div>
        <div className='about_summery_part2'>
          <img src={image} alt='Cloud' />
          <div className='secondPara'>
            <p>
              I am eager to contribute my skills and learn from industry professionals, as I believe that real-world experience is the key to mastering any craft. I am driven by a desire to innovate, and I am excited about the endless possibilities that the tech industry offers.
            </p>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h2>My Skills</h2>
        <Skills />
      </div>
      <div className='certificates w-full'>
        <h2>My Certificates</h2>
        <Certificates />
      </div>
    </section>
  );
};

export default About;
