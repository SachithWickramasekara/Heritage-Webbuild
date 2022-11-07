import React from 'react'
import {facilitiesData} from '../data/facilitiesData'
const Facilities = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">ttjlijjojijiojijk</h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">lldjvl;djdklvdkvdsnlvkdvkdlnvdskvnsdklvdnvksdvldskvdsk;lvdsdavlkadvjad;lvdn;lvn;kvsnvk;<br/>nvdvdsvdsknvksdlnvkdsvndskvndsk;vnad’vad,vadmvk;adnvadk;vnadk;vnadl;vadlvadvad</p>
            </div>
            
           
                    {/* {facilitiesData.map((data=>(

                    )))} */}
                    <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                    {facilitiesData.map((data=>(
                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full bg-[#967F57]">
                             <div class="border-2 border-gray-200 px-4 py-6 rounded-lg justify-center items-center">
                                <img src={data.img} alt='' className='w-12 h-12'/>
                                <h2 class="title-font font-medium text-2xl text-white">{data.topic}</h2>
                             </div>
                        </div>

)))}
                    </div>
                    </div>
                    </section>
                
            
        </div>
        </section>
    </div>
  )
}

export default Facilities