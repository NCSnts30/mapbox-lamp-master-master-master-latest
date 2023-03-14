import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import voltaicIcon from '../assets/voltaic.svg';

function NavBar() {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(!click);
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const ili = localStorage.getItem('isLoggedIn');
    if (ili) {
      setIsLoggedIn(true);
    }
  });
  return (
    <nav className="flex items-center py-3 px-3 border-b-white bg-slate-800">
      <ul className="flex flex-row  items-center basis-full justify-evenly">
        <li>
          <NavLink to="/">
            <img src={voltaicIcon} alt="" />
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink to="/dashboard">Voltaic</NavLink>
        </li>
        <li className="text-white">
          <NavLink to="/">
            <Link
              to="about-us"
              spy
              smooth
              offset={885}
              duration={500}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          {!isLoggedIn && (
            <NavLink to="/login">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                LOGIN
              </Button>
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
