import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";

const Head = () => {
  
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/upload-marks">Upload Marks</NavLink>
        </li>
        <li>
          <NavLink to="/students-registered">Students Registered</NavLink>
        </li>
        <li>
          <NavLink to="/mark-attendance">Mark Attendance</NavLink>
        </li>
      </ul>
      <div>
        <ul className='nav-links'>
          <li>
              <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      </div>
      
    </nav>    

       
  );

  
};

export default Head;
