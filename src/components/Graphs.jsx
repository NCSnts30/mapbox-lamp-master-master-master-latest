import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useMap } from '../context/MapContext';
import moment from 'moment';

const Graphs = () => {
  const { lists, nodeId } = useMap();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const optionsLamp = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} Battery Chart`,
      },
    },
  };
  const optionsSolarLamp = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} Solar Chart`,
      },
    },
  };

  const batteryPower = lists.map((x) => {
    return x.batteryPower;
  });
  const batteryCurrent = lists.map((x) => {
    return x.batteryCurrent;
  });
  const batteryVoltage = lists.map((x) => {
    return x.batteryVoltage;
  });
  const receivedAt = lists.map((x) => {
    return moment(x.receivedAt).format('MMMM Do YYYY, h:mm:ss a');
  });

  const solarVoltage = lists.map((x) => {
    return x.solarVoltage;
  });

  const solarPower = lists.map((x) => {
    return x.solarPower;
  });
  const solarCurrent = lists.map((x) => {
    return x.solarCurrent;
  });

  const data = {
    labels: receivedAt,
    datasets: [
      {
        label: 'Battery Power',
        data: batteryPower,
        fill: false,
        borderColor: '#dc3545',
        tension: 0.5,
      },
      {
        label: 'Battery Current',
        data: batteryCurrent,
        fill: false,
        borderColor: '#ffc107',
        tension: 0.5,
      },
      {
        label: 'Battery Voltage',
        data: batteryVoltage,
        fill: false,
        borderColor: '#0d6efd',
        tension: 0.5,
      },
    ],
  };
  const solarData = {
    labels: receivedAt,
    datasets: [
      {
        label: 'Solar Power',
        data: solarPower,
        fill: false,
        borderColor: 'rgb(160,0,0)',
        tension: 0.5,
      },
      {
        label: 'Solar Current',
        data: solarCurrent,
        fill: false,
        borderColor: 'rgb(160,0,160)',
        tension: 0.5,
      },
      {
        label: 'Solar Voltage',
        data: solarVoltage,
        fill: false,
        borderColor: 'rgb(0,160,0)',
        tension: 0.5,
      },
    ],
  };

  return (
    <div className="h-max flex justify-center  items-center  mb-50">
      <div className=" h-80 w-full flex flex-col">
        <Line options={optionsLamp} data={data} />
        <Line options={optionsSolarLamp} data={solarData} />
      </div>
    </div>
  );
};

export default Graphs;
