/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

import React from 'react';
import { CiExport } from 'react-icons/ci';
import { useMap } from '../context/MapContext';

const ExportToExcel = () => {
  const { exportSummary, startDate, endDate } = useMap();
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log('test');
          exportSummary(startDate, endDate);
        }}
        className="px-6 py-4 bg-green-700 hover:bg-green-900 rounded-xl  shadow-xl"
      >
        <span className="flex place-items-center gap-2 text-white">
          <CiExport /> <p>Export Summary</p>
        </span>
      </button>
    </div>
  );
};

export default ExportToExcel;
