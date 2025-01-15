import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function MyAppointments() {
  const { doctors } = useContext(AppContext);
  const [isCancelled, setIsCancelled] = useState([]);
  const handleCancelAppoint=(index)=>{
    setIsCancelled((prev)=>[...prev,index])
  }
  return (
    <div className="mb-20 flex flex-col mt-10">
      <h5 className="text-textColor text-lg font-semibold">
        My Appointments
      </h5>
      <div className="flex flex-col py-5">
        {doctors.slice(0, 3).map((item, index) => (
          <div key={index} className="flex flex-col">
            <p className="w-full h-[1px] bg-gray-300 mb-5"></p>
            <div className="flex gap-5 mb-5">
              <img
                className="max-h-20 sm-max-h-24 md:max-h-28 lg:max-h-32 xl:max-h-36 bg-blue-100 rounded-lg"
                src={item.image}
                alt=""
              />
              <div className="flex flex-col md:flex-row w-full justify-between">
                <div className="flex flex-col">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-textColor mb-1">
                    {item.speciality}
                  </p>
                  <p className="text-sm text-textColor font-semibold">
                    Address:
                  </p>
                  <p className="text-sm text-textColor">{item.address.line1}</p>
                  <p className="text-sm text-textColor mb-1">
                    {item.address.line2}
                  </p>
                  <p className="text-sm text-textColor">
                    <span className="font-semibold">Date & Time:</span> 14 Feb
                    2025 | 10:30 AM
                  </p>
                </div>
                <div className="h-full mt-3">
                  {!isCancelled.includes(index) ? (
                    <div className="flex h-full flex-col justify-end gap-3">
                      <button
                        className={`text-sm border w-32 sm:w-44 border-gray-200 px-5 py-2 rounded-sm hover:bg-primary hover:text-white transition-all ease-in-out duration-500`}
                      >
                        Pay Online
                      </button>
                      <button
                        onClick={() => handleCancelAppoint(index)}
                        className={`text-sm border w-32 sm:w-44 border-gray-200 px-5 py-2 rounded-sm hover:bg-red-600 hover:text-white transition-all ease-in-out duration-500`}
                      >
                        Cancel Appointment
                      </button>
                    </div>
                  ) : (
                    <button
                      className={`text-sm border w-32 sm:w-48 border-red-600 text-red-600 px-5 py-2 rounded-sm `}
                    >
                      Appointment Cancelled
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointments;
