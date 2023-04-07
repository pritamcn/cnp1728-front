'use client';
import React,{useRef} from 'react';
import Slider from "react-slick";
import Trophy from "../../img/trophy-btn.png";
import Prod1 from "../../img/categoryplaceholder.png";
import Image from 'next/image';
import useNewComparison from '../data/useNewComparison';
import Link from 'next/link';

const settings={
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 990,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
const NewComparison = () => {
    const sliderRef = useRef(null);
    const { newcomparisondata, isLoading, isError } = useNewComparison();
    if (isLoading) return (<div>Loading ....</div>)
  return (
    <section className="c-comparisions py-20">
        <div className="container">

        <h2 className="mb-12">NEW COMPARISIONS</h2>

        {/*<div className="c-comparisions-slider flex items-stretch">*/}
          <Slider 
           {...settings}
            ref={sliderRef}
            initialSlide={3}
            infinite={true}
            speed={2000}
            autoplay={true}
            autoplaySpeed={5000}
            slidesToShow={2}
            slidesToScroll={1}
            dots={false}
            arrows={false}
            swipeToSlide={true}
            adaptiveHeight={true}
            className={'c-comparisions-slider flex items-stretch'}
          >
            {newcomparisondata?.map((item,i)=>(
              <div className="c-comparisions-slider-item flex-1 px-6 py-6" key={i}>
              <div className="c-comparisions-slider--img sm:block lg:float-left lg:w-2/6 mb-5">
                <Image src={item?.productImage !==null ?item?.productImage:Prod1} 
                className="w-full h-auto" alt="Prod1" height={500} width={500} loading='lazy'/> 
              </div>
              <div className="c-comparisions-slider--content sm:block lg:overflow-hidden pl-5">
                <h3>{item?.productName?.slice(0,50)}</h3>
                {item?.productDescription?.length >150 ?
                 <p>
                 {item?.productDescription?.slice(0,150)}...
               </p>:item?.productDescription
              }
               
                <div className="sli-btns flex flex-col md:flex-row mt-4">
                  <div  className="slide-blu-btn flex flex-row text-center items-center justify-center">
                    <Image src={Trophy} className="mr-2" alt="trophy"/> Award Winner
                  </div>
                  <Link
                 href={`/SubCategories/${item?.subCategoryId}`}
                  className="slide-wht-btn">Compare</Link>
                </div>
              </div>
            </div>
            ))}
         

       
          </Slider>
          <div className="c-slider-controlers flex flex-1 justify-end items-center p-2 pb-0">
            <button className="c-slider__arrow " aria-label="Previous" type="button" 
            onClick={() => sliderRef.current.slickPrev()}
            >{"<"}</button>
            <button className="c-slider__arrow " aria-label="Next" type="button" 
            onClick={() => sliderRef.current.slickNext()}
            >{">"}</button>
          </div>
      {/*</div>*/}


        </div>
    </section>
  )
}

export default NewComparison