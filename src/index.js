import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './nav.css';
import Services from './Components/Services'
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} from "react-router-dom";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    
  </Router>,
  document.getElementById('root')
);

