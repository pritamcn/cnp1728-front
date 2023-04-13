
import Image from 'next/image'
import React from 'react'
import Logo from "../../../../img/Logo.png";
import Link from 'next/link';
import Category from '../../../Common/Category';

const header = async({data}) => {
  return (
    <header className=" bg-light-blue lg:bg-transparent relative z-10">
    <div className="container flex items-center py-5">
     <Link href="/">
    <div className="py-1 text-center">
    <Image
      src={Logo}
      alt="Logo"
      loading="lazy"
    />
      </div>
      </Link>
      <Category value={data.allParents}/>
    </div>
  </header>
  )
}

export default header