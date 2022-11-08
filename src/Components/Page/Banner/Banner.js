import React from 'react';
import banner from '../../../Images/banner.png'
const Banner = () => {
    return (
        <div className='flex mx-auto lg:w-8/12 items-center'>
            <div className='w-1/2 py-20'>
                <h1 className='text-6xl font-semibold'>The Best <br/> Restaurants  <br/>In  Your <br/>Home</h1>
                <p className='py-5 font-normal'>Imagine devouring delicious, healthy meals daily without <br /> so much as lifting a pot for your every day life.</p>
                <button className='btn rounded-lg my-3 bg-amber-400 py-2 px-6 text-xl font-medium'>Online Order</button>
            </div>
            <div className='py-5'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};
// Home,,blog,add services
export default Banner;