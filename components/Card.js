import {
  AddAlertOutlined,
  ArchiveOutlined,
  ColorLensOutlined,
  ImageOutlined,
  MoreVertOutlined,
  PersonAddOutlined,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';

function Card({ title, content }) {
  const [showi, setShowi] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowi(true)}
      onMouseLeave={() => setShowi(false)}
      className='rounded-md border-2 p-4 flex flex-col justify-between'
    >
      <div>
        <h3 className='text-lg'>{title}</h3>
        <p className='text-sm'>{content}</p>
      </div>
      <div className={`${showi ? 'visible' : 'invisible'} flex justify-around`}>
        <IconButton>
          <AddAlertOutlined className='p-[3px]' />
        </IconButton>
        <IconButton>
          <PersonAddOutlined className='p-[3px]' />
        </IconButton>
        <IconButton>
          <ColorLensOutlined className='p-[3px]' />
        </IconButton>
        <IconButton>
          <ImageOutlined className='p-[3px]' />
        </IconButton>
        <IconButton>
          <ArchiveOutlined className='p-[3px]' />
        </IconButton>
        <IconButton>
          <MoreVertOutlined className='p-[3px]' />
        </IconButton>
      </div>
    </div>
  );
}

export default Card;
