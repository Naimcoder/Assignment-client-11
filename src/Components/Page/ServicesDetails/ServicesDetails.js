import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBicycle, FaStar, FaUser } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/UseContext";

const ServicesDetails = () => {
  const [review, setReview] = useState({});
  const [reviewData, setReviewData] = useState([]);
  const { user } = useContext(AuthContext);
  const users = useLoaderData();
  console.log(review);
  const { name, img, price, ratings, delivery, description } = users;
  const handleReview = (event) => {
    event.preventDefault();
    console.log(review);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("your Review successfully");
        }
      });
  };
  const handleblur = (event) => {
    const fuild = event.target.name;
    const value = event.target.value;
    const newUser = { ...review };
    newUser[fuild] = value;
    setReview(newUser);
  };
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);
  return (
    <div>
      <div className="max-w-lg py-5 my-8 mx-auto p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom"></div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={img}
              alt=""
              className="block object-cover object-center mx-auto rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-lg">
              <span className=" flex items-center text-orange-600">
                Delivery {delivery}
                <span className="ml-3 font-medium text-2xl">
                  <FaBicycle></FaBicycle>
                </span>
              </span>
            </div>
            <div>
              <p className="flex items-center mr-3 text-xl">
                Rating {ratings}
                <span className="ml-1  text-orange-400">
                  <FaStar></FaStar>
                </span>
                <span className="ml-1  text-orange-400">
                  <FaStar></FaStar>
                </span>
                <span className="ml-1  text-orange-400">
                  <FaStar></FaStar>
                </span>
                <span className="ml-2  text-orange-400">
                  <FaStar></FaStar>
                </span>
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <Link rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {name}
              </h3>
            </Link>
            <p className="leading-snug dark:text-gray-400">{description}</p>
          </div>

          <button className=" text-2xl font-bold text-orange-600">
            Price ${price}
          </button>
        </div>
      </div>
      <div>
        {/* review part detalis */}

        {/* review part start */}

        <form
          onSubmit={handleReview}
          className="  bg-slate-300 my-10 lg:w-2/3 mx-auto p-10"
        >
          <h2 className="text-3xl py-5">Reviews</h2>
          <div className="space-y-1 text-sm">
            <label for="name" className="block text-xl dark:text-gray-400">
              Your Name*
            </label>
            <input
              onBlur={handleblur}
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm my-3">
            <label for="email" className="block text-xl dark:text-gray-400">
              Your Email *
            </label>
            <input
              onBlur={handleblur}
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>

          <div className="space-y-1 text-sm">
            <label
              for="rating"
              className="flex text-xl py-5 dark:text-gray-400"
            >
              Your rating *
              <span className="flex ml-3 text-2xl group-aria-selected:text-yellow-600">
                <Link className="start-1">
                  <FaStar></FaStar>
                </Link>
                <Link className="start-2">
                  <FaStar></FaStar>
                </Link>
                <Link className="start-3">
                  <FaStar></FaStar>
                </Link>
                <Link className="start-4">
                  <FaStar></FaStar>
                </Link>
                <Link className="start-5">
                  <FaStar></FaStar>
                </Link>
              </span>
            </label>
          </div>
          <div className="space-y-1 text-sm">
            <label for="email" className="block text-xl dark:text-gray-400">
              Your review *
            </label>
            <textarea
              onBlur={handleblur}
              name="message"
              placeholder=""
              className="w-full p-3 h-32"
            ></textarea>
          </div>
          <button
            className="bg-orange-600 text-xl text-white py-3 px-5 my-5 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <div>
          {reviewData.map((rv) => (
            <div
              className=" shadow-xl my-4 mx-auto px-3 py-5 border lg:w-6/12 rounded"
              key={rv._id}
            >
              <div className="flex items-center">
                <div>
                  {user?.email ? (
                    <>
                      <img
                        className="rounded-full w-16"
                        src={user?.photoURL}
                        alt=""
                      />
                    </>
                  ) : (
                    <>
                      <span>
                        <FaUser></FaUser>
                      </span>
                    </>
                  )}
                </div>
                <div className="mt-5 ml-3">
                  <h2>{rv.name}</h2>
                  <h3>{rv.email}</h3>
                  <h4>{rv.message}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
