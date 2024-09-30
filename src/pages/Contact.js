import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { BsTelephone } from "react-icons/bs";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiCoursera } from 'react-icons/si';
import 'react-quill/dist/quill.snow.css';


const Contact = () => {
  const form = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID, // Replace with your EmailJS Template ID
      form.current,
      process.env.PUBLIC_KEY   // Replace with your EmailJS Public API Key
    )
    .then((result) => {
      alert("Message Sent Successfully!");
    }, (error) => {
      console.log(error.text);
      alert("Failed to Send Message. Please try again.");
    });
  };

  return (
    <section className="Contact mt-10">
      <div className="contact-me">
        <div className="con-header">
          <BsTelephone className="con-logo1" />
          <h2 className="contact-Header">Get In Touch</h2>
        </div>
<<<<<<< HEAD
        <div className="con-body flex flex-col sm:flex-row">
          <div className="con-info w-full sm:w-1/2">
            <h3>Contact Information</h3>
            <div className="info-detail">
              <div className="con-details">
                <FiPhoneCall className="con-logo" />
                <h4>+1234567</h4>
              </div>
              <div className="con-details">
                <FiMail className="con-logo" />
                <h4>os5217995@gmail.com</h4>
              </div>
              <div className="con-details">
                <FiMapPin className="con-logo" />
                <h4>Mumbai, Maharashtra</h4>
              </div>
=======
        <div className="con-links">
          <ul className='links-list'>
          <li><a href='https://github.com/OmkarSawantt' target="_blank"  rel="noreferrer"><SiGithub style={{color:'B384F9', fontSize:'2rem'}}></SiGithub></a></li>
          <li><a href='https://www.linkedin.com/in/omkar-sawant-5283b1283/' target="_blank"  rel="noreferrer"><SiLinkedin style={{color:'B384F9', fontSize:'2rem'}}></SiLinkedin></a></li>
          <li><a href='https://www.coursera.org/user/00f3311e7a015bbf1164218a221f1ce9' target="_blank"  rel="noreferrer"><SiCoursera style={{color:'B384F9', fontSize:'2rem'}}></SiCoursera></a></li>
        </ul>
>>>>>>> 8cf108c8c2fcbc5969e9b6ea5aa230787d61ceb9
            </div>
            <div className="con-links">
              <ul className='links-list'>
                <li>
                  <a href='https://github.com/OmkarSawantt' target="_blank" rel="noreferrer">
                    <SiGithub style={{ color: 'B384F9', fontSize: '2rem' }} />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/omkarsawantt' target="_blank" rel="noreferrer">
                    <SiLinkedin style={{ color: 'B384F9', fontSize: '2rem' }} />
                  </a>
                </li>
                <li>
                  <a href='https://www.coursera.org/user/omkarSawantt' target="_blank" rel="noreferrer">
                    <SiCoursera style={{ color: 'B384F9', fontSize: '2rem' }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="con-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name" className="label">First Name</label>
                  <input type="text" name="first_name" className="input" id="first-name" required />
                  <span className="input-border"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" name="last_name" className="input" id="last-name" required />
                  <span className="input-border"></span>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" className="input" id="email" required />
                  <span className="input-border"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="phone-number">Phone Number</label>
                  <input type="text" name="phone" id="phone" className="input" />
                  <span className="input-border"></span>
                </div>
              </div>
              <div className="form-row2">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" className="input overflow-auto resize-none" rows="4" required></textarea>
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
