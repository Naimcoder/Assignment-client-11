import React from 'react';
import bike from '../../../Images/services.png'
const BikeDelivery = () => {
    return (
        <div className='lg:flex justify-evenly items-center'>
             <div className='py-5'>
                <img  src={bike} alt="" />
            </div>
            <div className='lg:w-1/2 py-20'>
                <h1 className='lg:text-6xl text-4xl  font-semibold'>We Serve Sensational <br />  Vegan Fast Food</h1>
                <p className='py-5 sm:text-lg  font-normal '>food delivery is a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer. An order is typically made either through a restaurant or grocer's website or mobile app, or through a food ordering company. The delivered items can include entrees, sides, drinks, desserts, or grocery items and are typically delivered in boxes or bags. The delivery person will normally drive a car, but in bigger cities where homes and restaurants are closer together, they may use bikes or motorized scooters</p>
                <button className='btn outline-0 border-spacing-0 rounded-lg my-3 bg-amber-400 py-2 px-6 text-xl font-medium'>Online Order</button>
            </div>
        </div>
    );
};

export default BikeDelivery;