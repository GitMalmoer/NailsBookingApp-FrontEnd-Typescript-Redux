import React from "react";
import { InlineWidget } from "react-calendly";
import "./bookAppointment.css";
import BookingCalendar from "../../Components/BookAppointment/Calendar/BookingCalendar";


function BookAppointment() {
  return (
    <div className="appointmentContainer">
      <div
        className="Appointment col-12 p-5"
        style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <InlineWidget url="https://calendly.com/kkmuk/beautynails" />
      </div>

            <BookingCalendar></BookingCalendar>

      
    </div>
  );
}

export default BookAppointment;
