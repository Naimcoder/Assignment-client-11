import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from "react-router-dom";
import UseTitle from "../../Shares/UseTitle/UseTitle";


const ServicesAll = () => {
  UseTitle('My Services')
  const user = useLoaderData();
  return (
    <div className="">
      <h1 className="text-center text-5xl py-8 text-amber-400">MY SERVICRS</h1>
      <div className="grid px-4 py-16   gap-8 my-10 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto  lg:max-w-full md:max-w-full">
        {user.map((srv) => (
          <div key={srv._id}>
            <div>
              <div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-xl">
                <PhotoProvider>
                    <PhotoView src={srv.img}>
                    <img src={srv.img} className="object-cover" alt="" />
                    </PhotoView>
                  </PhotoProvider>
                  <div className="p-5 py-8 px-7  shadow-xl">
                    <Link
                      to="/"
                      className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      {srv.name}
                    </Link>
                    <p className="mb-2 text-gray-700">
                      {srv.description
                        ? srv.description.slice(0, 100)
                        : srv.description}
                      ...
                    </p>
                    <p className="text-2xl font-semibold text-orange-500">
                      ${srv.price}
                    </p>
                    <Link
                      to={`/services/${srv._id}`}
                      aria-label=""
                      className="inline-flex items-center font-semibold transition-colors duration-200 text-white py-3 px-5 bg-orange-500 my-5 rounded hover:text-deep-purple-800"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAll;
//
