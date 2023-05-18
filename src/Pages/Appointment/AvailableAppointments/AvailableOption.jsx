import React from "react";
import Button from "../../../components/Button/Button";

const AvailableOption = ({ AvailableOption }) => {
  const { name, slots } = AvailableOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>
          {slots.length > 0 ? slots[0] : "No slot available, try another day."}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-end">
          <Button>Book Appointment</Button>
        </div>
      </div>
    </div>
  );
};

export default AvailableOption;
