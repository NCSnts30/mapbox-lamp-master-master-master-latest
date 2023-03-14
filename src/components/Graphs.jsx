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
        text: `${nodeId} Chart`,
      },
    },
  };

  const optionsBatteryVoltage = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} Battery Voltage Chart`,
      },
    },
  };
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
  const batteryVoltage = lists.map((x) => {
    return x.batteryVoltage;
  });
  const receivedAt = lists.map((x) => {
    return moment(x.receivedAt).format('MMMM Do YYYY, h:mm:ss a');
  });

  console.log('lists graph', lists);
  //   function subtractMonths(date, months) {
  //     date.setMonth(date.getMonth() - months);
  //     return date;
  //   }
  //   const startDate = moment(subtractMonths(new Date(), 5));
  //   const endDate = moment(new Date());

  //   const betweenMonths = [];

  //   if (startDate < endDate) {
  //     var date = startDate.startOf('month');

  //     while (date < endDate.endOf('month')) {
  //       betweenMonths.push(date.format('YYYY-MM'));
  //       date.add(1, 'month');
  //     }
  //   }

  //   console.log('betweenMonths', betweenMonths);
  const data = {
    labels: receivedAt,
    datasets: [
      {
        label: 'Battery Power',
        data: batteryPower,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Battery Current',
        data: batteryCurrent,
        fill: false,
        borderColor: 'rgb(102, 204, 0)',
        tension: 0.1,
      },
      {
        label: 'Battery Voltage',
        data: batteryVoltage,
        fill: false,
        borderColor: 'rgb(178, 102, 255)',
        tension: 0.1,
      },
    ],
  };

  const dataBattVoltage = {
    labels: receivedAt,
    datasets: [
      {
        label: 'Battery Voltage',
        data: batteryVoltage,
        fill: false,
        borderColor: 'rgb(178, 102, 255)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className=" h-full">
      <div className=" h-80">
        <Line options={optionsLamp} data={data} />
      </div>
      <div className=" h-80">
        <Line options={optionsBatteryVoltage} data={dataBattVoltage} />
      </div>
    </div>
  );
};

export default Graphs;
