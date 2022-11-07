import React from 'react'
import {aboutData} from '../data/aboutData'
const About = () => {
  return (
    <div className='about' >
    <section className="  text-gray-600 body-font top-[733px]">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Heritage Hotel</h1>
                    <p className="mb-8 leading-relaxed">Accomadation</p>
                    <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
{/* Image Slider */}
                    <h1 className='text-[100px]'>Image Slider</h1>
                    <p className="mb-8 leading-relaxed">hdsjkhdjkhkjbhsdkjbnhnblkdbnjkjhfj</p>
                </div>
        </div>
    </section>

{/* 2section */}
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {aboutData.map((data=>(
    <div className="p-4 md:w-1/3 ">
        <div className=" bg-white h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={data.img} alt="blog"/>
            <div className="p-6">
            <h2 className="tracking-widest text-[32px] font-medium text-black mb-1">{data.topic}</h2>
            <p className="leading-relaxed mb-3">{data.text}</p>
            </div>
        </div>
    </div> 
    )))}
        
    </div>
    </div>
    </section>
    </div>
  )
}

export default About