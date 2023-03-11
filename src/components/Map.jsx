import React, { useState, useEffect } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import streetLamp from '../assets/street-lamp.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMap } from '../context/MapContext';

function MapComponent() {
  const { isLoading, lamp1, lamp2, lamp3, getLamp1, getLamp2, getLamp3 } =
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
    receivedAt: 0,
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
        receivedAt,
      });
    }
  }, [lamp1, showPopup, popUpLongAndLat]);

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
        temperature,
        receivedAt,
      });
    }
  }, [lamp2, showPopup, popUpLongAndLat]);

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
        receivedAt,
      });
    }
  }, [lamp3, showPopup, popUpLongAndLat]);

  return (
    <div className="flex p-8">
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
            <p className="text-center font-extrabold">
              ONLINE STATUS: {popupData.isOnline ? 'Online' : 'Offline'}
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
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default MapComponent;
