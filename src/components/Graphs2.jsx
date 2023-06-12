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
    scales: {
      y: {
        ticks: {
          callback: (label) => `${label} W`,
        },
      },
    },
    
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
    scales: {
      y: {
        ticks: {
          callback: (label) => `${label} A`,
        },
      },
    },
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
    scales: {
      y: {
        ticks: {
          callback: (label) => `${label} V`,
        },
      },
    },
  };

  const optionsTemperature = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} Temperature Chart`,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (label) => `${label} °C`,
        },
      },
    },
  };
  const optionsLuminosity = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `${nodeId} Luminosity Chart`,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (label) => `${label} lx`,
        },
      },
    },
  };

  const temperature = lists.map((x) => {
    return x.temperature;
  });
  const luminosity = lists.map((x) => {
    return x.luminosity;
  });

  const batteryVoltage = lists.map((x) => {
    return x.batteryVoltage;
  });

  const batteryPower = lists.map((x) => {
    return x.batteryPower;
  });
  const batteryCurrent = lists.map((x) => {
    return x.batteryCurrent;
  });

  let receivedAt = lists.map((x) => {
    return moment(x.receivedAt).format('MMMM Do YYYY, h:mm:ss a');
  });

  receivedAt = receivedAt.reverse();

  const dataBattPower = {
    labels: receivedAt,
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
    labels: receivedAt,
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
    labels: receivedAt,
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
  const dataLuminosity = {
    labels: receivedAt,
    datasets: [
      {
        label: 'Luminosity',
        data: luminosity.reverse(),
        fill: false,
        borderColor: '#0d6efd',
        tension: 0.1,
      },
    ],
  };
  const dataTemperature = {
    labels: receivedAt,
    datasets: [
      {
        label: 'Temperature',
        data: temperature.reverse(),
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
    scales: {
      y: {
        ticks: {
          callback: (label) => `${label} W`,
        },
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
    scales: {
      y: {
        ticks: {
          callback: (label) => `${label} A`,
        },
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
    scales: {
      y: {
        ticks: {
          callback: (label) => `${label} %`,
        },
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
    scales: {
      y: {
        ticks: {
          callback: (label) => `${label} %`,
        },
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
    scales: {
      y: {
        ticks: {
          callback: (label) => `${label} V`,
        },
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
    labels: receivedAt,
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
    labels: receivedAt,
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
    labels: receivedAt,
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
    labels: receivedAt,
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
          <Line options={optionsTemperature} data={dataTemperature} />
        </div>
        <div className=" h-80 w-full">
          <Line options={optionsLuminosity} data={dataLuminosity} />
        </div>
      </div>
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
