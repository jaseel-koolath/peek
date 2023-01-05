import {
  AddAlertOutlined,
  ArchiveOutlined,
  ColorLensOutlined,
  ImageOutlined,
  MoreVertOutlined,
  PersonAddOutlined,
  PushPinOutlined,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function TakeNote() {
  const [exp, setExp] = useState(false);

  const box = useRef(null);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) setExp(false);
      }
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    }, [ref]);
  }
  useOutsideAlerter(box);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const setData = async () => {
    await addDoc(collection(db, 'user_name'), {
      title,
      content,
    });
  };

  return (
    <div
      className='flex flex-col relative w-1/2 mx-auto my-8 bg-white drop-shadow-lg rounded-lg shadow-black'
      onClick={() => {
        setExp(true);
      }}
      ref={box}
    >
      <div className={`${exp ? 'flex' : 'hidden'}`}>
        <input
          type='text'
          placeholder='Title'
          className='outline-none p-2 px-4'
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div>
        {/* <input
          type='text'
          placeholder='Take a note...'
          className='outline-none text-sm p-2 px-4 w-full'
        /> */}
        {/* <div
          placeholder='Take a note...'
          className='empty:before:content-[attr(placeholder)] focus:before:content-none p-2 px-4 text-gray-500 outline-none'
          contentEditable={true}
        ></div> */}
        <textarea
          className='outline-none w-full resize-none p-4'
          placeholder='Take a note...'
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></textarea>
      </div>
      <div className={`${exp ? 'flex' : 'hidden'} justify-between`}>
        <div>
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
        <div>
          <IconButton className='text-xs' onClick={() => setData()}>
            SAVE
          </IconButton>
        </div>
      </div>
      <div className={`${exp ? 'flex' : 'hidden'} absolute top-0 right-0`}>
        <IconButton>
          <PushPinOutlined className='p-[3px]' />
        </IconButton>
      </div>
    </div>
  );
}

export default TakeNote;
