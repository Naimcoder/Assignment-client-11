import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const Services = () => {
  const [service, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3  sm:mx-auto l px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8 lg:py-20">
        {service.map((services) => (
          <div key={services._id}>
            <div className="">
              <div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg">
                <PhotoProvider>
                    <PhotoView src={services.img}>
                    <img src={services.img} className="object-cover" alt="" />
                    </PhotoView>
                  </PhotoProvider>
                  <div className="p-5 border border-t-0">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                      <Link
                        to="/"
                        className=" transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                      >
                        delivery
                      </Link>
                      <span  className="text-gray-600"> {services.delivery}
                      </span>
                    </p>
                    <Link
                      to="/"
                      className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      {services.name}
                    </Link>
                    <p className="mb-2 text-gray-700">
                      {services.description
                        ? services.description.slice(0, 100)
                        : services.description}
                      ...
                    </p>
                    <p className='text-2xl font-semibold text-orange-500'>${services.price}</p>
                    <Link
                      to={`/services/${services._id}`}
                      aria-label=""
                      className="  bg-amber-500 py-2 px-5 my-4 text-white rounded inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center pb-4">
        <div>
          <button>
            <Link to="/services">
              <button className="btn text-lg text-gray-50 px-5 py-2 bg-blue-700">
                See More
              </button>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
