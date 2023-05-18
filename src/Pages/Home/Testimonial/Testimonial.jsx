import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const Testimonial = () => {
  const reviewData = [
    {
      id: 1,
      name: "Winson Harry",
      location: "California",
      img: people1,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      name: "Winson Harry",
      location: "California",
      img: people2,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      name: "Winson Harry",
      location: "California",
      img: people3,
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className="mt-16">
      <div className="flex justify-between">
        <div>
          <h3 className="text-secondary text-xl font-bold">Testimonial</h3>
          <p className="text-4xl font-semibold">What Our Patients Says</p>
        </div>
        <img className="w-24 lg:w-48" src={quote} alt="" />
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {reviewData.map((data) => (
          <div key={data.id} className="card">
            <div className="card-body text-center shadow-xl">
              <p>{data.description}</p>
              <div className="card-actions flex justify-start items-center mt-4">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={data.img} />
                  </div>
                </div>
                <div className="ml-3">
                  <h2 className="card-title">{data.name}</h2>
                  <p className="font-semibold -ml-14">{data.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
