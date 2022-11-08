import React from "react";
import img1 from "../../../Images/feature_icon.svg";
import img2 from "../../../Images/feature_icon22.svg";
import img3 from "../../../Images/feature_icon3.svg";

const Delivery = () => {
  return (
    <div className="py-8 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid:cols-2">
      <div className="text-center">
        <img className="mx-auto" src={img1} alt="" />
        <h2 className="text-4xl font-medium pt-2">Easy to order</h2>
        <p className="py-4 text-base ">
          Hungry? Your are in the Right place Imagine <br/> devouring delicious,
          healthy meals daily  <br/>without so much as lifting a pot for your every
          day life.
        </p>
      </div>
      <div className="text-center">
        <img className="mx-auto" src={img2} alt="" />
        <h2 className="text-4xl font-medium pt-2">Best Food Quality</h2>
        <p className="py-4 text-base ">
          Hungry? Your are in the Right place Imagine <br/> devouring delicious,
          healthy meals daily  <br/>without so much as lifting a pot for your every
          day life.
        </p>
      </div>
      <div className="text-center mx-auto">
        <img className="mx-auto" src={img3} alt="" />
        <h2 className="text-4xl font-medium pt-2">Fastest Delivery</h2>
        <p className="py-4 text-base">
          Hungry? Your are in the Right place Imagine <br/> devouring delicious,
          healthy meals daily  <br/>without so much as lifting a pot for your every
          day life.
        </p>
      </div>
    </div>
  );
};

export default Delivery;
