import React, { useState } from 'react';
import { useEffect } from 'react';
import { Avatar, IconButton } from '@mui/material';
import {
  AppsOutlined,
  CloseOutlined,
  MenuOutlined,
  RefreshOutlined,
  SearchRounded,
  SettingsOutlined,
  ViewListOutlined,
} from '@mui/icons-material';
import Image from 'next/image';

function Header({ menuToggle, menu }) {
  const [down, setDown] = useState('sm');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) setDown('md');
      else setDown('sm');
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex items-center p-2 mb-2 shadow-slate-500 shadow-${down} w-full h-14 fixed top-0 bg-white z-10`}
    >
      <IconButton onClick={menuToggle}>
        {menu ? <CloseOutlined /> : <MenuOutlined />}
      </IconButton>
      <Image
        src='/Keep.png'
        width={100}
        height={50}
        alt='logo'
        style={{ objectFit: 'cover' }}
      />
      <div className='relative flex justify-start items-center flex-1 ml-8 '>
        <div className='absolute left-2'>
          <SearchRounded />
        </div>
        <input
          type='text'
          placeholder='Search'
          className='p-2 pl-10 bg-gray-200 rounded-md outline-none hidden sm:flex w-full max-w-2xl  focus:bg-inherit'
        />
      </div>
      <div className='flex justify-between gap-8'>
        <div className='hidden sm:flex items-center'>
          <IconButton>
            <RefreshOutlined />
          </IconButton>
          <IconButton>
            <ViewListOutlined />
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <AppsOutlined />
          </IconButton>
          <IconButton>
            <Avatar>H</Avatar>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
