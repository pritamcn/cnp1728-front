import React from 'react'
import Prod1 from "../../../img/categoryplaceholder.png";
import Image from 'next/image';
import Link from 'next/link';
import { baseURL,imagePath} from "../../config";
import { fetchNormalCategories } from '@/app/data/NormalCategories';
export async function getdata(value) {
  const data = await fetchNormalCategories(value);
  return {
    data,
  };
}
const TopCategoryList = async(context) => {
  const { data } = await getdata(context.params.slug);
  console.log("data",data);
  return (
    <section>
      <div className="container">
      <div className="pg-title py-10">
      <nav className="w-full">
      <ol className="flex flex-wrap mb-3">
            <li><Link href="/" className="text-blue-600 hover:text-blue-400">Home</Link></li>
            <li><span className="c-breadcrumb-divider text-gray-500 text-lg mx-2">&#8250;</span></li>
            <li className="font-bold">{data.topCategoryDisplayName}</li>
          </ol>
      </nav>
      <h1 className="mn-title">{data.topCategoryDisplayName}</h1>
      </div>
      <div className="c-prolist grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6 lg:gap-6 mb-20">
        {data?.normalCategoriesList?.length >0 && data?.normalCategoriesList?.map((item)=>(
            <Link 
            href={`/NormalCategories/${item?.normalCategoryId}`}
            className="flex flex-col items-center justify-center c-prod-box" key={item.normalCategoryId}>
            <div className="c-prod-box--img rounded overflow-hidden">
                <Image src={item.normalCategoryImage !== null?imagePath+item.normalCategoryImage:Prod1} alt="Prod1" width={500} height={500}/>
            </div>
            <p className="c-prod-box--title">{item.normalCategoryDisplayName}</p>
          </Link>
        ))}
        {data?.level3CategoriesList?.length >0 && 
        data?.level3CategoriesList?.map((item2)=>(
          <Link 
            href={`/SubCategories/${item2?.level3CategoryId}`}
            className="flex flex-col items-center justify-center c-prod-box" key={item2?.level3CategoryId}>
            <div className="c-prod-box--img rounded overflow-hidden">
                <Image src={item2?.level3CategoryImage !== null?imagePath+item2?.level3CategoryImage:Prod1} alt="Prod1" width={500} height={500}/>
            </div>
            <p className="c-prod-box--title">{item2?.level3CategoryDisplayName}</p>
          </Link>
        ))}
      </div>
      </div>
  </section>
  )
}

export default TopCategoryList