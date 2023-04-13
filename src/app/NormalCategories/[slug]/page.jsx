import React from 'react'
import Prod1 from "../../../img/categoryplaceholder.png";
import Image from 'next/image';
import Link from 'next/link';
import { fetchSubCategories } from '@/app/data/SubCategories';
import { imagePath } from '@/app/config';
import { notFound } from 'next/navigation';
export async function getdata(value) {
  const data = await fetchSubCategories(value);
  return {
    data,
  };
}
const page = async (context) => {
  const { data } = await getdata(context.params.slug);
  const filteredCategories=data?.normalCategoriesList?.filter(x=>x.isThisInputId===true)
  if (data?.message ==="Error Finding Normal Category") {
    notFound();
  }
  return (
    <section>
      <div className="container">
      <div className="pg-title py-10">
      <nav className="w-full">
      <ol className="flex flex-wrap mb-3">
            <li><Link href="/" className="text-blue-600 hover:text-blue-400">Home</Link></li>
            <li><span className="c-breadcrumb-divider text-gray-500 text-lg mx-2">&#8250;</span></li>
            <li> 
            <Link  href={`/TopCategories/${data?.topCategoryId}`} className="text-blue-600 hover:text-blue-400">
             {data?.topCategoryDisplayName}
            </Link>
            </li>
            <li><span className="c-breadcrumb-divider text-gray-500 text-lg mx-2">&#8250;</span></li>
            <li className="font-bold">
              {filteredCategories?.length >0 &&filteredCategories[0]?.normalCategoryDisplayName}
              </li>
          </ol>
      </nav>
      <h1 className="mn-title">{filteredCategories?.length >0 && filteredCategories[0]?.normalCategoryDisplayName}</h1>
      </div>
      <div className="c-prolist grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 lg:gap-6 mb-20">
        {data?.subCategoriesList?.map((item)=>(
          <Link 
          href={`/SubCategories/${item?.subCategoryId}`}
          className="flex flex-col items-center justify-flex-start c-prod-box" key={item.subCategoryId}>
          <div className="c-prod-box--img rounded overflow-hidden">
              <Image 
              src={item?.subCategoryImage !== null?imagePath+item?.subCategoryImage:Prod1} alt="Prod1" width={500} 
              height={500}
              loading='lazy'
              />
          </div>
          <p className="c-prod-box--title">{item?.subCategoryDisplayName}</p>
        </Link>
        ))}     
      </div>
      </div>
  </section>
  )
}

export default page