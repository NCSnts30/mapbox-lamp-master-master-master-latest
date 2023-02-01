import React from 'react';
import { TbError404 } from 'react-icons/tb';

const NotFound = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col items-center">
        <TbError404 size={250} />
        <p className="font-bold">PAGE NOT FOUND</p>
      </div>
    </div>
  );
};

export default NotFound;
