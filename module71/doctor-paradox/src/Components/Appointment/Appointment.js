import React, { useState } from "react";
import AppointmentBanner from "./AppoinmentBanner/AppointmentBanner";
import AvailableAppointments from "./AvaiableAppointments/AvailableAppointments";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <AvailableAppointments
        selected={selected}
        setSelected={setSelected}
      ></AvailableAppointments>
    </div>
  );
};

export default Appointment;
