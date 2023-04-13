'use client';
import React,{useState} from 'react'
import SearchImage from "../../../../img/search.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Search = ({value}) => {
  const [search, setsearch] = useState(value);
  const router = useRouter();
  const handleSearch=()=>{
    if(search !==undefined&&search !==""){
      router.push(`/Search?s=${search}`)
    }
   
  }
  return (
    <div className="search relative z-20">
    <Image 
    className="search-img" src={SearchImage} alt="search" loading='lazy'/>
      <input type="text" className="form-control" 
      placeholder="Please enter your desired requirement"
      value={search}
      onChange={(e)=>setsearch(e.target.value)}
      onKeyDown={(event) => event.key === "Enter" && handleSearch()}
      />
      <button className={`c-btn ${(search ===undefined||search ==="")?"disabled":null}`} disabled={search===undefined||search ===""}
      onClick={handleSearch}
      >Search</button>
    </div>
  )
}

export default Search