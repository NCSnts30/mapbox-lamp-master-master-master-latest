import React from 'react';
import { Element } from 'react-scroll';
import Typed from 'react-typed';
import kae from '../assets/Kae.jpg';
import ob from '../assets/OB.jpg';
import jha from '../assets/Jhasset.png';
import niel from '../assets/NeilC.jpg';
import elai from '../assets/Elaizaa.jpg';
import wsm from '../assets/WSM.jpg';

function AboutUs() {
  return (
    <Element className="p-20" id="about-us">
      <div className="flex place-content-end">
        <span className="text-7xl ">
          <Typed
            strings={['About Us']}
            typeSpeed={300}
            backSpeed={100}
            loop
            smartBackspace
          />
        </span>
      </div>
      <div className="relative h-screen flex flex-col md:flex-row">
        <div className="bg-slate-800 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 absolute h-1/2 md:h-auto md:h-1/2 top-0 md:top-14 left-0 md:left-14 text-white text-justify p-6">
          <p className="text-4xl md:text-5xl lg:text-6xl">OUR TEAM</p>
          <div className="mt-4 mb-4">
            <p className="text-base md:text-lg lg:text-xl">
              Meet the members of Voltaic V, along with the tutelage of
              Engr.Mark Melegrito
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-28 h-28 bg-white rounded-full mr-3">
              <img
                src={ob}
                alt="Oniel Balicoco"
                className="rounded-full max-w-full h-full mx-auto"
              />
            </div>
            <div className="w-28 h-28 bg-white rounded-full mr-3">
              <img
                src={kae}
                alt="Kae Lacap"
                className="rounded-full max-w-full h-full mx-auto"
              />
            </div>
            <div className="w-28 h-28 bg-white rounded-full mr-3 hidden md:block">
              <img
                src={jha}
                alt="Jhasset Tipalan"
                className="rounded-full max-w-full h-full mx-auto"
              />
            </div>
          </div>
          <div className="flex justify-center hidden md:flex">
            <div className="w-28 h-28 bg-white rounded-full mr-3 hidden md:block">
              <img
                src={niel}
                alt="Neil Santos"
                className="rounded-full max-w-full h-full mx-auto"
              />
            </div>
            <div className="w-28 h-28 bg-white rounded-full mr-3 hidden md:block">
              <img
                src={elai}
                alt="Elaiza Ilagan"
                className="rounded-full max-w-full h-full mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="aspect-ratio 1/1 bg-slate-400 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 absolute top-1/2 md:top-80 right-0 md:right-25">
          <div className="aspect-ratio 1/1 bg-slate-400 w-full h-full">
            <img
              src={wsm}
              alt="With Sir Mark"
              className="w-full h-full object-cover object-center md:object-contain"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}

export default AboutUs;
