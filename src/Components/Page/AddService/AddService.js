import React from "react";
import UseTitle from "../../Shares/UseTitle/UseTitle";
// name, img, price, ratings, delivery, description

const AddService = () => {
  UseTitle('Add Services')
  const handleAddService = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const img = event.target.img.value;
    const price = event.target.price.value;
    const ratings = event.target.ratings.value;
    const delivery = event.target.delivery.value;
    const description = event.target.description.value;
    console.log(name, img, price, ratings, delivery, description);


    fetch("https://assignment-review-server-one.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        img,
        price,
        ratings,
        delivery,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="my-30">
      <form
        onSubmit={handleAddService}
        className="  bg-slate-300 my-10 lg:w-2/3 mx-auto p-10"
      >
        <h2 className="text-3xl py-5">Add Service</h2>
        <div className="space-y-1 text-sm py-3">
          <label
            html
            htmlFor="serviceName"
            className="block text-xl dark:text-gray-400"
          >
            Your Product Name*
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Product Name"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="price" className="block text-xl dark:text-gray-400">
            Your Service Price*
          </label>
          <input
            type="text"
            name="price"
            placeholder="Your Service price"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm py-3">
          <label htmlFor="ratings" className="block text-xl dark:text-gray-400">
            Your Service Rating*
          </label>
          <input
            type="text"
            name="ratings"
            placeholder="Your Service Rating"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="delivery"
            className="block text-xl dark:text-gray-400"
          >
            Service Delivery Time*
          </label>
          <input
            type="text"
            name="delivery"
            placeholder="Your Service delivery"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm my-3 py-3">
          <label htmlFor="img" className="block text-xl dark:text-gray-400">
            Your Service Image *
          </label>
          <input
            type="text"
            name="img"
            placeholder="Enter Your ImageURL"
            className="w-full px-4 text-lg py-3 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="description"
            className="block text-xl dark:text-gray-400"
          >
            Your Description Service*
          </label>
          <textarea
            name="description"
            placeholder="Enter Your service description "
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
  );
};

export default AddService;
