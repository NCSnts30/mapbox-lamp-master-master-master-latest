import React from 'react';
import Carousel from 'react-elastic-carousel';
import lamp1 from '../assets/lamp1.jpg';
import AboutUs from './AboutUs';
import Footer from './Footer';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
];

function Home() {
  const items = [
    { id: 1, src: lamp1 },
    { id: 2, src: lamp1, title: 'item #2' },
    { id: 3, src: lamp1, title: 'item #3' },
    { id: 4, src: lamp1, title: 'item #4' },
    { id: 5, src: lamp1, title: 'item #5' },
  ];

  return (
    <div id="about-us">
      <div className="flex flex-column items-center bg-emerald-300 h-full py-28">
        <div>
          <h1 className="text-9xl uppercase text-white drop-shadow-3xl">
            VOLTAIC V
          </h1>
        </div>
        <div className="text-justify text-white drop-shadow-3xl text-2xl">
          IOT Centralized Monitoring System for Solar Streetlight Application
          using LoRa with Microcontroller
        </div>
        <Carousel breakPoints={breakPoints} className="mt-20">
          {items.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt="" className="ml-10" />
            </div>
          ))}
        </Carousel>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
