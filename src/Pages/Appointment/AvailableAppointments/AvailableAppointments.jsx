import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableOption from "./AvailableOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

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
            setTreatment={setTreatment}
          ></AvailableOption>
        ))}
      </div>
      {treatment && <BookingModal selectedDate={selectedDate} treatment={treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
