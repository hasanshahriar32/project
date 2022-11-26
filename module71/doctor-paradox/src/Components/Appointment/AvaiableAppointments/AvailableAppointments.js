import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import React, { useState } from "react";
import { useEffect } from "react";
import AppointmentOption from "./AppointmentOption/AppointmentOption";
import BookingModal from "./AppointmentOption/BookingModal/BookingModal";

const AvailableAppointments = ({ selected, setSelected }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState({});
  // console.log(treatment);
  useEffect(() => {
    fetch("appointmentOption.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  });
  // console.log(selected);
  return (
    <div className="App">
      <h1 className="text-3xl">
        Available Appointments on {format(selected, "PP")}
        <div className="flex justify-evenly flex-wrap gap-6 items-center">
          {appointmentOptions.map((appointmentOption, i) => (
            <AppointmentOption
              key={i}
              appointmentOption={appointmentOption}
              setTreatment={setTreatment}
            ></AppointmentOption>
          ))}
        </div>
        {treatment.schedule != "none" && (
          <BookingModal
            date={selected}
            setTreatment={setTreatment}
            treatment={treatment}
          ></BookingModal>
        )}
      </h1>
    </div>
  );
};

export default AvailableAppointments;
