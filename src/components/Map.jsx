import React, { useState, useEffect } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { BeatLoader } from 'react-spinners';
import { RiRadioButtonLine } from 'react-icons/ri';
import streetLamp from '../assets/street-lamp.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMap } from '../context/MapContext';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';

function MapComponent() {
  const { isLoading, lamp1, lamp2, lamp3, getLamp1, getLamp2, getLamp3, list } =
    useMap();

  const [viewport, setViewPort] = useState({
    longitude: 120.9558,
    latitude: 14.7432,
    zoom: 19,
  });
  const [popupData, setPopupData] = useState({
    long: 0,
    lat: 0,
    batteryCurrent: 0,
    batteryPower: 0,
    batteryVoltage: 0,
    isOnline: 0,
    luminosity: 0,
    rssi: 0,
    solarCurrent: 0,
    solarPower: 0,
    solarVoltage: 0,
    temperature: 0,
    soc: 0,
    soh: 0,
    receivedAt: null,
  });

  const [popUpLongAndLat, setPopUpLongAndLat] = useState({
    long: 0,
    lat: 0,
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    getLamp1();
    setShowPopup(true);
    setPopUpLongAndLat({ long: '120.956279', lat: '14.743260' });
  }, []);

  useEffect(() => {
    const {
      batteryCurrent,
      batteryPower,
      batteryVoltage,
      isOnline,
      luminosity,
      rssi,
      solarCurrent,
      solarPower,
      solarVoltage,
      temperature,
      receivedAt,
      soc,
      soh,
      nodeId,
    } = lamp1;

    if (showPopup) {
      setPopupData({
        batteryCurrent,
        batteryPower,
        batteryVoltage,
        isOnline,
        luminosity,
        rssi,
        solarCurrent,
        solarPower,
        solarVoltage,
        temperature,
        nodeId,
        soc,
        soh,
        receivedAt,
      });
      const limit = 10;
      list(nodeId, limit);

      if (solarVoltage >= 5 || batteryVoltage >= 5) {
        Swal.fire({
          title: 'Lamp 1 must be overcharged',
          text: 'Check the voltage',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
      if (solarCurrent >= 2 || solarCurrent >= 2) {
        Swal.fire({
          title: 'Lamp 1 must be faulty',
          text: 'Check the current',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
      if (temperature >= 55) {
        Swal.fire({
          title: 'Lamp 1 must be overheating',
          text: 'Check the temperature',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
      if (soc === 2.5) {
        Swal.fire({
          title:
            'Lamp 1 estimation is constant at 2.5V, battery is fully drained and not charging, ned to be replaced',
          text: 'Check the SOC',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
    }
  }, [lamp1]);

  useEffect(() => {
    const {
      batteryCurrent,
      batteryPower,
      batteryVoltage,
      isOnline,
      luminosity,
      rssi,
      solarCurrent,
      solarPower,
      solarVoltage,
      temperature,
      receivedAt,
      soc,
      soh,
      nodeId,
    } = lamp2;

    if (showPopup) {
      setPopupData({
        batteryCurrent,
        batteryPower,
        batteryVoltage,
        isOnline,
        luminosity,
        rssi,
        solarCurrent,
        solarPower,
        solarVoltage,
        nodeId,
        temperature,
        soc,
        soh,
        receivedAt,
      });
      const limit = 10;
      if (solarVoltage >= 5 || batteryVoltage >= 5) {
        Swal.fire({
          title: 'Lamp 2 must be overcharged',
          text: 'Check the voltage',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
      if (solarCurrent >= 2 || solarCurrent >= 2) {
        Swal.fire({
          title: 'Lamp 2 must be faulty',
          text: 'Check the current',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
      if (temperature >= 55) {
        Swal.fire({
          title: 'Lamp 2 must be overheating',
          text: 'Check the temperature',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
      if (soc === 2.5) {
        Swal.fire({
          title:
            'Lamp 2 estimation is constant at 2.5V, battery is fully drained and not charging, ned to be replaced',
          text: 'Check the SOC',
          icon: 'error',
          confirmButtonText: 'Okay',
        });
      }
      list(nodeId, limit);
    }
  }, [lamp2]);

  useEffect(() => {
    const {
      batteryCurrent,
      batteryPower,
      batteryVoltage,
      isOnline,
      luminosity,
      rssi,
      solarCurrent,
      solarPower,
      solarVoltage,
      temperature,
      soc,
      soh,
      nodeId,
      receivedAt,
    } = lamp3;

    if (showPopup) {
      setPopupData({
        batteryCurrent,
        batteryPower,
        batteryVoltage,
        isOnline,
        luminosity,
        rssi,
        solarCurrent,
        solarPower,
        solarVoltage,
        temperature,
        soc,
        soh,
        nodeId,
        receivedAt,
      });
    }
    const limit = 10;
    if (solarVoltage >= 5 || batteryVoltage >= 5) {
      Swal.fire({
        title: 'Lamp 3 must be overcharged',
        text: 'Check the voltage',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
    if (solarCurrent >= 2 || solarCurrent >= 2) {
      Swal.fire({
        title: 'Lamp 3 must be faulty',
        text: 'Check the current',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
    if (temperature >= 55) {
      Swal.fire({
        title: 'Lamp 3 must be overheating',
        text: 'Check the temperature',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
    if (soc === 2.5) {
      Swal.fire({
        title:
          'Lamp 3 estimation is constant at 2.5V, battery is fully drained and not charging, ned to be replaced',
        text: 'Check the SOC',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
    list(nodeId, limit);
  }, [lamp3]);

  return (
    <div className="flex p-8">
      <Toaster />
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
          <BeatLoader
            className="text-gray-800"
            loading={isLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <Map
        {...viewport}
        onMove={(evt) => setViewPort(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        style={{ height: 500, width: 1000, display: 'flex' }}
      >
        <Marker
          className="Node1"
          longitude="120.956279"
          latitude="14.743260"
          anchor="bottom"
          onClick={() => {
            getLamp1();
            setShowPopup(true);
            setPopUpLongAndLat({ long: '120.956279', lat: '14.743260' });
          }}
        >
          <img src={streetLamp} height={50} width={50} alt="street lamp" />
        </Marker>

        <Marker
          className="Node2"
          longitude="120.956306"
          latitude="14.743278"
          anchor="bottom"
          onClick={() => {
            getLamp2();
            setShowPopup(true);
            setPopUpLongAndLat({ long: '120.956295', lat: '14.7433129' });
          }}
        >
          <img src={streetLamp} height={50} width={50} alt="street lamp" />
        </Marker>

        <Marker
          className="Node3"
          longitude="120.955500"
          latitude="14.743028"
          anchor="bottom"
          onClick={() => {
            getLamp3();
            setShowPopup(true);
            setPopUpLongAndLat({ long: '120.9555461', lat: '14.7429909' });
          }}
        >
          <img src={streetLamp} height={50} width={50} alt="street lamp" />
        </Marker>

        {showPopup && (
          <Popup
            longitude={popUpLongAndLat.long}
            latitude={popUpLongAndLat.lat}
            anchor="right"
            offset={[-20, -30]}
            onClose={() => {
              setShowPopup(false);
            }}
            closeOnClick={false}
          >
            <p className="text-left font-extrabold">
              {popupData.isOnline ? (
                <span className="flex gap-1">
                  <RiRadioButtonLine color="green" /> Online
                </span>
              ) : (
                <span className="flex items-center  gap-1  ">
                  <RiRadioButtonLine color="red" /> Offline
                </span>
              )}
            </p>
            <p>
              Temperature:
              <span className="font-extrabold">
                {Number(popupData.temperature).toFixed(2)}
              </span>
            </p>
            <p>
              Battery Voltage:
              <span className="font-extrabold">
                {Number(popupData.batteryVoltage).toFixed(2)}
              </span>
            </p>
            <p>
              Battery Power:
              <span className="font-extrabold">
                {Number(popupData.batteryPower).toFixed(4)}
              </span>
            </p>
            <p>
              Battery Current:
              <span className="font-extrabold">
                {Number(popupData.batteryCurrent).toFixed(2)}
              </span>
            </p>
            <p>
              Solar Voltage:
              <span className="font-extrabold">
                {Number(popupData.solarVoltage).toFixed(2)}
              </span>
            </p>
            <p>
              Solar Power:
              <span className="font-extrabold">
                {Number(popupData.solarPower).toFixed(4)}
              </span>
            </p>
            <p>
              Solar Current:
              <span className="font-extrabold">
                {Number(popupData.solarCurrent).toFixed(2)}
              </span>
            </p>
            <p>
              Luminosity:
              <span className="font-extrabold">
                {Number(popupData.luminosity).toFixed(2)}
              </span>
            </p>
            <p>
              State of Charge:
              <span className="font-extrabold">
                {Number(popupData.soc).toFixed(2)}
              </span>
            </p>
            <p>
              State of Health:
              <span className="font-extrabold">
                {Number(popupData.soh).toFixed(2)}
              </span>
            </p>
            <p>
              Last Updated:
              <span className="font-extrabold">{popupData.receivedAt}</span>
            </p>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default MapComponent;
