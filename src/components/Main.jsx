import React, { useState, useEffect } from 'react';
import Map from './Map';
import { useMap } from '../context/MapContext';
import Table from './Table';
import ExportToExcel from './ExportToExcel';
import Graphs from './Graphs';
import Graphs2 from './Graphs2';
import DateTimePicker from 'react-datetime-picker';

function Main() {
  const {
    startDate,
    endDate,
    batteryCurrent,
    batteryPower,
    batteryVoltage,
    luminosity,
    rssi,
    soc,
    soh,
    solarCurrent,
    solarPower,
    solarVoltage,
    temperature,
    receivedAt,
    getDateRange,
  } = useMap();
  const [startDt, getStartDt] = useState(startDate);
  const [endDt, getEndDt] = useState(endDate);
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    getDateRange(startDt, endDt);
  }, [startDt, endDt]);

  useEffect(() => {
    const ili = localStorage.getItem('isLoggedIn');
    if (ili) {
      setIsLoggedIn(true);
    } else {
      window.location.replace('/login');
    }
  }, []);
  return (
    <main>
      <div className="container-fluid px-4" id="dashboard">
        <h1 className="mt-4">Dashboard</h1>

        <div className="row flex justify-center">
          <div className="col-xl-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">
                Battery Voltage: {Number(batteryVoltage).toFixed(2)} <br />{' '}
                Solar Voltage:
                {Number(solarVoltage).toFixed(2)}
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a
                  className="small text-white stretched-link"
                  href="#ViewDetails"
                >
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-green-600 text-white mb-4">
              <div className="card-body">
                Battery Current: {Number(batteryCurrent).toFixed(2)} <br />
                Solar Current: {Number(solarCurrent).toFixed(2)}
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a
                  className="small text-white stretched-link"
                  href="#ViewDetails"
                >
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-cyan-700 text-white mb-4">
              <div className="card-body">
                Battery Power: {Number(batteryPower).toFixed(4)} <br /> Solar
                Power: {Number(solarPower).toFixed(4)}
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a
                  className="small text-white stretched-link"
                  href="#ViewDetails"
                >
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-yellow-500 text-white mb-4">
              <div className="card-body">
                Luminosity: {Number(luminosity).toFixed(2)}
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a
                  className="small text-white stretched-link"
                  href="#ViewDetails"
                >
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-orange-400 text-white mb-4">
              <div className="card-body">
                Temperature: {Number(temperature).toFixed(2)}
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a
                  className="small text-white stretched-link"
                  href="#ViewDetails"
                >
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-orange-900 text-white mb-4">
              <div className="card-body">
                State of Charge: {Number(soc).toFixed(2)}
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a
                  className="small text-white stretched-link"
                  href="#ViewDetails"
                >
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="card bg-emerald-600 text-white mb-4">
              <div className="card-body">
                State of Health: {Number(soh).toFixed(2)}
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a
                  className="small text-white stretched-link"
                  href="#ViewDetails"
                >
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-10">
          <div className="col-xl-6">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-area me-1" />
                Location
              </div>
              <div className="card-body">
                <div>
                  <Map />
                  <div className="flex justify-center gap-10">
                    <ExportToExcel />
                    <div className="flex flex-col">
                      <span>Start Date and Time</span>
                      <DateTimePicker onChange={getStartDt} value={startDt} />
                      <span>End Date and Time</span>
                      <DateTimePicker onChange={getEndDt} value={endDt} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card mb-4 h-full">
              <div className="card-header">
                <i className="fas fa-chart-bar me-1" />
                All Parameters
              </div>

              <Graphs />
            </div>
          </div>
          <div>
            <Graphs2 />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
