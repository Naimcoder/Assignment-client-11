import React, { useEffect, useState } from "react";
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
      <div className="grid gap-8 grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {service.map((services) => (
          <div key={services._id}>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                  <img
                    src={services.img}
                    className="object-cover"
                    alt=""
                  />
                  <div className="p-5 border border-t-0">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                      <Link
                        to="/"
                        className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                        aria-label="Category"
                        title="traveling"
                      >
                        traveling
                    </Link>
                      <span className="text-gray-600">— 28 Dec 2020</span>
                    </p>
                    <Link
                      to="/"

                      className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      {services.name}
                  </Link>
                    <p className="mb-2 text-gray-700">
                      {services.description ? services.description.slice(0,100):services.description }...
                    </p>
                    <Link
                      to='/'
                      aria-label=""
                      className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      Learn more
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-end">
        <div>
            <button>
                <Link to="/services">
                    See More
                </Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Services;