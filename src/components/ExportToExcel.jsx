/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

import React from 'react';
import { CiExport } from 'react-icons/ci';
import { useMap } from '../context/MapContext';
import Swal from 'sweetalert2';
import moment from 'moment';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import { FaQuestionCircle } from 'react-icons/fa';

const ExportToExcel = () => {
  const { exportSummary, startDate, endDate } = useMap();

  return (
    <div>
      <Tooltip
        title="This will export the data from the selected date range."
        id="export-data"
        place="right"
        effect="solid"
        trigger="click"
        interactive
        onClickOutside={(tooltip) => tooltip.hide()}
        overridePosition={({ left, top }) => ({ left: left - 5, top: top - 5 })}
      >
        <div style={{ position: 'relative' }}>
          <FaQuestionCircle
            className="text-gray-800 cursor-help"
            style={{ position: 'absolute', top: '-15px', right: '-8px' }}
          />
        </div>
      </Tooltip>

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
        className="px-6 py-4 bg-green-700 hover:bg-green-900 rounded-xl shadow-xl"
      >
        <span className="flex place-items-center gap-2 text-white">
          <CiExport /> <p>Export Summary</p>
        </span>
      </button>
    </div>
  );
};

export default ExportToExcel;
