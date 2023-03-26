import React, { useState, useEffect } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { BeatLoader } from 'react-spinners';
import { RiRadioButtonLine } from 'react-icons/ri';
import streetLamp from '../assets/street-lamp.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMap } from '../context/MapContext';
import toast, { Toaster } from 'react-hot-toast';

function MapComponent() {
  const { isLoading, lamp1, lamp2, lamp3, getLamp1, getLamp2, getLamp3, list } =
    useMap();

  const [viewport, setViewPort] = useState({
    longitude: 120.955716,
    latitude: 14.74311,
    zoom: 15,
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
    receivedAt: null,
  });

  const [popUpLongAndLat, setPopUpLongAndLat] = useState({
    long: 0,
    lat: 0,
  });

  const [showPopup, setShowPopup] = useState(false);

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
        receivedAt,
      });
      const limit = 10;
      list(nodeId, limit);
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
        receivedAt,
      });
      const limit = 10;

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
        nodeId,
        receivedAt,
      });
    }
    const limit = 10;

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
          className="Manila"
          longitude="120.955716"
          latitude="14.743110"
          anchor="bottom"
          onClick={() => {
            getLamp1();
            setShowPopup(true);
            setPopUpLongAndLat({ long: '120.955716', lat: '14.743110' });
          }}
        >
          <img src={streetLamp} height={50} width={50} alt="street lamp" />
        </Marker>

        <Marker
          className="Manila"
          longitude="120.957497"
          latitude="14.741006"
          anchor="bottom"
          onClick={() => {
            getLamp2();
            setShowPopup(true);
            setPopUpLongAndLat({ long: '120.957497', lat: '14.741006' });
          }}
        >
          <img src={streetLamp} height={50} width={50} alt="street lamp" />
        </Marker>

        <Marker
          className="Manila"
          longitude="120.957844"
          latitude="14.741041"
          anchor="bottom"
          onClick={() => {
            getLamp3();
            setShowPopup(true);
            setPopUpLongAndLat({ long: '120.957844', lat: '14.741041' });
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
