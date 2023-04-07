'use client';
import React from 'react';
import { Dropdown } from "flowbite-react";
import Link from 'next/link';
const Category = ({value}) => {
  return (
    <div className="flex flex-1 justify-end items-center gap-12 text-bookmark-blue relative btn-category">
        <Dropdown 
          label="Category" 
          className="dropdown-box text-white rounded-lg px-2 py-2.5 text-center inline-flex items-center"
        >
          {value?.map((item,i)=>(
            <Link
              href={`/TopCategories/${item?.categoryId}`}
              key={i}
              className={'dropdown-box-menu py-2 text-white'}
            >
              <Dropdown.Item >
              {item?.displayName}
            </Dropdown.Item>
          </Link>
        
          ))}
        </Dropdown>
        
      </div>
  )
}

export default Category