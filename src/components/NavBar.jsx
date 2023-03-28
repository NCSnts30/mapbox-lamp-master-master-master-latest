import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import voltaicIcon from '../assets/voltaic.svg';
import { HiOutlineLogout } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

function NavBar() {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(!click);
  const [closeSideBar, setCloseSidebar] = useState(false);
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
    <nav className="relative flex items-center py-3 px-3 border-b-white bg-slate-800">
      <ul className=" flex flex-row  items-center basis-full justify-evenly max-md:justify-between">
        <li>
          <NavLink to="/">
            <img
              src="https://imagebuckevoltaic.s3.ap-northeast-1.amazonaws.com/voltaic.png"
              alt=""
              className="w-16 h-16"
            />
          </NavLink>
        </li>

        <li className="text-white max-md:hidden">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li className="text-white max-md:hidden">
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
        <li className="text-white max-md:hidden">
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li className="max-md:hidden">
          {!isLoggedIn && (
            <NavLink to="/login">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Login
              </Button>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to="/login">
              <Button
                onClick={() => setIsLoggedOut(true)}
                className="flex gap-2 align-items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
              >
                <span>
                  <HiOutlineLogout />
                </span>
                <span>Logout</span>
              </Button>
            </NavLink>
          )}
        </li>
        <li className="text-white hidden max-md:block text-2xl">
          <button onClick={() => setCloseSidebar(true)}>
            <span>
              <GiHamburgerMenu />
            </span>
          </button>
        </li>
        {closeSideBar && (
          <div className="fixed z-50 left-0 top-0 h-screen flex justify-end items-start w-screen bg-slate-400 px-20">
            <ul className="flex flex-col gap-12 text-right text-white">
              <li className="w-full">
                <button onClick={() => setCloseSidebar(false)}>
                  <span className="text-5xl">
                    <AiFillCloseCircle />
                  </span>
                </button>
              </li>
              <li className="">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="">
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
              <li className="">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li className="">
                {!isLoggedIn && (
                  <NavLink to="/login">
                    <Button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                      onClick={() => {
                        setIsLoggedOut(true);
                        setCloseSidebar(false);
                      }}
                    >
                      Login
                    </Button>
                  </NavLink>
                )}
                {isLoggedIn && (
                  <NavLink to="/login">
                    <Button
                      onClick={() => setIsLoggedOut(true)}
                      className="flex gap-2 align-items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                    >
                      <span>
                        <HiOutlineLogout />
                      </span>
                      <span>Logout</span>
                    </Button>
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
