import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBookingModal = (event) => {
    event.preventDefault();
    const {name} = treatment;
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment : name,
      patient: patientName,
      slot,
      email, 
      phone
    }
    setTreatment(null)
    console.log(booking)
  }
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
          <form onSubmit={handleBookingModal} className="grid grid-cols-1 gap-3 mt-7">
            <input
              type="text"
              name="date"
              disabled
              value={date}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              <option disabled selected>
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
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone number"
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
