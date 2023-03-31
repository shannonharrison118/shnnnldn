import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return(
    <div id="nav">
          <ul>
              <Link id="navlink" to="/">home</Link>
          </ul>
          <ul>
              <Link id="navlink" to="/about">about</Link>
          </ul>
          <ul>
              <Link id="navlink" to="/technical">technical</Link>
          </ul>
          {/* <ul>
              <Link id="navlink" to="/">creative</Link>
          </ul> */}
          <ul>
              <Link id="navlink" to="/creative">creative</Link>
          </ul> 
    </div>
  );
};

export const Footer = () => {
  return (
    <div className='container' id='footer'>
      <div className='flex row' id='footer-content'>
        <p>made w love by shannon harrison</p>
      </div>
    </div>
  );
};
