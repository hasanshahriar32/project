import React from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({ selected, setSelected }) => {
  //   console.log(selected);

  return (
    <div>
      <div>
        <div className="hero bg-gradient-to-l min-h-screen  from-base-content bg-base-200">
          <div className="hero-content justify-evenly items-center w-full gap-6 flex-col lg:flex-row-reverse">
            <img
              src="https://placeimg.com/260/400/tech"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Get an Appointment!</h1>
              <DayPicker
                mode="single"
                selected={selected}
                // disable selecting days before today
                // disabledDays={{ before: new Date() }}
                // disable selecting days after today + 30 days
                modifiers={{
                  disabled: [
                    {
                      after: new Date(
                        new Date().setDate(new Date().getDate() + 6)
                      ),
                      before: new Date(
                        new Date().setDate(new Date().getDate() - 0)
                      ),
                      // color the disabled days
                      className: "bg-red-500",
                    },
                  ],
                }}
                onDayClick={(day) => {
                  setSelected(day);
                  console.log(day);
                }}
                // onDayClick={setSelected}
              />
              {/* <p className="text-lg">{selected.toLocaleDateString()}</p>; */}
              <div className="flex justify-between ">
                {/* <p className="text-lg">{format(selected, "dd/MM/yyyy")}</p> */}
                {/* <p>You picked {format(selected, "PP")}.</p>; */}
                <button
                  className="btn btn-ghost"
                  onClick={() => setSelected(new Date())}
                >
                  📆
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
