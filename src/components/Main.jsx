import React from 'react';
import Map from './Map';
import { useMap } from '../context/MapContext';
import Table from './Table';
import ExportToExcel from './ExportToExcel';
import Graphs from './Graphs';

function Main() {
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
  } = useMap();

  return (
    <main>
      <div className="container-fluid px-4" id="dashboard">
        <h1 className="mt-4">Dashboard</h1>

        <div className="row">
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
            <div className="card bg-warning text-white mb-4">
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
            <div className="card bg-danger text-white mb-4">
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
            <div className="card bg-success text-white mb-4">
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
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-area me-1" />
                Location
              </div>
              <div className="card-body">
                <div>
                  <Map />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card mb-4 ">
              <div className="card-header">
                <i className="fas fa-chart-bar me-1" />
                List
              </div>
              <Graphs />
              <div className="flex justify-center">
                <ExportToExcel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
