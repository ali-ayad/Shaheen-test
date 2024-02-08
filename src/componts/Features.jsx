import React from 'react'
import card from '../assets/people.png'
import card2 from '../assets/Layer_1.png'
import card3 from '../assets/Frame.png'
import card4 from '../assets/OBJECTS.png'
import  { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';



const FeatursItem = [
    {
      id:1,
      title1:'سهولة الاستخدام' ,
      title2: 'تقارير وتنبيهات غير محددة',
      image: card,
      describitopn:'تقارير وتنبيهات غير محددة مجموعة من الادوات المرنة والفعاله لبناءمختلف انواع التقارير والاشعارات' ,
      
    },

    {
        id:2,
        title1:'نظام موثوق ورصين' ,
        title2: 'تقارير وتنبيهات غير محددة',
        image: card3,
        describitopn:'تقارير وتنبيهات غير محددة مجموعة من الادوات المرنة والفعاله لبناءمختلف انواع التقارير والاشعارات' ,
        
      },

      
    {
        id:3,
        title1:'بيانات' ,
        title2: 'تقارير وتنبيهات غير محددة',
        image: card4,
        describitopn:'تقارير وتنبيهات غير محددة مجموعة من الادوات المرنة والفعاله لبناءمختلف انواع التقارير والاشعارات' ,
        
      },
      
    {
        id:4,
        title1:'التقارير ' ,
        title2: 'تقارير وتنبيهات غير محددة',
        image:  card2,
        describitopn:'تقارير وتنبيهات غير محددة مجموعة من الادوات المرنة والفعاله لبناءمختلف انواع التقارير والاشعارات' ,
        
      },



]


function Features() {

  useEffect(() => {
    // Initialize ScrollReveal for the first two cards (from the right)
    ScrollReveal().reveal('.feature-card:nth-child(-n+2)', {
      duration: 1000,
      distance: '1000px',
      easing: 'ease-out',
      origin: 'right', // Initial position outside the viewport on the right
      interval: 100, // Add an interval for a staggered effect
      reset: true,
    });

    // Initialize ScrollReveal for the next two cards (from the left)
    ScrollReveal().reveal('.feature-card:nth-child(n+3)', {
      duration: 1000,
      distance: '1000px',
      easing: 'ease-out',
      origin: 'left', 
      interval: 100, 
      reset: true,
    });
  }, []);
  
  return (
    <div className='bg-[#FFFBF1] p-5 pb-20' id='features'>
        <div className=' text-center my-14'>
            <h6 className='text-[#F9C639] md:text-[#383838] text-[18px] font-[400]'>إدارة ومتابعة أساطيل المركبات</h6>
            <h1 className='text-[#F9C639] md:text-[#383838] text-[40.65px] font-[600] '>مميزات شاهين</h1>
        </div>
        <div  className=' text-right grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden '>
        {FeatursItem.map(Item=>(

//  <div className='flex justify-center items-center'>           
 
<div key={Item.id} className=' mx-auto  lg:mx-2 p-4 pt-10  max-w-[318.43px] h-[561.41px] border-solid  border-[#D2C5C5] border-[0.88px] rounded-[9.65px]  shadow-xl feature-card '>
    <div className=' overflow-hidden max-w-[274px] mx-8'>  <img src={Item.image}  height={204} alt=""   className='  object-fill border-b  order-[#1B1Bb1B] border-b-0.5'/>
</div>
<div className="flex flex-col items-start">
   <h2 className=' my-4 mt-8  text-[#FFF8E5] text-[13.28px] font-[600]  p-1 px-2   text-center rounded-[9.65px]  bg-[#383838]'>{Item.title1}</h2>
   <h2 className='my-4 w-full  text-[#9A9A9A] max-w-[121px] text-[17.54px] '>{Item.title2}</h2>
   <p className='  text-[#9A9A9A] text-[17.54px]'>{Item.describitopn}</p>
</div> 
</div> 

// </div>

))}
</div>    

          

          

            
      
    </div>
  )
}

export default Features