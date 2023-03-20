import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isLoggedOut, setIsLoggedOut] = useState();

  useEffect(() => {
    const ili = localStorage.getItem('isLoggedIn');
    if (ili) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedOut) {
      localStorage.clear();
      setIsLoggedIn(false);
    }
  }, [isLoggedOut, isLoggedIn]);

  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full mb-6 text-center">
          <a href="#twitter" className="text-white hover:text-gray-400 mr-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="#facebook" className="text-white hover:text-gray-400 mr-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#instagram" className="text-white hover:text-gray-400 mr-4">
            <i className="fab fa-instagram" />
          </a>
        </div>
        <div className="w-full text-center">
          <NavLink to="/dashboard"> Dashboard </NavLink>
          <NavLink to="/contact"> Contact Us </NavLink>
          {!isLoggedIn && <NavLink to="/login"> Login </NavLink>}

          <NavLink to="/pagination"> Click Here </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
