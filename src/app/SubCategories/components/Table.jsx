'use client';
import Image from 'next/image';
import React,{useRef} from 'react'
import Slider from "react-slick";
import Amazon from "../../../img/comp/amazon.png";
import Link from 'next/link';
import Rating from "../../Common/Rating";
import { imagePath } from '@/app/config';
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
const Table = ({value,SubCategoryName}) => {
    const sliderRef=useRef(null);
    let maxValue =(target)=>{
       let finalvalue=value.slice(1);
       let targetvalue=0;
      if(Array.isArray(finalvalue[0].dynamicComparisonKeys[target]) && typeof(finalvalue[0].dynamicComparisonKeys[target][0]) !=="object"){
     finalvalue.reduce((acc, value) => {
      targetvalue=acc = acc > value.dynamicComparisonKeys[target].join().length ? acc : value.dynamicComparisonKeys[target].join().length
    }, 0);
    }
    else if(Array.isArray(finalvalue[0].dynamicComparisonKeys[target]) && typeof(finalvalue[0].dynamicComparisonKeys[target][0]) ==="object"){
      targetvalue=51
    }
    else {
      finalvalue.reduce((acc, value) => {
        // console.log("check",acc,value,target);
        targetvalue=acc = acc > value.dynamicComparisonKeys[target].length ? acc : value.dynamicComparisonKeys[target].length
    }, 0);
    }
    return targetvalue
    } 
    // value.reduce((acc, value) => {

    //   return (acc = acc > value.yes[target].length ? acc : value.yes[target].length);

    // }, 0);
  return (
    <div className="table-div bg-gradient-linear from-linear-blue1 to-linear-blue2 py-10 mb-10">

        <p className="text-center mb-8">
        {/* Place 1 - 7 of the */}
             {value?.length -1} best fittings for the {SubCategoryName} in comparison</p> 
        <div className="scroll-box scroll-box--fixed">
            <button className="move js-move" data-dir="prev" onClick={() => sliderRef.current.slickPrev()}>
               <span className="scroll-box--fixed-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="move js-move" data-dir="next" onClick={() => sliderRef.current.slickNext()}>
               <span className="scroll-box--fixed-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>


        <div className="table-compare table-award">
            <div className="scroll-box scroll-box--topbar">
                <button className="move js-move" data-dir="prev" onClick={() => sliderRef.current.slickPrev()}>
                   <span className="scroll-box--topbar-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="move js-move" data-dir="next" onClick={() => sliderRef.current.slickNext()}>
                   <span className="scroll-box--topbar-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>

            <Slider 
            {...settings}
            ref={sliderRef}
            infinite={false}
            speed={500}
            slidesToShow={value?.length>5?5:value?.length}
            slidesToScroll={value?.length>5?1:0}
            swipeToSlide={value?.length>5?true:false}
            >
                {value?.map((item,i)=>(
                    <div key={i}>
                        <div className="table-box table-hed">
                          {item?.Award !=='' && item?.Award !==null?
                         <span className="flex">
                         {(item?.AwardImg !==null && item?.AwardImg!=="")?
                             <Image src={imagePath+item?.AwardImg} alt="Winner" width={50} height={50}/>  :null
                        }
                        {item?.Award}</span>
                          :
                          item?.Award !=="Award"? 
                          <span className="flex">
                             {(item?.AwardImg !==null && item?.AwardImg!=="")?
                                 <Image src={imagePath+item?.AwardImg} alt="Winner" width={50} height={50}/>  :null
                            }
                            {item?.Position}-Place</span>
                          :<div className='award2'>{item?.Award}</div>
                          }
                        </div>
                        <div>{item?.Image !==""?
                         <div className='table-box table-image' >
                            <Image src={item?.Image?.split(';->')[0]} alt="Hii" width={500} height={500}/>
                            {(item?.Image?.split(';->')[1]).length>80?
                             <p>{(item?.Image?.split(';->')[1]).substring(0,80)}...</p>
                            :<p>{(item?.Image?.split(';->')[1])}</p>}
                            {item?.Image?.split(';->')[2]}
                        </div>
                        :
                        <div className='table-box table-image'>
                           <div className='table-image-txt'></div>
                        </div>
                        }</div>
                        <div className="table-box table-customer-ratting">
                            {item?.Customeronamazon?.split(',')[0] !=="CUSTOMER ON AMAZON" ?
                        <div className="table-ratting text-center">
                         <Rating value={item?.Customeronamazon?.split(',')[0]}  size="fs-2" />
                         <p className="spl-rev">
                            {item?.Customeronamazon?.split(',')[1]}
                         </p>
                        </div>
                        :item?.Customeronamazon?.split(',')[0]}
                        </div>
                        <div className="table-box table-btn">
                            <div 
                            
                            className="btn-view-all">
                                {item?.details !=="DETAILS"?
                               <Link href={`/ProductDetails/${item?.details}`}>View Details</Link> 
                                :"DETAILS"}
                            </div>
                        </div>
                        <div className='table-box table-goodbox'>
                          {item?.comparisonResult?.split(',')[0] !==""?
                           <div className="com-box">
                             <p className='com-text'>{item?.comparisonResult?.split(',')[0]}</p>
                             <p className='com-hed'>{item?.comparisonResult?.split(',')[1]}</p>
                         </div>:null
                        }
                           
                        </div>
                        <div className='table-box table-offerbox'>{item?.comparison !=="COMPARISON"?
                        <>About &nbsp;<span className="text-[#0C5E90]"> €{item?.comparison} </span> &nbsp;To Offer</>:
                        "COMPARISON"}</div>
                         
                        {Object.keys(item.dynamicComparisonKeys)?.map(val =>item.dynamicComparisonKeys[val])
                        ?.map((item2,i2)=>(
                            <div 
                            className={`table-box ${maxValue(Object.keys(item.dynamicComparisonKeys)[i2])>70?
                              "table-features":
                              `${maxValue(Object.keys(item.dynamicComparisonKeys)[i2])>50?"table-custom":"table-offerbox"}`
                            }
                            
                           `}
                            key={i2}
                            >
                                {Array.isArray(item2)? 
                                <>
                                {typeof(item2[1])==="string"?
                                 <ul className="check-list">
                                      {item2?.map((item3,i3)=>(
                                        <li key={i3}>
                                            {item3}
                                        </li>
                                 ))}
                                 </ul>
                                :
                                  <div>
                                   {item2?.map((item3,i3)=>(
                                        <p key={i3}>
                                          {Object.entries(item3).map(([value],i4) => (
                                            <>
                                            {`${value}`}{i4===(Object.entries(item3).length)-1?null:","}
                                            </>
                                            ))}
                                        </p>
                                 ))}
                                  </div>
                                }

                                </>
                                  
                                //   <div>
                                //    {item2?.map((item3,i3)=>(
                                //         <p key={i3}>
                                //              {item3.DisplayValue}
                                //         </p>
                                //  ))}
                                //   </div>
                                //  <ul className="feat-list">
                                //     {console.log("item2",item2)}
                                //       {item2?.map((item3,i3)=>(
                                //         <li key={i3}>
                                //               {console.log("item2",item2)}
                                //             {item3}
                                //         </li>
                                //  ))}
                                //  </ul>
                              :item2}
                            </div>
                        ))}
                        
                         <div className='table-box table-logo'>
                        {item?.availableat !=="AVAILABLE AT"?
                            <Image src={Amazon} alt="amazon"/>
                        :item?.availableat}
                        </div>
                    </div>
                ))}
                {/* {table?.map((item,i)=>(
                      <div key={i}>
                        <div className="table-box table-hed">{item?.Award ==="Winner"?
                        <span className="flex winner"><Image src={Trophy} alt="Winner"/> {item?.Award}</span>:
                        item?.Award==="Price Performance"?
                        <span className="flex trophy"><Image src={Coins} alt="Coins"/> {item?.Award}</span>
                        :
                        item?.Award==="Saving Tip"?
                        <span className="flex Saving"><Image src={Banknote} alt="Coins"/> {item?.Award}</span>:
                       <div className='award2'>{item?.Award}</div> 
                        }</div>

                      
                        <div>{item?.Image !==""?
                         <div className='table-box table-image' >
                            <Image src={Prod1} alt="Hii" />
                            <p>{item?.Image?.split(',')[1]}</p>
                            {item?.Image?.split(',')[2]}
                        </div>
                        :
                        <div className='table-box table-image'>
                           <div className='table-image-txt'></div>
                        </div>
                        }</div>

                        
                        <div className="table-box table-customer-ratting">
                            {item?.Customeronamazon?.split(',')[0] !=="CUSTOMER ON AMAZON" ?
                        <div className="table-ratting text-center">
                         <Rating value={item?.Customeronamazon?.split(',')[0]}  size="fs-2" />
                         <p className="spl-rev">
                            {item?.Customeronamazon?.split(',')[1]}
                         </p>
                        </div>
                        :item?.Customeronamazon?.split(',')[0]}
                        </div>

                        
                        <div className="table-box table-btn">
                            <Link href="/ProductDetails/room_fan" className="btn-view-all">
                                {item?.details}
                            </Link>
                        </div>

                        
                        <div className='table-box table-goodbox'>
                            <div className="com-box">
                                <p className='com-text'>{item?.comparisonResult?.split(',')[0]}</p>
                                <p className='com-hed'>{item?.comparisonResult?.split(',')[1]}</p>
                            </div>
                        </div>
                        

                        <div className='table-box table-offerbox'>{item?.comparison}</div>
                        

                        <div className='table-box table-brand'>{item?.brand}</div>
                        

                        <div className='table-box table-features'>
                        <ul className="feat-list">
                            {item?.features?.split('<br/>')?.map((value,i2)=>(
                                <li key={i2}>{value}</li>
                            ))}
                            </ul>
                        </div>
                        

                        <div className='table-box table-logo'>
                        {item?.availableat !=="AVAILABLE AT"?
                            <Image src={Amazon} alt="amazon"/>
                        :item?.availableat}
                        </div>


                      </div>
                    
                ))} */}
            </Slider>
        </div>
        


    </div>
  )
}

export default Table