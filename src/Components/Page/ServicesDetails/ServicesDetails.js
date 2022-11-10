import React, { useContext, useEffect, useState } from "react";
import { FaBicycle, FaStar, FaUser } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/UseContext";
import UseTitle from "../../Shares/UseTitle/UseTitle";

const ServicesDetails = () => {
  UseTitle('Services Detalis')
  const [reviewData, setReviewData] = useState([]);
  const { user } = useContext(AuthContext);
  const users = useLoaderData();
  const { name, img, price, ratings, delivery, description } = users;
  const time = new Date().toDateString();

  const handleReview = (event) => {
    event.preventDefault();

    const servicesId = users?._id;
    const servicesName = users?.name;
    const userEmail = event.target.email.value;
    const userName = event.target.name.value;
    const review = event.target.message.value;

    fetch("https://assignment-review-server-one.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        servicesId,
        servicesName,
        userName,
        userEmail,
        review,
        time: time,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetch(`https://assignment-review-server-one.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const agreeData = data.filter((dt) => {
          return dt.servicesId === users._id;
        });
        setReviewData(agreeData);
      });
  }, [users._id, reviewData]);

  return (
    <div>
      {/* single service part detalis start */}
      <div className="max-w-lg py-5 my-8 mx-auto p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom"></div>
        <div className="space-y-4">
          <div className="space-y-2">
            <PhotoProvider>
              <PhotoView src={img}>
                <img
                  src={img}
                  alt=""
                  className="block object-cover object-center mx-auto rounded-md h-72 dark:bg-gray-500"
                />
              </PhotoView>
            </PhotoProvider>
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
      {/* single service part detalis End */}
      <div>
        {/* review part start */}
        <div className="w-6/12 mx-auto">
          {reviewData.map((rv) => (
            <div
              className=" shadow-xl my-4 mx-auto px-3 py-5 border  rounded"
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
                <div>
                  <h2 className="ml-5  text-xl">{rv.userName}</h2>
                  <p className="ml-5 flex items-center mr-3 text-xl">
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
                  <h3 className="ml-5  text-xl">{rv.review}</h3>
                  <h3 className="ml-5  text-xl">{rv.time}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* review part End */}

        <form
          onSubmit={handleReview}
          className="  bg-slate-300 my-10 lg:w-2/3 mx-auto p-10"
        >
          <h2 className="text-3xl py-5">Reviews</h2>
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-xl dark:text-gray-400">
              Your Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-xl dark:text-gray-400">
              Your Email*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="rating"
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
            <label htmlFor="email" className="block text-xl dark:text-gray-400">
              Your review *
            </label>
            <textarea
              // onBlur={handleblur}
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
      <div></div>
    </div>
  );
};

export default ServicesDetails;
