import React from "react";
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import Button from "../../../components/Button/Button";

const Doctor = () => {
  return (
    <section style={{background:`url(${appointment})`}} className="mt-32"> 
      <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctor}
          className="lg:w-1/2 hidden lg:block rounded-lg -mt-32 -mb-4"
        />
        <div>
          <h3 className="text-xl text-secondary font-bold">Appointment</h3>
          <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
         <Button>Get Started</Button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Doctor;
