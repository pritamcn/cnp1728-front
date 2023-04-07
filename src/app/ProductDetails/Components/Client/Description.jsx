'use client';
import React,{useRef,useState} from 'react'
import SliderImage from './SliderImage';
import Image from 'next/image';
import Trophy from "../../../../img/comp/trophy.png";
import AmazonFullIcon from "../../../../img/details/amaon-full.png";
import Rating from '@/app/Common/Rating';
import { renderMarkdownToHTML } from '@/app/Common/Rendermarkdowntohtml';
import { imagePath } from '@/app/config';
const Description = ({value,id}) => {
    const Description = useRef();
    const [more, setmore] = useState("");
    const Comparison = useRef();
function handleDescription() {
  Description.current.scrollIntoView({ behavior: "smooth" });
}
function handleComparison() {
    Comparison.current.scrollIntoView({ behavior: "smooth" });
  }
 
let realProduct=value?.otherProductsList?.filter((product)=>product?.productId ==id)[0]
  return (
    <>
                <div className="c-top-mid c-test--col order-1 md:order-none">
                  <div className="px-3.5">
                    {realProduct?.itemDescription !=="" && realProduct?.itemDescription !==null ?
                     <div className="c-btn c-btn--border-shadow inline-block mr-1 mb-5" onClick={handleDescription}>
                     Item Description
                   </div>
                    :null
                  }
                   {/* {realProduct?.priceComparison?.length >0 ?
                    <div className="c-btn c-btn--border-shadow inline-block mr-1 mb-5" onClick={handleComparison}>
                    Price Comparison
                    </div>
                  :null
                  } */}
                      {realProduct?.description !=="" && realProduct?.description !==null?
                      <div className="detail-box text-size15">
                        <p className="text-size15" dangerouslySetInnerHTML={renderMarkdownToHTML(realProduct?.description)}>

                        </p>
                      </div>
                      
                      
                      :null}
                    {realProduct?.customerOpinion !=="" && realProduct?.customerOpinion !==null?
                      <div className="detail-box text-size15">
                        <h3>CUSTOMER OPINION</h3>
                        <p dangerouslySetInnerHTML={renderMarkdownToHTML(realProduct?.customerOpinion)}>

                        </p>
                      </div>
                    :null}
                   
                  </div>
                </div>
                {value?.images?.length >0 ?  <SliderImage image={value?.images}/>:null}
                <div className="w-full md:w-4/6 flex flex-col order-3 md:order-none">

                  <div className="c-three-box c-test--col mb-10 order-5 md:order-none">
                    <div className="px-3.5">
                      <h3 className="mb-1">PRODUCTS IN COMPARISON</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {value?.otherProductsList?.slice(0,3)?.map((item,i)=>(
                            <div className={`rounded-md detail-color-box ${i===0?
                              "blue-box":i===1?"yellow-box":"gren-box"}`} key={i}>
                            <p className="text-wht">{item?.productName}</p>
                            {item?.firstAward !=="" && item?.firstAward !==null ? 
                             <span>
                             <Image
                               className="align-middle"
                               src={item?.firstAwardIcon !==null ?imagePath+item?.firstAwardIcon:Trophy}
                               alt="trophy"
                               width={21}
                               height={21}
                             />{" "}
                             {item?.firstAward}
                           </span>
                            
                            :null}
                           
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {realProduct?.itemDescription !=="" && realProduct?.itemDescription !==null?
                  <div className="c-itemdescrip-box c-test--col order-3 md:order-none">
                    <div className="px-3.5">
                      <h2 className="font-semibold mb-2" ref={Description}>ITEM DESCRIPTION</h2>

                      <div className="overflow-hidden">
                        <div className="lg:w-4/12 lg:float-left lg:text-center">
                          <Image className="lg:ml-auto lg:mr-auto" src={value?.images[0]} alt="" width={200} height={200} loading='lazy'/>
                        </div>

                        
                          <strong className="text-size15 text-black" >
                            {realProduct?.productName}
                          </strong>
                          <div className="detail-box text-size15">
                            <p dangerouslySetInnerHTML={renderMarkdownToHTML(realProduct?.itemDescription)}>

                            </p>

                            {/*<div className="grid grid-cols-3 gap-4">
                            <Image src={value?.images[0]} alt="" width={900} height={900} loading='lazy'/>
                            </div>*/}
                          </div>
                        
                      </div>

                    </div>
                  </div>
                  :null
                  }
                  {/************* end c-itemdescrip-box ************/}



                  {/* {realProduct?.priceComparison} */}
                  {/* <div className="c-pricecomparison-box c-test--col order-6 md:order-none mb-20">
                    <div className="px-3.5">
                      <h2 className="mb-2" ref={Comparison}>PRICE COMPARISION</h2>
                      <div className="detail-box text-size15">
                        <p>
                          The bathtub faucet can be purchased from Amazon for
                          around €166. In October 2022, you can also buy the bath
                          tap at other online shops. Our price comparison shows
                          which of the 8 online retailers listed here for the
                          Grohe Grohtherm 800 thermostats.
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-center justify-center bg-white rounded-md p-2 md:p-4 c-to-offer">
                        <div className="flex flex-col items-start">
                          <div className="amz-price">€165.98</div>
                          <p className="shippi mb-0">Free Shipping</p>
                        </div>

                        <Image src={AmazonFullIcon} alt="AmaonFull" />

                        <div className="col-span-1 text-right">
                          <a
                            href="#"
                            className="c-btn c-btn--gradient-dark text-center"
                          >
                            <Image src={ShoppingCart} alt="Shooping_cart" /> To
                            Offer
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-center justify-center bg-white rounded-md p-2 md:p-4 c-to-offer">
                        <div className="flex flex-col items-start">
                          <div className="amz-price">€165.98</div>
                          <p className="shippi mb-0">Free Shipping</p>
                        </div>

                        <Image src={AmazonFullIcon} alt="AmaonFull" />

                        <div className="col-span-1 text-right">
                          <a
                            href="#"
                            className="c-btn c-btn--gradient-dark text-center"
                          >
                            <Image src={ShoppingCart} alt="Shooping_cart" /> To
                            Offer
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-center justify-center bg-white rounded-md p-2 md:p-4 c-to-offer">
                        <div className="flex flex-col items-start">
                          <div className="amz-price">€165.98</div>
                          <p className="shippi mb-0">Free Shipping</p>
                        </div>

                        <Image src={AmazonFullIcon} alt="AmaonFull" />

                        <div className="col-span-1 text-right">
                          <a
                            href="#"
                            className="c-btn c-btn--gradient-dark text-center"
                          >
                            <Image src={ShoppingCart} alt="Shooping_cart" /> To
                            Offer
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-center justify-center bg-white rounded-md p-2 md:p-4 c-to-offer">
                        <div className="flex flex-col items-start">
                          <div className="amz-price">€165.98</div>
                          <p className="shippi mb-0">Free Shipping</p>
                        </div>

                        <Image src={AmazonFullIcon} alt="AmaonFull" />

                        <div className="col-span-1 text-right">
                          <a
                            href="#"
                            className="c-btn c-btn--gradient-dark text-center"
                          >
                            <Image src={ShoppingCart} alt="Shooping_cart" /> To
                            Offer
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 items-center justify-center bg-white rounded-md p-2 md:p-4 c-to-offer">
                        <div className="flex flex-col items-start">
                          <div className="amz-price">€165.98</div>
                          <p className="shippi mb-0">Free Shipping</p>
                        </div>

                        <Image src={Toolineo} alt="AmaonFull" />

                        <div className="col-span-1 text-right">
                          <a
                            href="#"
                            className="c-btn c-btn--gradient-dark text-center"
                          >
                            <Image src={ShoppingCart} alt="Shooping_cart" /> To
                            Offer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/*********** end c-pricecomparison-box ************/}
                  

                </div>
                {/*end w-4/6 border*/}

                


                <div className="w-full md:w-2/6 flex flex-col order-4 md:order-none">

                  <div className="c-tabledatasheet-box c-test--col order-4 md:order-none c-sidebar-details">
                    <div className="px-3.5">
                      <div className="c-datasheet-table mb-10 order-2 lg:order-none">
                        <table className="table lite-blu-bg  table-detail">
                          <tbody>
                            <tr>
                              <td colSpan="2">
                                <div className="table-detail-hed">
                                  <h6>Data sheet for</h6>
                                  <h3>{realProduct?.productName}</h3>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              
                              {realProduct?.firstAward !=="" && realProduct?.firstAward !==null ?
                              <>
                              <td width="43%">Award</td>
                              <td className="top-border-tble">
                              <Image src={imagePath+realProduct?.firstAwardIcon} alt="TrophyBlack" width={40} height={40} style={{ height: "auto" }} />
                              <span className="det-text ml-1">{realProduct?.firstAward}</span>
                            </td>
                            </>
                              :
                              <>
                              <td width="43%">Rank</td>
                              <td className="top-border-tble">
                              <span className="det-text ml-1">{realProduct?.productRank}</span>
                            </td>
                            </>
                              }
                              
                            </tr>
                            <tr>
                              <td>Category</td>
                              <td>
                                {" "}
                                <span className="det-text">
                                 {value?.subCategoryDisplayName}
                                </span>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                Customer Opinion
                                <br />
                                <span className="on-amzon">on Amazon</span>
                              </td>
                              <td className="stars-bg">
                                <Rating value={4.5} size="fs-2" />
                              </td>
                            </tr>
                            {realProduct?.comparisonResult !==null && realProduct?.comparisonResult?.rating !==""? 
                             <tr>
                             <td>
                               comparison <br />
                               result
                             </td>
                             <td>
                               
                                 <div className="com-box-norm">
                                 <p className="com-text">{realProduct?.comparisonResult?.remark}</p>
                                 <p className="com-hed">{realProduct?.comparisonResult?.rating}</p>
                               </div>
                               
                             
                             </td>
                           </tr>
                            :null}
                           
                            {value?.productRelatedInfo?.productFeature !="" ? 
                            <tr>
                            <td>Features</td>
                            <td>
                              <ul className="feat-list lists-2">
                                {value?.productRelatedInfo?.productFeature?.map((item,i)=>(
                                  <li key={i}>
                                  <div className="feat-box">
                                    {more !==i ?
                                     <p>
                                     {item ?.slice(0,50)}
                                     <br />
                                     <div onClick={()=>setmore(i)} className='text-[#3c88cf] cursor-pointer'>more</div>
                                   </p>
                                    :
                                    <p>
                                    {item}
                                    <br />
                                    <div onClick={()=>setmore("")} className='text-[#3c88cf] cursor-pointer'>less</div>
                                  </p>
                                    }
                                   
                                  </div>
                                </li>
                                ))}
                               

                                {/* <li>
                                  <div className="feat-box">
                                    <p>
                                      Single lever mixer | low noise
                                      <br />
                                      <a href="#">More</a>
                                    </p>
                                  </div>
                                </li>

                                <li>
                                  <div className="feat-box">
                                    <p>
                                      DIN connectors | Easy construction
                                      <br />
                                      <a href="#">More</a>
                                    </p>
                                  </div>
                                </li> */}
                              </ul>
                            </td>
                          </tr>
                            
                            :null}
                            {realProduct?.priceComparison !==null ?
                             <tr>
                             <td>Available At</td>
                             <td className="available-box-row">
                               {realProduct?.priceComparison?.map((item2,i)=>(
                                     
                               <div className="available-box flex flex-col justify-start md:flex-row mb-6 pb-6 pl-3 pr-3" key={i}>
                                 <div className=""><Image src={item2?.logo !==""?imagePath+item2?.logo:AmazonFullIcon} alt="AmazonFull" width={63} height={63} /></div>
                                 <div className="pl-3">€{item2?.price}</div>
                               </div>
                               ))}
                              
                             </td>
                           </tr>
                            :null}
                           
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/*end c-tabledatasheet-box*/}
                </div>
                {/*end w-2/6*/}

                



                  
               
                
                
    </>
  )
}

export default Description