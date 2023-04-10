import React, { useState } from 'react';
import Modal from 'react-modal';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

import PIC1 from '../assets/PIC1.jpg';

const Parallax1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const layerOne = {
    image: PIC1,
    translateY: [0, 50],
    scale: [2, 2, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner layers={[layerOne]} className="aspect-[3/1] div10">
        <div className="flex flex-col items-center p-6 md:p-12 lg:p-20 xl:p-32 h-full relative">
          <div>
            <h1 className="text-white uppercase drop-shadow-3xl sm:text-3xl md:text-6xl text-center">
              About our Study
            </h1>
          </div>
          <div className="text-white text-justify drop-shadow-3xl text-2xl">
            <h2 className="abstract">
              IoT centralized monitoring system with solar streetlight
              application employing LoRa as a long-range wireless communication
              between the solar streetlight and the central system and a
              microcontroller as the main monitoring system.
            </h2>
            <button onClick={handleOpenModal} className="read-more-button">
              Read More
            </button>
            <Modal
              isOpen={isModalOpen}
              onRequestClose={handleCloseModal}
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                  top: '50%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '80vw',
                  maxHeight: '80vh',
                  overflow: 'auto',
                },
              }}
            >
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
              <button onClick={handleCloseModal} className="read-more-button">
                Close
              </button>
            </Modal>
          </div>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  );
};

export default Parallax1;
