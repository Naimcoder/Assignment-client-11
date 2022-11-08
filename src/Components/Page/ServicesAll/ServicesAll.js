import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesAll = () => {
    const user= useLoaderData()
    return (
        <div className=''>
          <h1 className='text-center text-5xl py-8 text-amber-400'>MY SERVICRS</h1>
          <div className='grid gap-8 grid-cols-3 sm:max-w-sm sm:mx-auto  shadow-xl lg:max-w-full'>
            {user.map(srv=><div key={srv._id}>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-xl">
                  <img
                    src={srv.img}
                    className="object-cover"
                    alt=""
                  />
                  <div className="p-5 py-8 px-7  shadow-xl">
                    <Link
                      to="/"

                      className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      {srv.name}
                  </Link>
                    <p className="mb-2 text-gray-700">
                      {srv.description ? srv.description.slice(0,100):srv.description }...
                    </p>
                    <Link
                      to='/'
                      aria-label=""
                      className="inline-flex items-center font-semibold transition-colors duration-200  text-blue-700 hover:text-deep-purple-800"
                    >
                      Learn more
                  </Link>
                  </div>
                </div>
              </div>
            </div>
            </div>)}
            </div>
        </div>
    );
};

export default ServicesAll;