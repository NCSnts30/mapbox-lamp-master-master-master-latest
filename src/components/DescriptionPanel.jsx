import React, { useEffect } from 'react';

import Swal from 'sweetalert2';

function DescriptionPanel({ volts, power, current, luminosity, place }) {
  useEffect(() => {
    if (volts < 10) {
      Swal.fire({
        title: 'Volts is under 10',
        text: 'Check the volt',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  }, [volts]);

  return (
    <div className="flex flex-col space-x-3 bg-neutral-600 w-full p-4 justify-center items-center">
      <div>
        <p className="text-white">{place}</p>
      </div>
      <div className="flex space-x-3 bg-neutral-600 w-full p-4 justify-center items-center">
        <div className="shadow w-50 px-2 h-20 bg-neutral-100  shadow-black rounded-lg bg-zinc-900 text-white border-4">
          <p className="text-center">VOLTS</p>
          <p className="text-center text-3xl">
            <span className={volts >= 10 ? 'text-white' : 'text-red-500'}>
              {volts}V
            </span>
          </p>
        </div>
        <div className="shadow w-50 h-20  px-2  shadow-black rounded-lg bg-zinc-900 text-white border-4 ">
          <p className="text-center">POWER</p>
          <p className="text-center text-3xl">{power}P</p>
        </div>
        <div className="shadow w-50 px-2  h-20  shadow-black rounded-lg bg-zinc-900 text-white border-4 ">
          <p className="text-center">CURRENT</p>
          <p className="text-center text-3xl">{current}A</p>
        </div>
        <div className="shadow px-2 w-50 h-20  shadow-black rounded-lg bg-zinc-900 text-white border-4 ">
          <p className="text-center">LUMINOSITY</p>
          <p className="text-center text-3xl">{luminosity} LUX</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionPanel;
