import React from 'react'
import computer from '../assets/1195471_OT11BI1 1.png'

function Footer() {
  return (
    <div className=' bg-[#413F38] p-10 md:p-24'>

        <div className='mt-10'>
          <div className='w-full flex items-center justify-center'>

        <div className='mb-12 p-5  max-w-[1216px] w-full bg-white rounded-[40px] flex items-center justify-between gap-2  flex-wrap'>

        <div className=' p-6 px-4 overflow-hidden   w-full lg:w-[40%]'><img src={computer}  alt="" className=' w-full' /></div>

            <div className='  text-right w-full lg:w-[40%] '>
                <p className=' text-[34.91px] md:text-[47.23px] text-[#6D6B6B]'>لطلب نسخة تجريبية</p>
                <p className='w-full py-4 lg:w-[60%] text-[17.54px] text-[#9A9A9A] '>تقارير وتنبيهات غير محددة  مجموعة من 
                  الادوات المرنة والفعاله لبناءمختلف انواع  
                  التقارير والاشعارات</p>
                  <div></div>
            </div>
</div>
          
        </div>

        <div className='flex justify-center items-center'><hr className='w-[1258px] '/></div>


       <div className='flex justify-center items-center'>

        <ul className='md:flex justify-center list-none gap-14 py-8 text-[#888888] '>
            
            <li className='m-4'>الرئيسية</li>
            <li className='m-4'>من نحن</li>
            <li className='m-4'>الخدمات</li>
            <li className='m-4'>تواصل معنا</li>
        </ul>
        </div>
    </div>
    </div>

  )
}

export default Footer