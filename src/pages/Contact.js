import React, { useEffect } from "react";
import { BsTelephone } from "react-icons/bs";
import 'react-quill/dist/quill.snow.css';
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { SiGithub,SiLinkedin ,SiCoursera } from 'react-icons/si'
const Contact = () => {
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
  return (
    <section className="Contact mt-10">
      <div className="contact-me">
      <div className="con-header">
        <BsTelephone className="con-logo1"/>
        <h2 className="contact-Header">Get In Touch</h2>
      </div>
      <div className="con-body flex flex-col sm:flex-row">
        <div className="con-info w-full sm:w-1/2">
        <h3>Contact Information</h3>
        <div className="info-detail">
            <div className="con-details">
              <FiPhoneCall className="con-logo"/><h4>+1234567</h4>
            </div>
            <div className="con-details">
              <FiMail className="con-logo"/><h4>os5217995@gmail.com</h4>
            </div>
            <div className="con-details">
              <FiMapPin className="con-logo"/><h4>Mumbai,Maharashtra</h4>
            </div>
        </div>
        <div className="con-links">
          <ul className='links-list'>
          <li><a href='https://github.com/OmkarSawantt' target="_blank"  rel="noreferrer"><SiGithub style={{color:'B384F9', fontSize:'2rem'}}></SiGithub></a></li>
          <li><a href='https://www.linkedin.com/in/omkar-sawant-5283b1283/' target="_blank"  rel="noreferrer"><SiLinkedin style={{color:'B384F9', fontSize:'2rem'}}></SiLinkedin></a></li>
          <li><a href='https://www.coursera.org/user/00f3311e7a015bbf1164218a221f1ce9' target="_blank"  rel="noreferrer"><SiCoursera style={{color:'B384F9', fontSize:'2rem'}}></SiCoursera></a></li>
        </ul>
            </div>
        </div>
        <div className="con-form">
        <form>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="first-name" className="label">First Name</label>
                    <input type="text" className="input" id="first-name" />
                    <span className="input-border"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" className="input" id="last-name" />
                    <span className="input-border"></span>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="input" id="email"/>
                    <span className="input-border"></span>
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="text" id="phone-number" className="input"/>
                    <span className="input-border"></span>
                </div>
            </div>
            <div className="form-row2">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="input overflow-auto resize-none  "  rows="4"/>
            </div>
            <button type="submit">Send Message</button>
        </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
