import React, { useEffect } from 'react';
import Text from '../components/Text';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';
import cv from '../images/OmkarSawant.pdf';
import Spline from '@splinetool/react-spline';

const Home = () => {
  useEffect(() => {
    const section = document.querySelector("section");

    let currentPos = window.pageYOffset;
    let rafId;

    const update = () => {
      if (!section) return; // Ensure section exists
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.35;

      section.style.transform = `skewY(${speed}deg)`;
      currentPos = newPos;
      rafId = requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll('.intro-description');
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
    });

    const animations = [];

    splitTypes.forEach((textElement) => {
      const bg = '#000';
      const fg = '#fff';

      const text = new SplitType(textElement, { types: 'words', tagName: 'span' });
      const animation = gsap.fromTo(
        text.words,
        { color: bg, opacity: 0 },
        {
          color: fg,
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

      animations.push(animation);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      animations.forEach(animation => animation.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <section className="Home">
      <div className="first">
        <Spline scene="https://prod.spline.design/Kcc-A77v3CV4tZCy/scene.splinecode" className="absolute h-screen lg:blur-none" />
        <h3 className="z-10">Hi There!</h3>
        <h1 className="z-10">I am Omkar</h1>
        <Text />
        <a className="z-10 pt-4" href={cv} download="OmkarCV" target="_blank" rel="noreferrer">
          <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white border-solid transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/20 border border-white">
            <span className="text-lg">Download CV</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/20"></div>
            </div>
          </button>
        </a>
      </div>
      <div className="second z-10 bg-[#0D1117] shadow-inner">
        <div className="h-2 bg-gradient-to-r from-slate-300 to-[#939AFF] shadow-[0_10px_20px_rgba(147,_154,_255,_0.7)] "></div>
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
