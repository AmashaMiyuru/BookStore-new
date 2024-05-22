import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-244 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {}
        <div className='md:w-4/5 space-y-6 h-full'>
            <h2 className='text-7xl font-bold leading-snug text-black'>Buy and Sell Your Books <br></br><span className='text-blue-700'>For the Best Prices</span></h2>
            <p className='md:w-3/4 text-1xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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
  
    </div>
  )
}

export default Banner