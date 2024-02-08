import { React,useEffect, useState } from "react";
import img from '../assets/22.png'
import ScrollReveal from 'scrollreveal';
import { Modal } from "antd";



function WhoWeAre() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        ScrollReveal().reveal('.imagee', {
          duration: 1000,
          origin: 'left', // Animation starts from the bottom
          distance: '1000px',
          easing: 'ease-out',
          reset: true,
        });
        ScrollReveal().reveal('.teext', {
            duration: 1000,
            origin: 'right', // Animation starts from the bottom
            distance: '1000px',
            easing: 'ease-out',
            reset: true,
          });
      }, []);

    return (
        <div className=" min-h-[100vh] bg-[#F6CF64] " id="WhoWeAre">

            <div className="p-5 w-full text-[40.65px]  text-[#3A372F]   text-center ">من نحن</div>

           
            <div className="w-full   bg-[#f6cf64d4] h-full"></div>
            <div class="flex items-center  justify-between w-full  px-2">

                <div className=" w-full flex items-center justify-between gap-2  flex-wrap  p-2 md:p-10 overflow-hidden ">

                    
               

                     <div className=" w-full lg:w-[40%] overflow-hidden mt-10 teext">

                    <h1 className="p-1 text-right text-[65.59px] text-[#5C584D]  w-[340px] font-[600] ">فريق برمجي</h1>
                    <p className="p-4 text-right text-[17.54px]  w-[275px]  text-[#9A9A9A] font-[275]">تقارير وتنبيهات غير محددة مجموعة من الادوات المرنة والفعاله لبناءمختلف انواع التقارير والاشعارات
                    </p>
                    <div className="flex gap-2">
                        <div>
                            <button onClick={() => setOpen(true)} className=" bg-transparent mt-14 px-8 p-1 border border-[#5C584D] rounded-[15px] text-[17.54px]">المزيد عنا</button>

                        </div>
                        <div></div>

                    </div>
                    </div>

                    <div className=' p-6 px-4 overflow-hidden   w-full lg:w-[40%] imagee'>
                <img className="" src={img} width={500} height={500} alt=""></img>

                </div>

                  

                </div>


            </div>
            <Modal
                title="المزيد عنا"
                centered
                open={open}
                onOk={() => setOpen()}
                onCancel={() => setOpen()}
                width={1000}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </div>
    );
}

export default WhoWeAre