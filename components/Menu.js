import {
  ArchiveOutlined,
  DeleteOutline,
  EditOutlined,
  LightbulbOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';
import React, { useState } from 'react';
import Menuoption from './Menuoption';

function Menu({ menu }) {
  const options = [
    { Icon: LightbulbOutlined, name: 'Notes' },
    { Icon: NotificationsOutlined, name: 'Reminders' },
    { Icon: EditOutlined, name: 'Edit Labels' },
    { Icon: ArchiveOutlined, name: 'Archive' },
    { Icon: DeleteOutline, name: 'Trash' },
  ];
  const [act, setAct] = useState(-1);
  return (
    <div className='flex flex-col fixed'>
      {options.map((item, ind) => (
        <Menuoption
          key={ind}
          Icon={item.Icon}
          text={menu ? item.name : ''}
          active={ind === act}
          onClick={() => {
            setAct(ind);
          }}
        />
      ))}
    </div>
  );
}

export default Menu;
