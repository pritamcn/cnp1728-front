import Image from "next/image";
import React from "react";
import Logo from "../../img/Logo2.png";
import Cate2 from "../../img/categoryicon.png";
import Link from "next/link";
import Category from "./Category";
import { fetchTopCategories } from "../data/TopCategories";
import { imagePath } from "../config";
export async function getdata() {
  const data = await fetchTopCategories();
  return {
    data,
  };
}
const Header = async ({params}) => {
  const { data } = await getdata();
  // console.log("HeaderParams",params)
  return (
    <header className="c-header-wrap  u-header-bg relative z-10">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center py-5">
          <Link href="/">
            <div className="py-1 text-center">
              <Image src={Logo} alt="Logo" />
            </div>
          </Link>
          <Category value={data?.allParents} />
        </div>
        <div className="c-header-tab xl:px-28">
          <div className="c-tab px-5">
            <ul
              className="nav nav-tabs c-tab-nav flex flex-wrap items-center list-none border-b-0 pl-0"
              id="tabs-tabFill"
              role="tablist"
            >
              {data?.allParents?.slice(0,7)?.map((item)=>(
                  <li
                  className="nav-item flex-auto text-center c-tab-nav--item mr-1"
                  role="presentation"
                   key={item?.categoryId}
                >
                  <Link
                    href={`/TopCategories/${item?.categoryId}`}
                    className={` c-tab-nav--link
                    nav-link
                    w-full
                    block
                    border-0
                    px-3 py-3
                    m-0
                    hover:border-transparent hover:bg-gray-100
                    focus:border-transparent ${params?.topCategoryId == item?.categoryId ? "active" : null}`}
                    id="tabs-messages-tabFill"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-01"
                    role="tab"
                    aria-controls="tabs-01"
                    aria-selected="false"
                  >
                    <div className="c-tab-icon block mx-auto text-center mb-3">
                      <Image src={item.icon !==null ?imagePath+item.icon:Cate2} className="mx-auto" alt="Cate2" width={50} height={50}/>
                    </div>
                    <span>
                      {item?.displayName}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
