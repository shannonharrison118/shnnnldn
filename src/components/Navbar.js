import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import About from '../pages/about.js';


export const Navbar = () => {
  return(
    <div id="nav">
          <li>
              <Link id="navlink" to="/">home</Link>
          </li>
          <li>
              <Link id="navlink" to="/about">about</Link>
          </li>
          <li>
              <Link id="navlink" to="/">tech</Link>
          </li>
          <li>
              <Link id="navlink" to="/">creative</Link>
          </li>
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