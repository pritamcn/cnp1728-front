import Image from "next/image";
import React from "react";
import TrophyBlu from "../../../img/details/trophy-blu.png";
import Amazon from "../../../img/details/amaon-sml.png";
import AmazonIcon from "../../../img/details/Amazon_icon 1.png";
import whiteArrow from "../../../img/details/white-rgt-arrow.png";
import Bathroomfan from "../../../img/categoryplaceholder.png";
import Rating from "@/app/Common/Rating";
import Link from "next/link";
import Description from "../Components/Client/Description";
import { fetchProductDetails } from "@/app/data/ProductDetails";
import { renderMarkdownToHTML } from "@/app/Common/Rendermarkdowntohtml";
import { imagePath } from "@/app/config";
export async function getdata(value) {
  const data = await fetchProductDetails(value);
  return {
    data,
  };
}
const page =async (context) => {
  const { data } = await getdata(context.params.slug);
  const filteredNormalCategories=data?.normalCategoriesList?.filter(x=>x.isThisInputId===true)
  const otherproductdata=data?.otherProductsList?.filter((product)=>product?.productId !=context.params.slug)
  let realProduct=data?.otherProductsList?.filter((product)=>product?.productId ==context.params.slug)[0]
  return (
    <section className="c-pro-listing">
      <div className="container">
        <div
          className="tab-content c-tab-content bg-white pt-10 px-0"
          id="tabs-tabContentFill"
        >
          <div
            className="tab-pane fade show active"
            id="tabs-01"
            role="tabpanel"
            aria-labelledby="tabs-01-tabFill"
          >
            <div className="c-details-pg">

              <nav className="w-full c-breadcrumb">
                <ol className="list-reset flex flex-wrap mb-3">
                  <li>
                    <Link href="/" className="text-blue-600 hover:text-blue">
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="c-breadcrumb-divider text-gray-500 text-lg mx-2">
                      &#8250;
                    </span>
                  </li>
                  <li>
                    <Link href={`/TopCategories/${data.topCategoryId}`} className="text-blue-600 hover:text-blue">
                      {data?.topCategoryDisplayName}
                    </Link>
                  </li>
                  {filteredNormalCategories?.length >0 ?
                  <>
                  <li><span className="c-breadcrumb-divider text-gray-500 text-lg mx-2">&#8250;</span></li>
                  <li >
                  <Link href= {`/NormalCategories/${filteredNormalCategories[0]?.normalCategoryId}`} className="text-blue-600 hover:text-blue-400">
                  {filteredNormalCategories[0]?.normalCategoryDisplayName}
                  </Link>
                    </li>
                    </>
                  
                  :null}
                  
                     <li><span className="c-breadcrumb-divider text-gray-500 text-lg mx-2">&#8250;</span></li>
                  <Link href= {`/SubCategories/${data?.subCategoryId}`} className="text-blue-600 hover:text-blue-400">{data?.subCategoryDisplayName}</Link>    
                  <li>
                    <span className="c-breadcrumb-divider text-gray-500 text-lg mx-2">
                      &#8250;
                    </span>
                  </li>
                  <li className="font-bold">
                    {data?.productDisplayName?.length >30 ? 
                    <>
                    { data?.productDisplayName?.slice(0,30)}...
                    </>
                   :data?.productDisplayName}
                  </li>
                </ol>
              </nav>

              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 px-3.5 mb-10">
                  
                  <h2 className="c-title-hd uppercase mb-0">
                    {data?.productDisplayName}
                  </h2>

                  {/* <p className="text-size15" dangerouslySetInnerHTML={renderMarkdownToHTML(data?.productRelatedInfo?.description)}>
                  </p> */}
                </div>
                <div className="lg:w-2/6 px-3.5 relative mb-10">
                  
                    <div className="c-bestprice-box-middle px-3.5">
                      
                      <div className="c-bestprice-box flex flex-col md:flex-row rounded bg-light-blue3">
                        <div className="flex-1">
                          {realProduct?.secondAward!==null && realProduct?.secondAward?.length >0 &&realProduct?.secondAward?.map((item,i)=>(
                             <div className="c-bestprice--icon" key={i} >
                             <Image
                               className="inline-block align-middle"
                               src={TrophyBlu}
                               alt="trophy"
                             />
                             {item}
                           </div>
                          ))}
                          
                        </div>
                        <div className="flex-1">
                          <div className="amz-offerprice-box md:text-right">
                            <span className="text-medium-gray">about</span>
                            <div className="price md:text-right font-bold text-light-blue2 m-0 mb-1">
                              €{realProduct?.productPrice}
                            </div>
                            <p className="mb-0">
                              to offer{" "}
                              <Image
                                className="inline-block"
                                src={Amazon}
                                alt="Amazon"
                              />
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  
                </div>
              </div>
              <div className="c-test-main lg:mb-6">
                <div className="c-top-lft c-test--col order-2 md:order-none mb-6">
                  <div className="px-3.5">
                    {realProduct?.comparisonResult !==null && realProduct?.comparisonResult?.rating !=="" ?
                    <div className="bg-light-blue3 p-3.5 mb-3.5 text-center c-goodbox">
                    {/* <h6 className="white-title font-bold uppercase mb-0.5">
                      Produktpilot24.de
                    </h6> */}
                    {/* <p className="white-text">GROHE Grohtherm 800</p> */}
                    <div className="white-circle">
                      <p className="com-text">{realProduct.comparisonResult?.remark}</p>
                      <p className="com-text">{realProduct.comparisonResult?.rating}</p>
                      <p className="com-hed"></p>
                    </div>
                  </div>:null
                  }
                    
                    <div className="bg-light-blue3 p-2 mb-3.5 c-rating-box">
                      <div className="amz-logo">
                        <Image src={AmazonIcon} alt="amazon_icon" />
                      </div>
                      <h3 className="uppercase text-black mt-10 mb-0">Rating</h3>
                      <div className="flex flex-row justify-start">
                        <div className="flex flex-row flex-1 star-box">
                          <Rating value={4.5} size="w-3.5 h-3.5" />
                        </div>
                        <div className="rating-note">
                          <p>4.4 Out Of 5</p>
                        </div>
                      </div>
                      <div className="rating-bars flex mb-2 pb-1 border-b border-light-blue4 justify-start">
                        <div className="w-1/4 text-xs capitalize font-normal text-light-blue2">
                          5 Star
                        </div>
                        <div className="c-progress-bar flex-1 bg-light-gray2 border border-medium-gray3">
                          <div
                            className="h-4 bg-yellow-400"
                            style={{ width: "70%" }}
                          ></div>
                        </div>
                        <div className="w-1/5 text-right text-xs capitalize  text-light-blue2 mt-0.5">
                          70%
                        </div>
                      </div>
                      <div className="rating-bars flex mb-2 pb-1 border-b border-light-blue4 justify-start">
                        <div className="w-1/4 text-xs capitalize font-normal text-light-blue2">
                          4 Star
                        </div>
                        <div className="c-progress-bar flex-1 bg-light-gray2 border border-medium-gray3 ">
                          <div
                            className="h-4 bg-yellow-400"
                            style={{ width: "15%" }}
                          ></div>
                        </div>
                        <div className="w-1/5 text-right text-xs capitalize  text-light-blue2 mt-0.5">
                          15%
                        </div>
                      </div>
                      <div className="rating-bars flex mb-2 pb-1 border-b border-light-blue4 justify-start">
                        <div className="w-1/4 text-xs capitalize font-normal text-light-blue2">
                          3 Star
                        </div>
                        <div className="c-progress-bar flex-1 bg-light-gray2 border border-medium-gray3">
                          <div
                            className="h-4 bg-yellow-400"
                            style={{ width: "35%" }}
                          ></div>
                        </div>
                        <div className="w-1/5 text-right text-xs capitalize  text-light-blue2 mt-0.5">
                          35%
                        </div>
                      </div>
                      <div className="rating-bars flex mb-2 pb-1 border-b border-light-blue4 justify-start">
                        <div className="w-1/4 text-xs capitalize font-normal text-light-blue2">
                          2 Star
                        </div>
                        <div className="c-progress-bar flex-1 bg-light-gray2 border border-medium-gray3">
                          <div
                            className="h-4 bg-yellow-400"
                            style={{ width: "10%" }}
                          ></div>
                        </div>
                        <div className="w-1/5 text-right text-xs capitalize  text-light-blue2 mt-0.5">
                          10%
                        </div>
                      </div>
                      <div className="rating-bars flex mb-2 pb-1 border-b border-light-blue4 justify-start">
                        <div className="w-1/4 text-xs capitalize font-normal text-light-blue2">
                          1 Star
                        </div>
                        <div className="c-progress-bar flex-1 bg-light-gray2 border border-medium-gray3 ">
                          <div
                            className="h-4 bg-yellow-400"
                            style={{ width: "15%" }}
                          ></div>
                        </div>
                        <div className="w-1/5 text-right text-xs capitalize  text-light-blue2 mt-0.5">
                          15%
                        </div>
                      </div>
                      <Link
                        href="#"
                        className="c-btn c-btn--gradient-dark inline-block w-full text-center mt-4 mb-5"
                      >
                        123 Reviews <Image src={whiteArrow} alt="whiteArrow" />
                      </Link>
                     </div>
                  </div>
                </div>
                <Description value={data} id={context?.params?.slug}/>
                
                {data?.otherSubCategoriesList?.length ===0 && data?.otherNormalCategoriesList?.length ===0 ?null:
                 <div className="c-similartests-box c-test--col order-8 md:order-none mb-20">
                  <div className="px-3.5">
                    <h3>SIMILAR TESTS AND COMPARISONS</h3>

                     <div className="detail-box text-size15">
                       <p>
                         Readers of the {data?.subCategoryDisplayName} were also interested
                         in these tests and comparisons
                       </p>
                     </div>
                     <div className="c-prolist c-prolist--sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 lg:gap-6">
                       {data?.otherSubCategoriesList?.length >0 ?
                       data?.otherSubCategoriesList?.map((item3,i)=>(
                         <Link href={`/SubCategories/${item3?.subCategoryId}`} className="flex flex-col c-prod-box" key={i}>
                         <div className="c-prod-box--img rounded overflow-hidden">
                           <Image src={item3?.subCategoryImage !==null ? imagePath+item3?.subCategoryImage:Bathroomfan} alt="bathroom" width={500} height={500} loading="lazy"/>
                         </div>
                         <p className="c-prod-box--title">{item3?.subCategoryDisplayName}</p>
                       </Link>
                       ))
                       
                      :null}
                        {data?.otherNormalCategoriesList?.length >0 ?
                        data?.otherNormalCategoriesList?.map((item4,i)=>(
                        <Link href={`${item4?.subCategoryPresent?`/NormalCategories/${item4?.otherNormalCategoryId}`:
                        `/SubCategories/${item4?.otherNormalCategoryId}`
                        }`} className="flex flex-col c-prod-box" key={i}>
                        <div className="c-prod-box--img rounded overflow-hidden">
                         <Image src={item4?.otherNormalCategoryImage !==null ? imagePath+item4?.otherNormalCategoryImage:Bathroomfan} alt="bathroom" width={500} height={500} loading="lazy"/>
                        </div>
                        <p className="c-prod-box--title">{item4?.otherNormalCategoryDisplayName}</p>
                        </Link>
                        ))

                        :null}
                  
                    </div>
                 </div>
                </div>
                }

                {/*</div>*/}
                {/*end w-2/6*/}
               
                <div className="c-otherrecomendation-box c-test--col order-7 md:order-none mb-12">
                <div className="px-3.5">
                      <h2 className="mb-10">OTHER RECOMMENDATIONS</h2>
                      <div className="c-prolist grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 lg:gap-6">
                      {otherproductdata?.map((item,i)=>(
                        <Link href={`/ProductDetails/${item?.productId}`} className="flex flex-col c-prod-box" key={i}>
                            <div className="c-prod-box--img rounded overflow-hidden">
                                <Image src={item?.productImage} alt="rec-1" width={500} height={500}/>
                            </div>
                            <div className="flex flex-row items-center py-2">
                              <div className="flex-1 mr-5">
                                <div className="amz-price text-left">€{item?.productPrice}</div>
                                <p className="text-left mb-0">{item?.productShipping ==="freeShippingAvailable"?
                                "Free shipping":null}</p>
                              </div>
                               <Image src={Amazon} alt="amazon-sml"/>
                           
                            </div>
                            <div className="c-prod-box--name border-t border-line text-left">
                              <p className="text-medium-gray">
                                {item?.productName}
                              </p>
                            </div>
                            </Link>
                      ))
                      
                      }
                      
                     
                            {/* <div className="flex flex-col c-prod-box">
                            <div className="c-prod-box--img rounded overflow-hidden">
                                <Image src={Rectangle} alt="rec-1"/>
                            </div>
                            <div className="flex flex-row items-center py-2">
                              <div className="flex-1 mr-5">
                                <div className="amz-price text-left">€165.98</div>
                                <p className="text-left mb-0">Free Shipping</p>
                              </div>
                               <Image src={Amazon} alt="amazon-sml"/>
                           
                            </div>
                            <div className="c-prod-box--name border-t border-line text-left">
                              <p className="text-medium-gray">
                                Grohe Grohtherm
                                <br/>
                                800 Thermostats
                              </p>
                            </div>
                            </div>  
                            <div className="flex flex-col c-prod-box">
                            <div className="c-prod-box--img rounded overflow-hidden">
                                <Image src={Rectangle} alt="rec-1"/>
                            </div>
                            <div className="flex flex-row items-center py-2">
                              <div className="flex-1 mr-5">
                                <div className="amz-price text-left">€165.98</div>
                                <p className="text-left mb-0">Free Shipping</p>
                              </div>
                               <Image src={Amazon} alt="amazon-sml"/>
                           
                            </div>
                            <div className="c-prod-box--name border-t border-line text-left">
                              <p className="text-medium-gray">
                                Grohe Grohtherm
                                <br/>
                                800 Thermostats
                              </p>
                            </div>
                            </div>
                            <div className="flex flex-col c-prod-box">
                            <div className="c-prod-box--img rounded overflow-hidden">
                                <Image src={Rectangle} alt="rec-1"/>
                            </div>
                            <div className="flex flex-row items-center py-2">
                              <div className="flex-1 mr-5">
                                <div className="amz-price text-left">€165.98</div>
                                <p className="text-left mb-0">Free Shipping</p>
                              </div>
                               <Image src={Amazon} alt="amazon-sml"/>
                           
                            </div>
                            <div className="c-prod-box--name border-t border-line text-left">
                              <p className="text-medium-gray">
                                Grohe Grohtherm
                                <br/>
                                800 Thermostats
                              </p>
                            </div>
                            </div>
                            <div className="flex flex-col c-prod-box">
                            <div className="c-prod-box--img rounded overflow-hidden">
                                <Image src={Rectangle} alt="rec-1"/>
                            </div>
                            <div className="flex flex-row items-center py-2">
                              <div className="flex-1 mr-5">
                                <div className="amz-price text-left">€165.98</div>
                                <p className="text-left mb-0">Free Shipping</p>
                              </div>
                               <Image src={Amazon} alt="amazon-sml"/>
                           
                            </div>
                            <div className="c-prod-box--name border-t border-line text-left">
                              <p className="text-medium-gray">
                                Grohe Grohtherm
                                <br/>
                                800 Thermostats
                              </p>
                            </div>
                            </div>
                            <div className="flex flex-col c-prod-box">
                            <div className="c-prod-box--img rounded overflow-hidden">
                                <Image src={Rectangle} alt="rec-1"/>
                            </div>
                            <div className="flex flex-row items-center py-2">
                              <div className="flex-1 mr-5">
                                <div className="amz-price text-left">€165.98</div>
                                <p className="text-left mb-0">Free Shipping</p>
                              </div>
                               <Image src={Amazon} alt="amazon-sml"/>
                           
                            </div>
                            <div className="c-prod-box--name border-t border-line text-left">
                              <p className="text-medium-gray">
                                Grohe Grohtherm
                                <br/>
                                800 Thermostats
                              </p>
                            </div>
                            </div>
                            <div className="flex flex-col c-prod-box">
                            <div className="c-prod-box--img rounded overflow-hidden">
                                <Image src={Rectangle} alt="rec-1"/>
                            </div>
                            <div className="flex flex-row items-center py-2">
                              <div className="flex-1 mr-5">
                                <div className="amz-price text-left">€165.98</div>
                                <p className="text-left mb-0">Free Shipping</p>
                              </div>
                               <Image src={Amazon} alt="amazon-sml"/>
                           
                            </div>
                            <div className="c-prod-box--name border-t border-line text-left">
                              <p className="text-medium-gray">
                                Grohe Grohtherm
                                <br/>
                                800 Thermostats
                              </p>
                            </div>
                            </div>
                            <div className="flex flex-col c-prod-box">
                            <div className="c-prod-box--img rounded overflow-hidden">
                                <Image src={Rectangle} alt="rec-1"/>
                            </div>
                            <div className="flex flex-row items-center py-2">
                              <div className="flex-1 mr-5">
                                <div className="amz-price text-left">€165.98</div>
                                <p className="text-left mb-0">Free Shipping</p>
                              </div>
                               <Image src={Amazon} alt="amazon-sml"/>
                           
                            </div>
                            <div className="c-prod-box--name border-t border-line text-left">
                              <p className="text-medium-gray">
                                Grohe Grohtherm
                                <br/>
                                800 Thermostats
                              </p>
                            </div>
                            </div>
                            <div className="flex flex-col c-prod-box">
                            <div className="c-prod-box--img rounded overflow-hidden">
                                <Image src={Rectangle} alt="rec-1"/>
                            </div>
                            <div className="flex flex-row items-center py-2">
                              <div className="flex-1 mr-5">
                                <div className="amz-price text-left">€165.98</div>
                                <p className="text-left mb-0">Free Shipping</p>
                              </div>
                               <Image src={Amazon} alt="amazon-sml"/>
                           
                            </div>
                            <div className="c-prod-box--name border-t border-line text-left">
                              <p className="text-medium-gray">
                                Grohe Grohtherm
                                <br/>
                                800 Thermostats
                              </p>
                            </div>
                            </div>
                            <div className="flex flex-col c-prod-box">
                            <div className="c-prod-box--img rounded overflow-hidden">
                                <Image src={Rectangle} alt="rec-1"/>
                            </div>
                            <div className="flex flex-row items-center py-2">
                              <div className="flex-1 mr-5">
                                <div className="amz-price text-left">€165.98</div>
                                <p className="text-left mb-0">Free Shipping</p>
                              </div>
                               <Image src={Amazon} alt="amazon-sml"/>
                           
                            </div>
                            <div className="c-prod-box--name border-t border-line text-left">
                              <p className="text-medium-gray">
                                Grohe Grohtherm
                                <br/>
                                800 Thermostats
                              </p>
                            </div>
                            </div> */}
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
