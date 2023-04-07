'use client';
import React from 'react'
import Full_Star from "../../img/comp/Star-full.png";
import Half_Star from "../../img/comp/Star-half.png";
import Image from 'next/image';
const Rating = ({value,size}) => {
    return (
        <div className='flex'>
            <span className={size !==undefined?`${size}`:""}>
            {value>=1?
            <Image src={Full_Star} alt="full"/>
            :value>=0.5?<Image src={Half_Star} alt="full"/>:<Image src={Full_Star} alt="full"/>}   
            </span>
            <span className={size !==undefined?`${size}`:""}>
            {value>=2?
            <Image src={Full_Star} alt="full"/>
            :value>=1.5?<Image src={Half_Star} alt="full"/>:<Image src={Full_Star} alt="full"/>}
            </span>
            <span className={size !==undefined?`${size}`:""}>
            {value>=3?
            <Image src={Full_Star} alt="full"/>
            :value>=2.5?<Image src={Half_Star} alt="full"/>:<Image src={Full_Star} alt="full"/>}
            </span>
            <span className={size !==undefined?`${size}`:""}>
            {value>=4?
            <Image src={Full_Star} alt="full"/>
            :value>=3.5?<Image src={Half_Star} alt="full"/>:<Image src={Full_Star} alt="full"/>}
            </span>
            <span className={size !==undefined?`${size}`:""}>
            {value>=5?
            <Image src={Full_Star} alt="full" />
            :value>=4.5?<Image src={Half_Star} alt="full"/>:<Image src={Full_Star} alt="full"/>}
            </span>
           
        </div>
    )
}

export default Rating
