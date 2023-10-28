import { useGlobalContext } from "@/app/context/timeleft";
import Image from "next/image";
import React from "react";

const slot = 1;

const RegistrationButton = () => {
  const { timeleft } = useGlobalContext();

  const timeArray = timeleft.split(":");
  const [hours, minutes, seconds, milliseconds] = timeArray.map(Number);

  const handleDaftarClick = () => {
    if (hours < 0 || minutes < 0 || seconds < 0 || milliseconds < 0) {
      window.location.href = "/fullform";
      // Allow registration if there are available slots
    } else if (timeleft == "") {
    } else {
      // Show a pop-up notification if the maximum limit is reached
      window.open("https://bit.ly/CYBERACADEMY2324", "_blank");
    }
  };

  return (
    <button
      onClick={handleDaftarClick}
      className="btn font-plus-jakarta-sans font-semibold rounded-xl p-2 border border-black"
      style={{
        color: "#231f20",
        fontSmooth: "1px solid",
        backgroundColor: "#f4f4f4",
        boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.7)", // Larger sharp shadow effect
      }}
    >
      {timeleft == "" ? (
        "Loading"
      ) : hours < 0 || minutes < 0 || seconds < 0 || milliseconds < 0 ? (
        "Registration Closed"
      ) : (
        <>
          Register
          <Image src="/paperPlane.png" alt="telegram" className="w-6" width={100} height={100} />
        </>
      )}
    </button>
  );
};

export default RegistrationButton;
