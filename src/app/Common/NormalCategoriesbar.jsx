'use client';
import React from 'react'
import Slider from "react-slick";
import Link from 'next/link';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{ ...style, display: "block", background: "red" }}
    onClick={onClick}
  />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{ ...style, display: "block", background: "green" }}
    onClick={onClick}
  />
  );
}
const settings={
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 990,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
      {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
const NormalCategoriesbar = ({value,level3Categories,length}) => {
  return (
     <section>
      <div className="container">
      <Slider 
      {...settings}
       infinite={true}
       speed={500}
      //  slidesToShow={3}
      //  slidesToScroll={1}
      //  swipeToSlide={true}
       slidesToShow={length>5?5:length}
       slidesToScroll={length>5?1:0}
       swipeToSlide={length>5?true:false}
       dots={false}
       nextArrow= {<SampleNextArrow/>}
       prevArrow={<SamplePrevArrow/>}
      className="c-tab-scroller flex py-5"
      //  className={`${length>3?"c-tab-scroller":"c-tab-scroller-less"} flex py-5`}
      >
        {value?.length >0 && value?.map((item)=>(
           <div className="nav-item c-tab-scroller--item text-center mb-5" role="presentation" key={item?.normalCategoryId}>
             <Link 
             href={`/NormalCategories/${item?.normalCategoryId}`}
             className={`c-tab-round--link
             nav-link
             block
             ${item?.isThisInputId?"active":null}`}
            
              id="tabs-03-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-03" role="tab"
                aria-controls="tabs-03" aria-selected="false">
                
                  <span>{item?.normalCategoryDisplayName}</span>
                  <span className="icon-tb"></span>

              </Link>
           </div>
        ))}
         {level3Categories?.length >0 && level3Categories?.map((item2)=>(
           <div className="nav-item c-tab-scroller--item text-center mb-5" role="presentation" key={item2?.level3CategoryId}>
             <Link 
             href={`/SubCategories/${item2?.level3CategoryId}`}
             className={`c-tab-round--link
             nav-link
             block
             ${item2?.isThisInputId?"active":null}`}
            
              id="tabs-03-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-03" role="tab"
                aria-controls="tabs-03" aria-selected="false">
                
                  <span>{item2?.level3CategoryDisplayName}</span>
                  <span className="icon-tb"></span>

              </Link>
           </div>
        ))}
      </Slider>
      
      </div>

     </section>
  )
}

export default NormalCategoriesbar