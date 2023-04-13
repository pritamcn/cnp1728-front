import Image from 'next/image'
import React from 'react'
import Prod1 from "../../../img/categoryplaceholder.png";
import Table from '../components/Table';
import Advice from '../components/Advice'; 
import Link from 'next/link';
import { fetchComparisons } from '@/app/data/Comparisons';
import { imagePath } from '@/app/config';
import { Remarkable } from 'remarkable';
import { notFound } from 'next/navigation';
const md = new Remarkable({
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     true,        // Use '/' to close single tags (<br />)
  breaks:       true
});
function renderMarkdownToHTML(markdown) {
  const renderedHTML = md.render(markdown);
  return {__html: renderedHTML};
}
export async function getdata(value) {
  const data = await fetchComparisons(value);
  return {
    data,
  };
}
const page = async(context) => {
  const { data } = await getdata(context.params.slug);
  const filteredNormalCategories=data?.normalCategoriesList?.filter(x=>x.isThisInputId===true)
  const markup = renderMarkdownToHTML(data?.subCategoryAdvice?.Description);
  if (data?.message ==="Error Finding  subCategory") {
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
            <Link href={`/TopCategories/${data.topCategoryId}`} className="text-blue-600 hover:text-blue-400">
            {data.topCategoryDisplayName}
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
            <li className="font-bold">{data?.subCategoryDisplayName}</li>
          </ol>
      </nav>
      {(data.subCategoryAdvice?.Title !==""&&data.subCategoryAdvice?.Title !==null) ?
       <h2 className="c-title-hd uppercase">
       {data?.subCategoryAdvice?.Title}
      </h2>
      :null}
      {(data?.subCategoryAdvice?.Description !==""&&data?.subCategoryAdvice?.Description !==null)?
      <div className="mb-6">
      <p className="text-base" dangerouslySetInnerHTML={markup}>
      </p>
      </div>
      
      :null}
    {filteredNormalCategories?.length >0 && data?.otherSubCategoriesList?.length >0 ?
     <h3 className="text-center font-bold mb-3">{filteredNormalCategories[0]?.normalCategoryDisplayName}</h3>:
     null
  }  
 
  <div className="w-full lg:w-8/12 mx-auto mb-10">
  <div className="c-prolist c-prolist-smallbox grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 lg:gap-6">
    {data?.otherSubCategoriesList?.length >0 ?data?.otherSubCategoriesList?.map((item)=>(
       <Link 
       href= {`/SubCategories/${item.subCategoryId}`} className="flex flex-col items-center justify-start c-prod-box" key={item?.subCategoryId}>
       <div className="c-prod-box--img rounded overflow-hidden">
       <Image src={item?.subCategoryImage!==null ?imagePath+item?.subCategoryImage:Prod1} 
       alt="Other Sub Category" width={150} height={150} loading='lazy'/>
       </div>
       <p className="c-prod-box--title">{item?.subCategoryDisplayName}</p>
       </Link>
    )):null}
    {/* {data?.otherNormalCategoriesList?.length >0 ?
    data?.otherNormalCategoriesList?.map((item2)=>(
      <Link 
      href= {`/SubCategories/${item2?.otherNormalCategoryId}`} className="flex flex-col item2-center justify-start c-prod-box" key={item2?.otherNormalCategoryId}>
      <div className="c-prod-box--img rounded overflow-hidden">
      <Image src={item2?.otherNormalCategoryImage!==null ?imagePath+item2?.otherNormalCategoryImage:Prod1} 
      alt="Other Sub Category" width={150} height={150}/>
      </div>
      <p className="c-prod-box--title">{item2?.otherNormalCategoryDisplayName}</p>
      </Link>
   )):null
  
  } */}
  
  </div>
  </div>
  <Table value={data.tableData} SubCategoryName={data.subCategoryDisplayName}/>
  {data.subCategoryAdvice?.AdviceTitle !=="" ? <Advice value={data.subCategoryAdvice}/>:null}
     </div>
    
     </div>
    </section>
  )
}

export default page