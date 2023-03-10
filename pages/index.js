import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { useState } from 'react';
import Notes from '../components/Notes';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Head>
        <title>Peek</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header menu={menu} menuToggle={() => setMenu((prev) => !prev)} />
      <div className='mt-16 grid grid-cols-7 gap-2'>
        <div className={`h-screen `}>
          <Menu menu={menu} />
        </div>
        <div className={`h-screen col-span-6 `}>
          <Notes />
        </div>
      </div>
    </>
  );
}
