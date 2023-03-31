import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import About from './pages/about.js';
import Tech from './pages/tech.js';
import Creative from './pages/passions.js';
import GeleeMagazine from './pages/creativepages/gelee.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/technical" element={<Tech />} />
        <Route path="/creative" element={<Creative />} /> 
        <Route path="/creative/gelee" element={<GeleeMagazine />} /> 
      </Routes>
    </BrowserRouter>
);
