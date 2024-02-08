import React from 'react'
import { useState } from 'react';
import photo from '../assets/Rectangle 14.png'

import  { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


import { Button, Modal} from 'antd';


const CompnyItems =[

    {
        id:1,
        title:'الشركات الامنية' ,
        image:photo,
        describitopn:'تقارير وتنبيهات غير محددة مجموعة ' ,
        
      },

      {
        id:2,
        title:'الشركات الامنية' ,
        image:photo,
        describitopn:'تقارير وتنبيهات غير محددة مجموعة ' ,
        
      },
      {
        id:3,
        title:'الشركات الامنية' ,
        image:photo,
        describitopn:'تقارير وتنبيهات غير محددة مجموعة ' ,
        
      },
      {
        id:4,
        title:'الشركات الامنية' ,
        image:photo,
        describitopn:'تقارير وتنبيهات غير محددة مجموعة ' ,
        
      },
      {
        id:5,
        title:'الشركات الامنية' ,
        image:photo,
        describitopn:'تقارير وتنبيهات غير محددة مجموعة ' ,
        
      },
      {
        id:6,
        title:'الشركات الامنية' ,
        image:photo,
        describitopn:'تقارير وتنبيهات غير محددة مجموعة ' ,
        
      },
      
  

]

function CompnySec() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Initialize ScrollReveal for the first two cards (from the right)
    ScrollReveal().reveal('.feature-card', {
      duration: 1000,
      distance: '1000px',
      easing: 'ease-out',
      origin: 'right', // Initial position outside the viewport on the right
      interval: 100, // Add an interval for a staggered effect
      reset: true,
    });

    // Initialize ScrollReveal for the next two cards (from the left)
    
  }, []);

  return (
    <div className=' bg-[#FFFBF1] py-4 pb-20 px-8 w-full' id='compnysec'>

        <div className='my-10 text-center  text-[#F9C639]'><p className='text-[40.65px]'>الشركات المستفيدة</p></div>

        <div className=' text-right grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

           
          {
            CompnyItems.map(Item=>(
                  <div className='mx-4'>
                <div key={Item.id} className='mx-auto max-w-[439px]   bg-white  rounded-[20px] shadow-xl p-1 px-2 pb-4 feature-card overflow-hidden '>
                <div className='overflow-hidden rounded-[18px]'><img src={Item.image} alt=""  height={324} className=' object-fill'/></div>
                <h1 className=' mx-4 my-2 text-[25.99px] text-[#F7B400]'>{Item.title}</h1>
                <p className=' mx-4 my-2 py-4 text-[15.93px] text-[#737373]'>{Item.describitopn}</p>
                <Button onClick={() => setOpen(true)} className=' w-full h-[48px] bg-[#333333]  text-white text-[18px]   '> المزيد</Button>
            </div></div>
            ))
          }

           
        </div>
        <Modal
               
                centered
                open={open}
                onOk={() => setOpen()}
                onCancel={() => setOpen()}
                width={800}
                className='w-[800px]'
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <p>sتقارير وتنبيهات غير محددة  مجموعة من 
الادوات المرنة والفعاله لبناءمختلف انواع 
التقارير والاشعارات   </p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
    </div>
  )
}

export default CompnySec