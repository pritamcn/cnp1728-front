
import React from 'react'
import Header from "./components/server/header";
import Banner from './components/server/Banner';
import Advertisement from './components/server/Advertisement';
import FeaturedCategories from './components/Client/FeaturedCategories';
import PopularComparison from './components/Client/PopularComparison';
import { fetchTopCategories } from '../data/TopCategories';
import NewComparison from '../Common/NewComparison';
export async function getdata() {
  const data = await fetchTopCategories();
  return {
    data
  };
}
const FrontPage = async() => {
  const {data}=await getdata();
  return (
    <>
      <Header data={data}/>
      <Banner/>
      <Advertisement/>
      <FeaturedCategories value={data}/>
      <PopularComparison/>
      <NewComparison/>
      </>
  )
}

export default FrontPage