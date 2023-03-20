import React from 'react';
import Carousel from 'react-elastic-carousel';
import lamp1 from '../assets/A.jpg';
import lamp2 from '../assets/B.jpg';
import lamp3 from '../assets/C.jpg';
import lamp4 from '../assets/D.jpg';
import lamp5 from '../assets/E.jpg';
import AboutUs from './AboutUs';
import './css/home.css';
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
  useParallax,
} from 'react-scroll-parallax';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 800, itemsToShow: 3, itemsToScroll: 3 },
];

function Home() {
  const items = [
    { id: 1, src: lamp1 },
    { id: 2, src: lamp2, title: 'item #2' },
    { id: 3, src: lamp3, title: 'item #3' },
    { id: 4, src: lamp4, title: 'item #4' },
    { id: 5, src: lamp5, title: 'item #5' },
  ];

  return (
    <div id="about-us">
      <div className="flex flex-col items-center bg-teal-500 p-6 md:p-12 lg:p-20 xl:p-32 h-full relative">
        <div>
          <h1 className="text-white uppercase drop-shadow-3xl sm:text-5x1 md:block sm:text-4xl md:text-8xl sm:text-center sm:w-full">
            VOLTAIC V
          </h1>
        </div>
        <div className="text-white text-justify drop-shadow-3xl text-2xl">
          IOT Centralized Monitoring System for Solar Streetlight Application
          using LoRa with Microcontroller
        </div>
        <Carousel
          breakPoints={breakPoints}
          className="mt-10 md:mt-20 lg:mt-40 bg-white bg-opacity-10 backdrop-blur-md md:backdrop-blur-lg rounded drop-shadow-2xl md:drop-shadow-3xl p-4 md:p-6 lg:p-12 xl:p-20"
        >
          {items.map((item) => (
            <div key={item.id}>
              <img
                src={item.src}
                alt=""
                className="ml-10 w-auto h-64 object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <AboutUs />
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: '/static/PIC1.jpg', speed: -30 }]}
          className="aspect-[4/1] opacity-90"
        >
          <div className="flex flex-col items-center p-6 md:p-12 lg:p-20 xl:p-32 h-full relative">
            <div>
              <h1 className="text-white uppercase drop-shadow-3xl sm:text-3xl md:text-6xl text-center">
                About our Study
              </h1>
            </div>

            <div className="text-white text-justify drop-shadow-3xl text-2xl">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae quisquam laboriosam numquam culpa voluptates atque,
                illo ab nemo? A nesciunt temporibus voluptate molestias, neque
                veniam odio et labore dolores enim!
              </h2>
            </div>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
      <div className="bg-slate-400 flex">
        <img src={lamp1} alt="lamps" className="w-1/2 h-auto" />
        <img src={lamp2} alt="lamps" className="w-1/2 h-auto" />
        <img src={lamp3} alt="lamps" className="w-1/2 h-auto" />
        <img src={lamp4} alt="lamps" className="w-1/2 h-auto" />
      </div>

      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: '/static/banner.jpg', speed: -30 }]}
          className="aspect-[4/1] opacity-80"
        >
          <div className="flex flex-col items-center p-6 md:p-12 lg:p-20 xl:p-32 h-full relative">
            <div>
              <h1 className="text-white uppercase drop-shadow-3xl sm:text-3xl md:text-6xl text-center">
                Developments
              </h1>
            </div>

            <div className="text-white text-justify drop-shadow-3xl text-2xl">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae quisquam laboriosam numquam culpa voluptates atque,
                illo ab nemo? A nesciunt temporibus voluptate molestias, neque
                veniam odio et labore dolores enim!
              </h2>
            </div>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
}

export default Home;
