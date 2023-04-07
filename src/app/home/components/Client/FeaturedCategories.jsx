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
                 <div className="w-auto mb-10 sm:mb-0 sm:w-6/12 sm:mr-8 md:w-3/5 lg:w-2/5">
                   <Image
                     className="w-full h-auto"
                     src={featureddata?.topCategoryImage !==null ?imagePath+featureddata?.topCategoryImage:HouseholdImg}
                     alt="Household"
                     width={500}
                     height={600}
                   />
                 </div>

                 <div className="tab-widget">
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
             null
            }
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
