import React, { useState } from 'react';
import Modal from 'react-modal';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import PIC2 from '../assets/PIC2.jpg';
const Parallax2 = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  };

  const layerTwo = {
    image: PIC2,
    translateY: [0, 30],
    scale: [2, 2, 'easeOutCubic'],
    expanded: true,
    shouldAlwaysCompleteAnimation: true,
  };
  return (
    <ParallaxProvider>
      <ParallaxBanner layers={[layerTwo]} className="aspect-[3/1] div11">
        <div className="flex flex-col items-center p-6 md:p-12 lg:p-20 xl:p-32 h-full relative">
          <div>
            <h1 className="text-white uppercase drop-shadow-7xl sm:text-4xl md:text-7xl text-center">
              Developments
            </h1>
          </div>

          <div className="text-white text-justify drop-shadow-2xl text-2xl">
            <h2 className="abstract">
              The Internet of Things (IoT) is the interconnectivity of physical
              devices with the internet and other devices. It creates a system
              of devices that can communicate and perform tasks with minimal
              human intervention. IoT devices range from simple sensors to
              complex machinery and are connected to the internet, enabling them
              to be remotely monitored and controlled.
            </h2>
            <button onClick={handleOpenModal1} className="read-more-button">
              Read More
            </button>
            <Modal
              isOpen={isModalOpen1}
              onRequestClose={handleCloseModal1}
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
              <button onClick={handleCloseModal1} className="read-more-button">
                Close
              </button>
            </Modal>
          </div>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  );
};

export default Parallax2;
