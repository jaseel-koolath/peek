import { LightbulbOutlined } from '@mui/icons-material';
import React from 'react';

function Menuoption({ Icon, text, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center text-gray-500 rounded-r-full ${
        active && 'bg-yellow-200 text-black hover:bg-yellow-200'
      } hover:bg-blue-300 `}
    >
      <div className='py-4 px-6'>
        <Icon />
      </div>
      <div>
        <p className='mr-6'>{text}</p>
      </div>
    </div>
  );
}

export default Menuoption;
