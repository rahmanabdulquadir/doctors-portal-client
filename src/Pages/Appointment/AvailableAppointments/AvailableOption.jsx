import React from "react";
import Button from "../../../components/Button/Button";

const AvailableOption = ({ AvailableOption, setTreatment}) => {
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
        <label
          onClick={() => setTreatment(AvailableOption)}
          htmlFor="booking-modal"
          className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default AvailableOption;
