import React from 'react';
import Carousel from 'react-elastic-carousel';
import lamp1 from '../assets/A.jpg';
import lamp2 from '../assets/B.jpg';
import lamp3 from '../assets/C.jpg';
import lamp4 from '../assets/D.jpg';
import lamp5 from '../assets/E.jpg';
import PIC4 from '../assets/PIC4.jpg';
import PIC5 from '../assets/PIC5.jpg';
import PIC6 from '../assets/PIC6.jpg';
import PIC1 from '../assets/PIC1.jpg';
import PIC2 from '../assets/PIC2.jpg';
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
          layers={[{ image: 'src/assets/PIC1.jpg', speed: -50 }]}
          className="aspect-[3/1] opacity-65 div10"
        >
          <div className="flex flex-col items-center p-6 md:p-12 lg:p-20 xl:p-32 h-full relative">
            <div>
              <h1 className="text-white uppercase drop-shadow-3xl sm:text-3xl md:text-6xl text-center">
                About our Study
              </h1>
            </div>

            <div className="text-white text-justify drop-shadow-3xl text-2xl">
              <h2 className="abstract">
                IoT centralized monitoring system with solar streetlight
                application employing LoRa as a long-range wireless
                communication between the solar streetlight and the central
                system and a microcontroller as the main monitoring system. The
                technology intends to develop the community in the Philippines
                that has been utilizing conventional streetlights that
                frequently lack a monitoring mechanism. Traditional streetlights
                are still used in the Philippines, particularly in rural areas.
                The primary issue with solar streetlights currently is that they
                have a short lifespan due to a lack of a system for monitoring.
                The system covers the monitoring of LED, solar panel, and
                battery using the current, voltage, temperature, and luminosity
                sensors of a standalone solar streetlight. LoRa wireless
                communication is used because of its long-range capabilities (up
                to 12 km) and low power consumption, and the Arduino Nano is
                used to gather and transmit data to the NodeMCU, which serves as
                the system's receiver or central server that provides data to a
                web-based interface to offer real-time monitoring of solar
                streetlight parameters such as current, voltage, temperature,
                battery SOH and SOC, and luminance. The results indicate that
                the proposed system can track and manage solar streetlights
                while providing efficient maintenance scheduling. Overall, this
                system offers a practical solution for managing and optimizing
                solar streetlight applications, contributing to the development
                of a sustainable and energy-efficient environment.
              </h2>
            </div>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae iure cum quas. Cum obcaecati quos a quod officiis
                explicabo reprehenderit quis impedit ut temporibus? Iure
                reprehenderit eligendi blanditiis vitae? Sapiente.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae iure cum quas. Cum obcaecati quos a quod officiis
                explicabo reprehenderit quis impedit ut temporibus? Iure
                reprehenderit eligendi blanditiis vitae? Sapiente.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae iure cum quas. Cum obcaecati quos a quod officiis
                explicabo reprehenderit quis impedit ut temporibus? Iure
                reprehenderit eligendi blanditiis vitae? Sapiente.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: 'src/assets/PIC2.jpg', speed: -50 }]}
          className="aspect-[3/1] div10"
        >
          <div className="flex flex-col items-center p-6 md:p-12 lg:p-20 xl:p-32 h-full relative">
            <div>
              <h1 className="text-white uppercase drop-shadow-7xl sm:text-3xl md:text-7xl text-center">
                Developments
              </h1>
            </div>

            <div className="text-white text-justify drop-shadow-2xl text-2xl">
              <h2 className="abstract">
                The Internet of Things (IoT) is the interconnectivity of
                physical devices with the internet and other devices. It creates
                a system of devices that can communicate and perform tasks with
                minimal human intervention. IoT devices range from simple
                sensors to complex machinery and are connected to the internet,
                enabling them to be remotely monitored and controlled. IoT is
                being used in various industries, including healthcare,
                manufacturing, transportation, and agriculture. In healthcare,
                it is used to remotely monitor patients, while in manufacturing,
                it optimizes production processes and reduces waste. IoT can
                increase efficiency, reduce costs, and improve safety by
                collecting and analyzing data, enabling companies to make
                informed decisions. However, IoT also presents significant
                challenges, including security and privacy concerns. As more
                devices are connected to the internet, the risk of cyberattacks
                increases, and ensuring the security of devices and data is
                crucial. Overall, IoT has the potential to transform the way we
                live and work, but addressing security and privacy concerns is
                essential for its successful implementation.
              </h2>
            </div>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
      <br />
    </div>
  );
}

export default Home;
