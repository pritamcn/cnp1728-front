import Image from 'next/image'
import React from 'react'
import BannerImg from "../../../../img/banner.jpg";
import Search from '../Client/Search';
const Banner = () => {
  return (
    <section className="relative z-0 pt-8 lg:pt-0 bg-light-blue -mt-px lg:-mt-20">
      <div className="container lg:w-full lg:p-0 lg:m-0 lg:max-w-full">
      <div className="flex xl:items-center lg:justify-center flex-col lg:flex-row">
      <div className="flex-none ml-0 lg:ml-20 lg:mt-24 lg:mb-24 relative z-10">
      <div>
            <h1 className="mb-2">
              <span>Get Your</span>  best<br/> comparison result 
            </h1>
         <Search/>
        </div>
      </div>
      <div className="flex-1 lg:w-80 lg:ml-20 relative z-0 c-banner--rgt">
          <Image className="w-full h-screen object-cover" src={BannerImg} alt="Banner" loading='lazy' />
        </div>
      </div>
      </div>
      <div className="container grid max-w-screen-lg c-ban-line">
      <span className="bg-medium-blue w-full"></span>
    </div>
    </section>
  )
}

export default Banner