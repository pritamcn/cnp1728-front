import Image from 'next/image'
import React from 'react'
import Award from "../../../../img/award.png";
import Current from "../../../../img/current.png";
import Verified from "../../../../img/verified.png";
const Advertisement = () => {
  return (
    <section className="bg-light-blue">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg py-10 px-10">
      <div className="flex flex-row lg:py-5">
      <div className="flex-none">
          <Image src={Award} alt="award"/>
        </div>
        <div className="flex-1">
          <h6 className="mb-2 font-bold uppercase text-xs text-gray-900">ONLY THE BEST</h6>
          <p className="font-normal text-xs text-gray-700">
            In our comparisons we present you the best products. Quality and value for money are very important to us.
          </p>
        </div>
      </div>
      <div className="flex flex-row lg:py-5">
      <div className="flex-none">
          <Image src={Current} alt="Current"/>
        </div>
        <div className="flex-1 pl-5">
          <h6 className="mb-2 font-bold uppercase text-xs text-gray-900">CURRENTLY</h6>
          <p className="font-normal text-xs text-gray-700">
          We are constantly looking for brand new products. Our comparisons are therefore always up to date.
          </p>
        </div>
      </div>
      <div className="flex flex-row lg:py-5">
      <div className="flex-none">
          <Image src={Verified} alt="Verified"/>
        </div>
        <div className="flex-1 pl-5">
          <h6 className="mb-2 font-bold uppercase text-xs text-gray-900">TRANSPARENT & INDEPENDENT</h6>
          <p className="font-normal text-xs text-gray-700">
          All comparisons are designed to be clear and objective. No brands or manufacturers are preferred.
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Advertisement