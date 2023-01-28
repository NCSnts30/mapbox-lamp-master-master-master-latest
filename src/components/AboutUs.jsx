import React from 'react';
import Typed from 'react-typed';

function AboutUs() {
  return (
    <div className="" id="about-us">
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
      <div className="relative h-screen">
        <div className="bg-slate-800 w-1/2 absolute h-1/2 left-12 text-white p-20 text-justify">
          <p className="text-4xl">OUR TEAM</p>
          <div className="mt-4 mb-4">
            <p>
              Meet the members of Voltaic V, along with the tutelage of Engr.
              Mark Melegrito
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-28 h-28 bg-white rounded-full mr-3">
              <img
                src="src\assets\OB.jpg"
                alt="Oniel Balicoco"
                className="rounded-full w-28 h-28"
              />
            </div>
            <div className="w-28 h-28 bg-white rounded-full mr-3">
              <img
                src="src\assets\Kae.jpg"
                alt="Kae Lacap"
                className="rounded-full w-28 h-28"
              />
            </div>
            <div className="w-28 h-28 bg-white rounded-full mr-3">
              <img
                src="src\assets\Jhasset.png"
                alt="Jhasset Tipalan"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-28 h-28 bg-white rounded-full mr-3">
              <img
                src="src\assets\NeilC.jpg"
                alt="Neil Santos"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="w-28 h-28 bg-white rounded-full mr-3">
              <img
                src="src\assets\Elaizaa.jpg"
                alt="Elaiza Ilagan"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="aspect-ratio 1/1 bg-slate-400 w-1/2 absolute top-56 h-1/2 right-28">
          <img
            src="src\assets\WSM.jpg"
            alt="With Sir Mark"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
