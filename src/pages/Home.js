import React, { useEffect } from 'react';
import Text from '../components/Text';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';
import cv from '../images/OmkarSawant.pdf'
const Home = () => {
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll('.intro-description');

    splitTypes.forEach((textElement) => {
      const bg =  '#000';
      const fg =  '#fff';

      // Change `types` from 'chars' to 'words'
      const text = new SplitType(textElement, { types: 'words', tagName: 'span' });

      gsap.fromTo(
        text.words,
        { color: bg, opacity: 0 },
        {
          color: fg,
          opacity: 1,
          duration: 0.3,
          stagger: 0.2,  // Adjust stagger timing if needed
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

    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup Lenis instance
    };
  }, []);

  return (
    <section className="Home">
      <div className="first">
        <h3>Hi There!</h3>
        <h1>I am Omkar</h1>
        <Text />
        <a href={cv} download="OmkarCV" target='_blank' rel="noreferrer">
        <button className="bg-[#939AFF] hover:bg-[#535cd5] text-[#0D1117] font-bold py-2 px-4 rounded inline-flex items-center md:mx-8 mx-4">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download CV</span>
        </button>
        </a>

      </div>
      <div className="second">
        <div className="intro-header">
          <h2 className="intro-title">Introduction</h2>
          <p className="intro-greeting">
            <span className="intro-name">Hi there! I'm Omkar,</span> I'm from Mumbai, Maharashtra.
            I have completed High School and currently pursuing Bachelor of Science in Information Technology and in Third year of it.
          </p>
        </div>
        <div className="intro-description">
          <p>
            I'm a tech enthusiast with a curious mind, always eager to learn and explore. My love for technology started early, as a kid who was more interested in taking apart gadgets than playing with them. Over the years, this curiosity blossomed into a passion for web development and programming.
            <br /><br />
            But life isn't all about code for me. When I'm not working on a new project, you might find me immersed in a good book or battling it out in the latest video game. I believe that life is about balance, and I find joy in both the logical and the creative.
            <br /><br />
            Thanks for stopping by, and I hope you enjoy exploring what I’ve been up to!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
