import React from "react";

const slot = 1

const RegistrationButton = () => {
  const handleDaftarClick = () => {
    if ( slot == 1 ) {
      // Allow registration if there are available slots
      window.open("https://bit.ly/CYBERACADEMY2324", '_blank') ;
    } else {
      // Show a pop-up notification if the maximum limit is reached
      window.location.href = "/fullform";
      
    }
  };

  return (
    <button
      onClick={handleDaftarClick}
      className="btn font-bold rounded-xl border border-black"
      style={{
        color:"#231f20",
        fontSmooth:"1px solid",
        backgroundColor: "#f4f4f4",
        boxShadow: "0px 0px 3px 3px rgba(0, 0, 0, 0.7)", // Larger sharp shadow effect
      }}
    >
      {slot == 1 ? "Register" : "Registration Closed"}
    </button>
  );
};

export default RegistrationButton;
