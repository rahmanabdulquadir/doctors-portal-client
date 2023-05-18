import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableOption from "./AvailableOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div className="mt-12">
      <div>
        <h3 className="text-xl text-secondary text-center font-bold">
          Available appointments on: {format(selectedDate, "PP")}
        </h3>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {appointmentOptions.map((option) => (
          <AvailableOption
            key={option._id}
            AvailableOption={option}
          ></AvailableOption>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
