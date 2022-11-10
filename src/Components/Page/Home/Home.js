import React from 'react';
import UseTitle from '../../Shares/UseTitle/UseTitle';
import Banner from '../Banner/Banner';
import BikeDelivery from '../BikeDelivery/BikeDelivery';
import Delivery from '../Delivery/Delivery';
import Services from '../Services/Services';

const Home = () => {
  UseTitle('Home')
  return (
    <div>
    <Banner></Banner>
    <Services></Services>
    <Delivery></Delivery>
    <BikeDelivery></BikeDelivery>
    </div>
  );
};

export default Home;