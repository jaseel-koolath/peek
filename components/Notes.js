import React, { useEffect, useState } from 'react';
import TakeNote from './TakeNote';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Card from './Card';

function Notes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const d = [];
      const querySnapshot = await getDocs(collection(db, 'user_name'));
      querySnapshot.forEach((doc) => {
        d.push({ id: doc.id, data: doc.data() });
      });
      setData(d);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <TakeNote />
      <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.data.title}
            content={item.data.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Notes;
