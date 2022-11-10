import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {  Navigate, useLoaderData,} from 'react-router-dom';

const Update = () => {
    const update= useLoaderData()
    const {servicesName}=update

 console.log(update)
    const handleReview = (event) => {

        event.preventDefault();
        const servicesId = update?._id;
        const servicesName = update?.name;
        const userEmail = event.target.email.value;
        const userName = event.target.name.value;
        const review = event.target.message.value;
        const user={ servicesId,servicesName,userName, userEmail,review,}
        fetch(`https://assignment-review-server-one.vercel.app/reviews/${update._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
         if (data.modifiedCount > 0) {
            toast.success('successfull update Review')
         }
         <Navigate to='/reviews'></Navigate>
          });
      };
    


    return (
        <div>
            <h2 className='text-3xl text-center py-3'>Update Review:{servicesName}</h2>
           <form
           onSubmit={handleReview}
          className="  bg-slate-300 my-10 lg:w-2/3 mx-auto p-10"
        >
          <h2 className="text-3xl py-5">Reviews</h2>
          <div className="space-y-1 text-sm">
            <label htmlFor="name"  className="block text-xl dark:text-gray-400">
              Your Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              defaultValue={update.userName}
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
              defaultValue={update.userEmail}
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
              </span>
            </label>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-xl dark:text-gray-400">
              Your review *
            </label>
            <textarea
              name="message"
              placeholder=""
              className="w-full p-3 h-32"
              defaultValue={update.review}
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
    );
};

export default Update;