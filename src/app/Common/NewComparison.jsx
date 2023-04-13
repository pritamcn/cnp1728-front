'use client';
import React,{useRef} from 'react';
import Slider from "react-slick";
import Trophy from "../../img/trophy-btn.png";
import Prod1 from "../../img/categoryplaceholder.png";
import Image from 'next/image';
import useNewComparison from '../data/useNewComparison';
import Link from 'next/link';
import { renderMarkdownToHTML } from './Rendermarkdowntohtml';

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
    if (isLoading) return (
      <section className="c-comparisions py-20">

        <div className="container">
        <h2 className="mb-12">NEW COMPARISIONS</h2>
      <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    {/* <div className="flex items-center mt-4 space-x-3">
        <svg className="text-gray-200 w-14 h-14 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
        <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div> */}
    <span className="sr-only">Loading...</span>
</div>
</div>
</section>
    )
  return (
    <section className="c-comparisions py-20">
        <div className="container">

        <h2 className="mb-12">NEW COMPARISIONS</h2>
          <Slider 
           {...settings}
            ref={sliderRef}
            initialSlide={3}
            infinite={false}
            speed={2000}
            autoplay={true}
            autoplaySpeed={5000}
            slidesToShow={2}
            slidesToScroll={1}
            dots={false}
            arrows={false}
            swipeToSlide={true}
            adaptiveHeight={false}
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
                {item?.productDescription?.length >0 &&  <p dangerouslySetInnerHTML={renderMarkdownToHTML(item?.productDescription?.length >150 ?
                 item?.productDescription?.slice(0,150)
               :item?.productDescription)}>
               </p>}
               
             
               
                <div className="sli-btns flex flex-col md:flex-row mt-4">
                    <Link href={`/ProductDetails/${item?.productId}`}
                    className="slide-blu-btn flex flex-row text-center items-center justify-center"
                    >
                    <Image src={Trophy} className="mr-2" alt="trophy" loading='lazy'/> Best Product
                    </Link>
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