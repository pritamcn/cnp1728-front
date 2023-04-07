import Image from "next/image";
import React from 'react';
import BestPrice from "../../img/categoryplaceholder.png";
import Header from "../Common/Header";
import Search from "../home/components/Client/Search";
import Link from "next/link";
import { fetchProductsBySearch } from "../data/SearchProducts";
import { imagePath } from "../config";
import { renderMarkdownToHTML } from "../Common/Rendermarkdowntohtml";
export async function getdata(value) {
  const data = await fetchProductsBySearch(value);
  return {
    data,
  };
}
const page = async (context) => {
  const { data } = await getdata(context.searchParams.s);
  return (
    <section className="c-serch-list">
      <Header/>
      <br/>
      <div className="container">
      <div className="w-full py-10 pl-10 pr-10 flex justify-center">
      <Search value={context?.searchParams?.s}/>
      </div>
      <div className="flex-1 px-3.5 mb-10">
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
                        <div  className=" text-gray-500 hover:text-blue">
                          Search
                        </div>
                      </li>
                     
                      
                    </ol>
                  </nav>
                  {(context?.searchParams?.s !==undefined && data?.subCategories?.length !==0 && data?.products?.length !==0) ?
                    <h2 className="c-title-hd uppercase">
                    all related things about {context.searchParams.s}
                 </h2>:null
                  }
                
                  </div>
         {(data?.subCategories?.length ===0 && data?.products?.length ===0) ? 
         <h2 className="c-title-hd uppercase">No products found </h2>
         :null
         
         }
      {data?.subCategories?.length >0 && data?.subCategories?.map((item,i)=>(
         <Link 
         href={`/SubCategories/${item?.subCategoryId}`}
         className="c-serch-list__row block overflow-hidden border border-gray-300 shadow-lg shadow-gray-200 p-6 pb-2 mb-8" key={i} >
         <div className="c-serch-list--pic md:float-left w-24 h-24 object-cover text-center mr-8 mb-4 border">
           <Image
             className="w-24 h-24 object-cover"
             src={item?.subCategoryImage !==""?imagePath+item?.subCategoryImage:BestPrice}
             alt="BestPrice"
             width={500}
             height={500}
           />
         </div>

         <div className="md:overflow-hidden">
           <h3 className="mb-2">{item?.subCategoryDisplayName}</h3>
           <div className="overflow-hidden">
             <p dangerouslySetInnerHTML={renderMarkdownToHTML(item?.subCategoryDescription)}>
             </p>
           </div>

         </div>
       </Link>
      ))}
        {data?.products?.length >0 && data?.products?.map((item,i2)=>(
         <Link 
         href={`/ProductDetails/${item?.productId}`}
         className="c-serch-list__row block overflow-hidden border border-gray-300 shadow-lg shadow-gray-200 p-6 pb-2 mb-8" key={i2}>
          <div className="c-serch-list--pic md:float-left w-24 h-24 object-cover text-center mr-8 mb-4 border">
            <Image
              className="w-24 h-24 object-cover"
              src={item?.productImage !==""?item?.productImage:BestPrice}
              alt="BestPrice"
              width={500}
              height={500}
            />
          </div>

          <div className="md:overflow-hidden">
            <h3 className="mb-2">{item?.productDisplayName?.slice(0,70)}</h3>
            <div className="flex flex-col align-middle md:float-right mb-2 md:ml-10">
              <div className="flex flex-row">Price: <h3 className="text-medium-blue2 m-0 -mt-1 ml-1">${item?.productPrice}</h3></div>
              <div className="text-red-500">{item?.productFirstAward}</div>
              
              <div className='flex flex-col'>{item?.productSecondAward?.map((item2,i)=>
                <span key={i} className="text-green-500">
                {item2}
                {item?.productSecondAward?.length -1 !==i ?",":null}
                </span>
              )}</div>
              
            </div>
            <div className="overflow-hidden">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>

          </div>
        </Link> 
        ))}
      




      
      </div>
    </section>

    


  );
};

export default page;



