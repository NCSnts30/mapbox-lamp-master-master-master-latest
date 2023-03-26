/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

import React from 'react';
import { CiExport } from 'react-icons/ci';
import { useMap } from '../context/MapContext';
import Swal from 'sweetalert2';
import moment from 'moment';

const ExportToExcel = () => {
  const { exportSummary, startDate, endDate } = useMap();
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          Swal.fire({
            title: `Export Data?`,
            text: `Do you want to export all the data from ${moment(
              startDate
            ).format('MMMM Do YYYY, h:mm:ss a')} to ${moment(endDate).format(
              'MMMM Do YYYY, h:mm:ss a'
            )}?`,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            customClass: {
              actions: 'my-actions',
              cancelButton: 'order-1 right-gap',
              confirmButton: 'order-2',
            },
          }).then(async (result) => {
            console.log(result);
            if (result.isConfirmed) {
              await exportSummary(startDate, endDate);
              Swal.fire({
                title: 'Exported!',
                text: 'Data are successfully exported!',
                icon: 'success',
              });
            } else {
              Swal.fire('Cancelled', 'You have cancelled the export', 'error');
            }
          });
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
