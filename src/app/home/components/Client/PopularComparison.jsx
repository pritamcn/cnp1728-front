"use client";
import Image from "next/image";
import React from "react";
import Machine1 from "../../../../img/categoryplaceholder.png";
import RightArrow from "../../../../img/right-arrow.png";
import Slider from "react-slick";
import { useRef } from "react";
import Link from "next/link";
import usePopularComparison from "@/app/data/usePopularComparison";
const settings={
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
const PopularComparison = () => {
  const sliderRef = useRef(null);
  const { popularcomparisondata, isLoading, isError } = usePopularComparison();
  if (isLoading) return (<div>Loading ....</div>)
  return (
    <section className="c-popular-sec pt-20 pb-10">
      <div className="container">

        <h2 className="text-center mb-10">POPULAR COMPARISONS</h2>

        <Slider 
          {...settings}
         ref={sliderRef}
         infinite={true}
         speed={500}
         slidesToShow={popularcomparisondata?.length>6?6:popularcomparisondata?.length}
         slidesToScroll={popularcomparisondata?.length>6?1:0}
         swipeToSlide={popularcomparisondata?.length>6?true:false}
         dots={false}
         arrows={false}
       
        >
          {popularcomparisondata?.length >0 && popularcomparisondata?.map((item)=>(
            <div className="flex items-stretch justify-center" key={item?.subCategoryId}>
            <div className="comp-box text-center rounded-md bg-white p-6 mx-4">
              <div  className="img-cvr block text-center mb-6" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <Image src={item?.productImage !==null ?item?.productImage:Machine1} 
                  className="mx-auto" alt="Machine1" width={80} height={80}/>
              </div>
              <p className="comp-name">{item?.productName?.slice(0,15)}</p>
              <Link 
               href={`/SubCategories/${item?.subCategoryId}`}
              className="flex flex-row items-center justify-center comp-btn align-middle">
                Compare 
                <Image className="ml-3" src={RightArrow} alt="rightarrow"/>
              </Link>
            </div>
          </div>
          ))}
        </Slider>
        {popularcomparisondata?.length >6 ?
         <div className="c-slider-controlers flex flex-1 justify-end items-center p-2 pb-0">
         <button className="c-slider__arrow " aria-label="Previous" type="button" 
         onClick={() => sliderRef.current.slickPrev()}
         >{"<"}</button>
         <button className="c-slider__arrow " aria-label="Next" type="button" 
         onClick={() => sliderRef.current.slickNext()}
         >{">"}</button>
       </div>:null
      }
       

      </div>
    </section>
  )
}

export default PopularComparison
