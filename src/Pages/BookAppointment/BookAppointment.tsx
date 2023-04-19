import React from "react";
import { InlineWidget } from "react-calendly";

function BookAppointment() {
  return (
    <div>
      <div className="Appointment col-12">
        <InlineWidget url="https://calendly.com/kkmuk/beautynails" />
      </div>
    </div>
  );
}

export default BookAppointment;
