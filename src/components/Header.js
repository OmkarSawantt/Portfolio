import React, {  useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 600 ? true : false);
  const closeNavHandler=()=>{
    if(window.innerWidth < 800){
      setIsNavShowing(false);
    }else{
      setIsNavShowing(true);
    }
  }
  return (
    <nav>
      <div className="container1 nav__container">
        <NavLink to="/" className="nav__logo">
          <h1>OS</h1>
        </NavLink>
        { isNavShowing &&<ul className={`nav__menu ${isNavShowing ? 'visible' : 'hidden'}`}>
          <li>
            <NavLink
              to="/"
              onClick={closeNavHandler}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeNavHandler}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              onClick={closeNavHandler}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeNavHandler}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>}
        <button className="nav__toggle-btn" type='button' onClick={()=>setIsNavShowing(!isNavShowing)} title='Toggle_Button'>
          {isNavShowing ? <AiOutlineClose style={{color:'#f2f2ff',fontSize:'2rem', strokeWidth:10}}/> :<FaBars style={{color:'#f2f2ff',fontSize:'2rem', strokeWidth:10}}/>}

        </button>
      </div>
    </nav>
  );
};

export default Header;
