import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {FaStar} from "react-icons/fa6"
import { Rating } from "flowbite-react";

const SingleBook = () => {
    const { _id, bookTitle,bookDescription, authorName, imageURL} = useLoaderData();
  return (
    
    <div className='px-10 lg:px-20 bg-teal-100 flex items-center'>
    <div className='flex w-full flex-col md:flex-row justify-between items-center gap-8 py-40'>
    {}
    <div className=' space-y-8 h-full'>
        <img src={imageURL} alt="" style={{ height: '500px', width:'1000px' }} className='h-100'/>
        <Rating size="md">
        <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
     
    </Rating>
    <p className=' text-2xl font-italic leading-snug text-black '>Rate this Book</p>
        
  
        </div>
        <div className=' space-y-8 h-full'>
        <h2 className=' text-7xl font-bold italic leading-snug text-black '><h2>{bookTitle}</h2></h2>

        <p className=' text-4xl font-bold underline leading-snug text-blue-700 '>{authorName}</p>
        <br/>
        <Rating size="md">
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.0 out of 5</p>
    </Rating>
                
       <p className=' text-3xl font-bold leading-snug text-black '>Description : </p> <p className=' text-2xl font-italic leading-snug text-black '>{bookDescription}</p>
       
       <p className=' text-2xl font-italic leading-snug text-black '>Price : $10.00</p>
        <button className='bg-blue-700 px-10 py-2 text-white font-medium hover:bg-black
                transition-all ease-in duration-200'> Add to Cart</button>
    </div>
    </div>

</div>
  )
}

export default SingleBook

/*<div className='px-4 lg:px-244 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {}
        <div className='md:w-4/5 space-y-6 h-full'>
            <img src={imageURL} alt="" className='h-96'/>
            <h2>{bookTitle}</h2>
       <div>
                <input type="search" name="search" id="search" placeholder='Search a Book' className='py-2 px-10 rounded-s-sm outline-none' />
                <button className='bg-blue-700 px-10 py-2 text-white font-medium hover:bg-black
                transition-all ease-in duration-200'>Search</button>
            </div>
            </div>
            <div>
        <BannerCard></BannerCard>
        </div>
        </div>
  
    </div> */ 