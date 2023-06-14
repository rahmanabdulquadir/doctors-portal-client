import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatmentName, slots } = treatment;
  const{user} = useContext(AuthContext)
  const date = format(selectedDate, "PP");

  const handleBookingModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed");
          refetch()
        }
        else{
          setTreatment(null)
          toast.error(`${data.message}`);
        }
      }); 
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBookingModal}
            className="grid grid-cols-1 gap-3 mt-7"
          >
            <input
              type="text"
              name="date"
              disabled
              value={date}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              <option disabled defaultValue={'Select your slot'}>
                Select your slot
              </option>
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              defaultValue={user?.displayName}
              disabled
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              disabled
              defaultValue={user?.email}
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone number"
              required
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              value="SUBMIT"
              className="btn btn-accent input input-bordered w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
