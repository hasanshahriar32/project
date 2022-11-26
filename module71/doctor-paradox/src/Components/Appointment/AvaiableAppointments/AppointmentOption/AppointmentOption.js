import React from "react";
import { useState } from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  //   console.log(appointmentOption);
  const { name, slots } = appointmentOption;

  const [optionSelected, setOptionSelected] = useState("none");
  function setOption(e) {
    // const option = e;
    setOptionSelected(e);
    // return option;
  }
  // console.log(option);

  const sendSchedule = () => {
    const selectedObj = {
      schedule: optionSelected,
      name: appointmentOption.name,
    };
    // console.log(selectedObj);
    setTreatment(selectedObj);
  };
  //   console.log(slots);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-center text-xl">
            {slots.length > 0 ? (
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">
                    Pick the best Suitable Schedule
                  </span>
                  <span className="label-text-alt">Alt label</span>
                </label>
                <select
                  onChange={(event) => setOption(event.target.value)}
                  className="select select-bordered"
                >
                  <option disabled selected>
                    Pick one
                  </option>

                  {slots.map((slot, i) => (
                    <option key={i} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <label className="label">
                  <span className="label-text-alt">Alt label</span>
                  <span className="label-text-alt">Alt label</span>
                </label>
              </div>
            ) : (
              "try another day"
            )}
          </p>
          <p className="text-center text-xl">
            {slots.length > 0
              ? `${slots.length} space(s) available`
              : "no space available"}
          </p>
          <div className="card-actions justify-end">
            <label
              onClick={() => sendSchedule()}
              htmlFor="booking-modal"
              className={
                slots.length > 0 && optionSelected !== "none"
                  ? "btn btn-primary"
                  : "btn hidden btn-primary"
              }
            >
              Book Now!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
