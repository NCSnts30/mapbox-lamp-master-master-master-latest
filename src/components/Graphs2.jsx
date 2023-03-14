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

const Graphs2 = () => {
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

  const optionsBatteryPower = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} Battery Power Chart`,
      },
    },
  };
  const optionsBatteryCurrent = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} Battery Current Chart`,
      },
    },
  };

  const batteryPower = lists.map((x) => {
    return x.batteryPower;
  });
  const batteryCurrent = lists.map((x) => {
    return x.batteryCurrent;
  });

  const receivedAt = lists.map((x) => {
    return moment(x.receivedAt).format('MMMM Do YYYY, h:mm:ss a');
  });

  const dataBattPower = {
    labels: receivedAt,
    datasets: [
      {
        label: 'Battery Power',
        data: batteryPower,
        fill: false,
        borderColor: 'rgb(178, 102, 255)',
        tension: 0.1,
      },
    ],
  };
  const dataBattCurrent = {
    labels: receivedAt,
    datasets: [
      {
        label: 'Battery Current',
        data: batteryCurrent,
        fill: false,
        borderColor: 'rgb(178, 102, 255)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className=" h-full flex justify-between">
      <div className="h-80 w-full">
        <Line options={optionsBatteryPower} data={dataBattPower} />
      </div>
      <div className=" h-80 w-full">
        <Line options={optionsBatteryCurrent} data={dataBattCurrent} />
      </div>
    </div>
  );
};

export default Graphs2;
