"use client";
import Image from "next/image";
import React, { useState } from "react";
import Household from "../../../../img/categoryicon.png";
import HouseholdImg from "../../../../img/categoryplaceholder.png";
import Link from "next/link";
import useFeaturedComparison from "@/app/data/useFeaturedComparison";
import { imagePath } from "@/app/config";
const FeaturedCategories = ({value}) => {
  const [tabvalue,settabvalue]=useState(value?.allParents[0]?.categoryId)
  const { featureddata} = useFeaturedComparison(tabvalue);
  return (
    <section className="c-featured-cat pt-20 pb-10">
      <div className="container">
        <h2 className="text-white text-center mb-12">FEATURED CATEGORIES</h2>
        <div className="tabbed-square">
          <div>
            <ul className="tabs-square">
              {value?.allParents?.slice(0,7)?.map((item)=>(
                     <li className={`tab-square ${tabvalue ===item?.categoryId?"active":null}`}
                     onClick={() => settabvalue(item?.categoryId)} key={item?.categoryId}>
                       <label htmlFor="tab1">
                         <div className="tab-square-icon block mx-auto text-center mb-3 ">
                           <Image
                             src={item?.icon !==null ?imagePath+item?.icon :Household}
                             className="mx-auto"
                             alt="Household"
                             width={50}
                             height={50}
                             loading="lazy"
                           />
                         </div>
                         <span>{item?.displayName}</span>
                       </label>
                     </li>
              ))}
            </ul>
     
            <div className="tab-content-square bg-white pt-10 lg:px-10">
            {featureddata!==undefined  ?
            <div className="flex flex-col sm:flex-row">
                <div className="w-auto mb-10 sm:mb-0 sm:w-2/5 sm:mr-8">
                  <div className="tab-square--pic">
                    <Image
                      className="w-full h-auto"
                      src={featureddata?.topCategoryImage !==null ?imagePath+featureddata?.topCategoryImage:HouseholdImg}
                      alt="Household"
                      width={500}
                      height={600}
                      loading="lazy"
                    />
                  </div>
                </div>

                 <div className="tab-widget flex-1">
                   <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-8">
                    {featureddata?.normalCategoriesList?.map((item,i)=>(
                      <div className="flex flex-col tab-widget-links" key={i}>
                      <Link 
                      href={`/NormalCategories/${item?.normalCategoryId}`}
                       className="font-semibold  text-medium-gray">
                         {item?.normalCategoryDisplayName}
                      </Link>
                      {item?.subCategoriesList?.slice(0,4)?.map((item2)=>(
                        <div key={item2.subCategoryId}>
                            <Link 
                            href={`/SubCategories/${item2?.subCategoryId}`}>
                            {item2.subCategoryDisplayName}
                            </Link>   
                        </div>
                        
                      ))}
                      {item?.subCategoriesList?.length>1? 
                       <Link 
                       href={`/NormalCategories/${item?.normalCategoryId}`}
                        className="c-btn-links" >
                          View All {">"}
                        </Link>
                      :null}
                    </div>
                    ))}
                     

                 
                   </div>
                 </div>
               </div>
               :
            <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
    </div>
    <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>

            }
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
