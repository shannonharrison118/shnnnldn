import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import About from './pages/about.js';
import Tech from './pages/tech.js';
import Passion from './pages/passions.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/technical" element={<Tech />} />
        <Route path="/passions" element={<Passion />} />
      </Routes>
    </BrowserRouter>
);
