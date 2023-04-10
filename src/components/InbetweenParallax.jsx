import React from 'react';

import PIC4 from '../assets/PIC4.jpg';
import PIC5 from '../assets/PIC5.jpg';
import PIC6 from '../assets/PIC6.jpg';
const InbetweenParallax = () => {
  return (
    <div className="midsec">
      <div className="bg-slate-400 w-full h-full flex">
        <div className="div6 grayscale relative w-full sm:w-1/3">
          <img
            src={PIC4}
            alt="lamp1"
            className="md:container md:mx-auto brightness-50 w-full"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="below-1056">
              <h1 className="text-white uppercase drop-shadow-3xl sm:text-2xl md:text-4xl lg:text-2x1 text-xl">
                IoT Based
              </h1>
            </div>
            <h5 className="text-white text-justify drop-shadow-3xl text-1xl md:text-1xl hide-below-1590">
              The system includes a WiFi module that serves as the central
              server, receiving data from the three lights and sending it to the
              website to monitor the parameters. This functions as an IoT
              system.
            </h5>
          </div>
        </div>
        <div className="div7 grayscale relative w-full sm:w-1/3">
          <img
            src={PIC5}
            alt="lamp1"
            className="md:container md:mx-auto brightness-50 w-full"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="below-1056">
              <h1 className="text-white uppercase drop-shadow-3xl sm:text-2xl md:text-4xl lg:text-2x1 text-xl">
                Real-time Monitoring
              </h1>
            </div>
            <h5 className="text-white text-justify drop-shadow-3xl text-1xl md:text-1xl hide-below-1590">
              This webpage allows the user to view the historical and
              contemporary monitoring systems. It can export the data of the
              parameters from the previous hours and days in order to monitor
              and compare their state.
            </h5>
          </div>
        </div>
        <div className="div8 grayscale relative w-full sm:w-1/3">
          <img
            src={PIC6}
            alt="lamp1"
            className="md:container md:mx-auto brightness-50 w-full"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="below-1056">
              <h1 className="text-white uppercase drop-shadow-3xl sm:text-2xl md:text-4xl lg:text-2x1 text-xl">
                #EnviFriendly
              </h1>
            </div>
            <h5 className="text-white text-justify drop-shadow-3xl text-1xl md:text-1xl hide-below-1590">
              It is considered environmentally friendly because it eliminates
              the need for paper-based communication by using a web application
              to monitor the solar streetlight. It reduced the carbon footprint
              that was associated with manufacturing and transportation.
              Additionally, it reduces energy consumption and greenhouse gas
              emissions by using energy-efficient servers.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InbetweenParallax;
