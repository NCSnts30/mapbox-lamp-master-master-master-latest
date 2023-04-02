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

  const batteryVoltage = lists.map((x) => {
    return x.batteryVoltage;
  });

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
    labels: receivedAt.reverse(),
    datasets: [
      {
        label: 'Battery Power',
        data: batteryPower.reverse(),
        fill: false,
        borderColor: '#dc3545',
        tension: 0.1,
      },
    ],
  };
  const dataBattCurrent = {
    labels: receivedAt.reverse(),
    datasets: [
      {
        label: 'Battery Current',
        data: batteryCurrent.reverse(),
        fill: false,
        borderColor: '#ffc107',
        tension: 0.1,
      },
    ],
  };
  const dataBattVoltage = {
    labels: receivedAt.reverse(),
    datasets: [
      {
        label: 'Battery Voltage',
        data: batteryVoltage.reverse(),
        fill: false,
        borderColor: '#0d6efd',
        tension: 0.1,
      },
    ],
  };

  ///

  const optionsSolarPower = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} Solar Power Chart`,
      },
    },
  };
  const optionsSolarCurrent = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} Solar Current Chart`,
      },
    },
  };
  const optionsSOC = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} State of Charge Chart`,
      },
    },
  };
  const optionsSOH = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} State of Health Chart`,
      },
    },
  };
  const optionsSolarVoltage = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} Solar Voltage Chart`,
      },
    },
  };

  const solarVoltage = lists.map((x) => {
    return x.solarVoltage;
  });
  const soc = lists.map((x) => {
    return x.soc;
  });
  const soh = lists.map((x) => {
    return x.soh;
  });

  const solarPower = lists.map((x) => {
    return x.solarPower;
  });
  const solarCurrent = lists.map((x) => {
    return x.solarCurrent;
  });

  const dataSolarPower = {
    labels: receivedAt,
    datasets: [
      {
        label: 'Solar Power',
        data: solarPower,
        fill: false,
        borderColor: '#dc3545',
        tension: 0.1,
      },
    ],
  };
  const dataSolarCurrent = {
    labels: receivedAt.reverse(),
    datasets: [
      {
        label: 'Solar Current',
        data: solarCurrent.reverse(),
        fill: false,
        borderColor: '#ffc107',
        tension: 0.1,
      },
    ],
  };
  const dataSolarVoltage = {
    labels: receivedAt.reverse(),
    datasets: [
      {
        label: 'Solar Voltage',
        data: solarVoltage.reverse(),
        fill: false,
        borderColor: '#0d6efd',
        tension: 0.1,
      },
    ],
  };
  const dataSOC = {
    labels: receivedAt.reverse(),
    datasets: [
      {
        label: 'State of Charge',
        data: soc.reverse(),
        fill: false,
        borderColor: '#0d6efd',
        tension: 0.1,
      },
    ],
  };
  const dataSOH = {
    labels: receivedAt.reverse(),
    datasets: [
      {
        label: 'State of Health',
        data: soh.reverse(),
        fill: false,
        borderColor: '#0d6efd',
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
      <div className=" h-full flex gap-8">
        <div className="h-80 w-full">
          <Line options={optionsBatteryPower} data={dataBattPower} />
        </div>
        <div className=" h-80 w-full">
          <Line options={optionsBatteryCurrent} data={dataBattCurrent} />
        </div>
        <div className="h-80 w-full">
          <Line options={optionsBatteryVoltage} data={dataBattVoltage} />
        </div>
      </div>
      <div className=" h-full flex gap-8 mt-40">
        <div className="h-80 w-full">
          <Line options={optionsSolarPower} data={dataSolarPower} />
        </div>
        <div className=" h-80 w-full">
          <Line options={optionsSolarCurrent} data={dataSolarCurrent} />
        </div>
        <div className="h-80 w-full">
          <Line options={optionsSolarVoltage} data={dataSolarVoltage} />
        </div>
      </div>
      <div className="h-80 w-full">
        <Line options={optionsSOC} data={dataSOC} />
      </div>

      <div className="h-80 w-full">
        <Line options={optionsSOH} data={dataSOH} />
      </div>
    </div>
  );
};

export default Graphs2;
