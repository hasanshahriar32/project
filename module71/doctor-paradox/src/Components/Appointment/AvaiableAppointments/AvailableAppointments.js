import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selected, setSelected }) => {
  return (
    <div className="App">
      <h1 className="text-3xl">
        Available Appointments on {format(selected, "PP")}
      </h1>
    </div>
  );
};

export default AvailableAppointments;
