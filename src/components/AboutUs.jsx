import React from 'react';
import { Element } from 'react-scroll';
import Typed from 'react-typed';
import kae from '../assets/Kae.jpg';
import ob from '../assets/OB.jpg';
import jha from '../assets/Jhasset.png';
import niel from '../assets/NeilC.jpg';
import elai from '../assets/Elaizaa.jpg';
import wsm from '../assets/WSM.jpg';
import grp from '../assets/GRP.jpg';

function AboutUs() {
  return (
    <Element className="p-20 max-lg:p-0 " id="about-us">
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

      <div className="flex flex-col">
        <div className="bg-slate-800 w-full text-white p-10">
          <p className="flex justify-center text-4xl md:text-5xl lg:text-6xl">
            OUR TEAM
          </p>
          <div className="mt-4 mb-4">
            <p className="flex justify-center text-base md:text-lg lg:text-xl">
              Meet the members of Voltaic V, along with the tutelage of
              Engr.Mark Melegrito
            </p>
          </div>
          <div className="flex items-center justify-center h-max ">
            <div className="parent">
              <div className="w-28 h-28 max-md:w-16 max-md:h-16 bg-white rounded-full mr-3 div1">
                <img
                  src={ob}
                  alt="Oniel Balicoco"
                  className="rounded-full max-w-full h-full mx-auto"
                />
              </div>
              <div className="w-28 h-28 max-md:w-16 max-md:h-16 bg-white rounded-full mr-3 md:block div2">
                <img
                  src={kae}
                  alt="Kae Lacap"
                  className="rounded-full max-w-full h-full mx-auto"
                />
              </div>
              <div className="w-28 h-28 max-md:w-16 max-md:h-16 bg-white rounded-full mr-3 md:block div3">
                <img
                  src={jha}
                  alt="Jhasset Tipalan"
                  className="rounded-full max-w-full h-full mx-auto"
                />
              </div>
              <div className="w-28 h-28 max-md:w-16 max-md:h-16 bg-white rounded-full mr-3 md:block div4">
                <img
                  src={niel}
                  alt="Neil Santos"
                  className="rounded-full max-w-full h-full mx-auto"
                />
              </div>
              <div className="w-28 h-28 max-md:w-16 max-md:h-16 bg-white rounded-full mr-3 div5">
                <img
                  src={elai}
                  alt="Elaiza Ilagan"
                  className="rounded-full max-w-full h-full mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-slate-400 w-full h-full flex ">
          <img src={wsm} alt="With Sir Mark" className="w-50 h-50" />
          <img src={grp} alt="With Sir Mark" className="w-50 h-auto" />
        </div>
      </div>
    </Element>
  );
}

export default AboutUs;
