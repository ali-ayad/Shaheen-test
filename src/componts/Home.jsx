import React from 'react'
import imag from '../assets/11.jpg'
import { Carousel } from "antd";

import { DatabaseOutlined, UnorderedListOutlined, SettingOutlined } from '@ant-design/icons'

function Home() {


 

  return (
    <div className='w-full' id='home' >
     

        <Carousel className='w-full' autoplay >


         <div>
        <div><img src={imag} className="  w-full " alt='jj' /></div>
       
        <h1 className="absolute text-[29.74px] md:text-[65.59px] text-white top-[42%] left-[41%]  ">راقب اسطولك بأمان</h1>
      <p  className="absolute  text-[10.93px] md:text-[24.1px]  text-white top-[55%] left-[44%] p-4 ">بأحدث التقنيات و احدث الاجهزة</p>
            </div>

        <div>
        <div><img src={imag} className="  w-full " alt='jj' /></div>
        {/* <h1 className="absolute text-[65.59px] text-white top-[42%] left-[41%] ">راقب اسطولك بأمان</h1>
        <p  className="absolute text-[24.1px]  text-white top-[55%] left-[44%] p-2  ">بأحدث التقنيات و احدث الاجهزة</p> */}
        </div>
     
     


       

       
        </Carousel>
    
      <div className="bg-[#F9C639] h-[60] md:h-[77px] flex items-center justify-center w-full">
        <div className=" h-[40px] flex items-center justify-between max-w-[570px] gap-4">
          <h1 className='text-[#454242] text-[9.09px] md:text-[13.63px]' > <DatabaseOutlined />بيانات داخل العراق</h1>
          <h1 className='text-[#454242] text-[9.09px] md:text-[13.63px]' > <UnorderedListOutlined /> ضمان طيلة فترة الاشتراك</h1>
          <h1 className='text-[#454242] text-[9.09px] md:text-[13.63px]'><SettingOutlined />صيانة و دعم فني 24/7</h1>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Home