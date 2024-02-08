import img from '../assets/image 1.jpg'
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


function ContactUs(){

   
        useEffect(() => {
          ScrollReveal().reveal('.contact-form', {
            duration: 1000,
            origin: 'right', // Animation starts from the bottom
            distance: '1000px',
            easing: 'ease-out',
            reset: true,
          });
        }, []);


return (
<div className='w-full  p-2 pb-10 relative  h-[100vh] bg-[#F6CF64] overflow-hidden ' id='contact'>

<img className='w-full -z-[2] absolute top-0 left-0' src={img} alt='bg'></img> 
<div className="w-full absolute -z-[1] top-0 left-0  bg-[#f6cf646e] h-full"></div>
    <div class="flex justify-center items-center w-full h-full">
    
    <div  class="md:w-[500px] max-w-[617px] py-10 pb-20  px-16 h-[85%]  shadow-lg bg-white rounded-[21px] contact-form">
        <h1 class="text-3xl block text-center font-semibold pb-10 text-[25.71px]"><i class="fa-solid fa-user"></i> تواصل معنا</h1>
        <div class="mt-3">
            <input type="text" dir='ltr' class=" rounded border w-full text-base px-2 py-1 focus:outline-none  focus:border-[#2F1160]	" placeholder="johe doe" />
        </div>
        <div class="mt-3">
            <input type="text" dir='ltr' class=" rounded border w-full text-base px-2 py-1 focus:outline-none  focus:border-[#2F1160]" placeholder="johe doe" />
        </div>
        <div class="mt-5">
            <input type="text" dir='ltr' class="rounded border w-full h-[100px] text-base px-2 py-1 focus:outline-none focus:ring-0  focus:border-purple-600" placeholder="johe doe" />
        </div>
     <div class="mt-5 ">
            <button type="submit" className="border-none h-[48px] bg-[#F9C639] text-white py-1 w-full rounded-[4px]  font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;send</button>
        </div>
    </div>

</div>
</div>
)}
export default ContactUs