import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableOption from "./AvailableOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import { ThreeCircles } from "react-loader-spinner";

const AvailableAppointments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP")

  const {data: appointmentOptions = [], isLoading, refetch} = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: () => {
      const data = fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
      .then(res => res.json())
      return data
    }
      
  })
  if(isLoading){
    <ThreeCircles
          className="flex justify-center items-center"
          height="100"
          width="100"
          color="black"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            marginTop: '260px'
          }}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        ></ThreeCircles>
  }
 
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
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
