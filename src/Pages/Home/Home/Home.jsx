import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import DentalCare from '../DentalCare/DentalCare';
import Doctor from '../Doctor/Doctor';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DentalCare></DentalCare>
      <Doctor></Doctor>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;