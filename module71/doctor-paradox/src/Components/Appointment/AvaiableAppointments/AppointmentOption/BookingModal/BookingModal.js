import React, { useContext } from "react";
import UserContext, {
  AuthContext,
} from "../../../../../Authentication/Context/UserContext";

const BookingModal = ({ treatment, date, setTreatment }) => {
  //   console.log(date);

  const { name, schedule } = treatment;
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    //close modals
    treatment.schedule = "none";
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
          <div class="py-6 px-6 lg:px-8">
            <form class="space-y-6" onSubmit={handleSubmit} action="#">
              <div>
                <label
                  for="schedule"
                  class="block mb-2 text-sm font-medium text-base-content"
                >
                  Your schedule
                </label>
                <input
                  name="treatment"
                  class="bg-base-100 border hidden border-gray-300 text-base-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={name}
                />
                <input
                  name="bookingDate"
                  class="bg-base-100 border hidden border-gray-300 text-base-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={new Date().toDateString()}
                />
                <input
                  type="schedule"
                  name="schedule"
                  id="schedule"
                  class="bg-base-100 border border-gray-300 text-base-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder={schedule}
                  value={schedule}
                  required
                />
                <input
                  type="text"
                  name="scheduledDate"
                  id="date"
                  class="bg-base-100 border border-gray-300 text-base-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder={date}
                  value={`${date.toDateString()}`}
                  required
                />
              </div>
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-base-content "
                >
                  Your name
                </label>
                <input
                  type="name"
                  name="name"
                  defaultValue={user?.displayName}
                  id="name"
                  class="bg-base-100 border border-gray-300 text-base-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Donald trump"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-base-content "
                >
                  Your phone
                </label>
                <input
                  type="phone"
                  name="phone"
                  defaultValue={user?.phoneNumber}
                  id="phone"
                  class="bg-base-100 border border-gray-300 text-base-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="01XXXXXXXXX"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-base-content "
                >
                  Your email
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  name="email"
                  id="email"
                  placeholder="admin@yahoo.com"
                  class="bg-base-100 border border-gray-300 text-base-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>

              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
