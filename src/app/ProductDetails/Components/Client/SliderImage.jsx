'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
const SliderImage = ({image}) => {
    const settings = {
        customPaging: function (i) {
          return (
            <Link href="#">
              <Image src={image[i]} alt="Img4" width={500} height={500} loading='lazy' />
            </Link>
          );
        },
        dots: true,
        dotsclassName: "slick-dots slick-thumb",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        arrows: true,
        swipeToSlide: true,
        fade: true,
        cssEase: 'linear',
        className: 'c-product-slider--lrg-thumb'
      };
  return (
    <div className="c-top-rgt c-test--col order-none c-sidebar-details mb-10">
    <div className="px-3.5">
     
    <div className="c-product-slider" style={{marginBottom: 0 + 'px'}}>
      <Slider 
        {...settings}
      >
        {image?.map((img,i)=>(
             <div className="c-pro-slide border-2 rounded-md" key={i}>
             <Image src={img} alt="product" width={500} height={500} loading='lazy'/>
           </div>
        ))}
      </Slider>
    </div>
    </div>
  </div>
  )
}

export default SliderImage