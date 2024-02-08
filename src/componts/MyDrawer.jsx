import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import {Link} from 'react-scroll'
import {  Drawer } from 'antd';

const Sidelist = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
   <div>
      <FaBars  onClick={showDrawer} size={27} color='#D9D9D9'>
        Open
      </FaBars>
      <Drawer  onClose={onClose} open={open}>
        <div className='flex justify-center items-center'>
      <ul className='list-none h-[50vh] grid py-2 gap-4'>
          <li> <Link  to='home' spy={true} smooth={true} offset={0} duration={500} className='my-2 text-3xl text-[#F9C639] px-20 p-2   cursor-pointer rounded hover:text-[#888888]   ' > الرئيسية </Link> </li>
          <li > <Link  to='WhoWeAre' spy={true} smooth={true} offset={-70} duration={500}  className=' m-2 text-3xl text-[#F9C639] px-20 p-2   cursor-pointer rounded hover:text-[#888888] ' > من نحن</Link> </li>
          <li > <Link to='compnysec' spy={true} smooth={true} offset={-50} duration={500}  className=' m-2 text-3xl text-[#F9C639] px-20 p-2   cursor-pointer rounded hover:text-[#888888]' >  الخدمات</Link> </li>
          <li > <Link to='contact' spy={true} smooth={true} offset={-50} duration={500}  className='m-2 text-3xl text-[#F9C639] px-20 p-2   cursor-pointer rounded hover:text-[#888888]' > تواصل معنا </Link> </li>
        </ul>
        </div>
      </Drawer>
    </div>
  );
};
export default Sidelist;