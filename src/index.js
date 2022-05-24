import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/style/nav.css';
import './Assets/style/font.css';
import Services from './Components/Ui/Pages/Services'
import About from './Components/Ui/Pages/About'
import Contactus from './Components/Ui/Static Pages/Contactus'
import Serviceinfo from './Components/Ui/Pages/Serviceinfo'
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/seviceinfo" element={<Serviceinfo />} />
    </Routes>
    
  </Router>,
  document.getElementById('root')
);

