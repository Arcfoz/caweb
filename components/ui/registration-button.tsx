import React from "react";

const slot = 1;

const RegistrationButton = () => {
  const handleDaftarClick = () => {
    if (slot == 1) {
      // Allow registration if there are available slots
      window.open("https://bit.ly/CYBERACADEMY2324", "_blank");
    } else {
      // Show a pop-up notification if the maximum limit is reached
      window.location.href = "/fullform";
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
      {slot == 1 ? (
        <>
          Register
          <img src="./paperPlane.png" alt="telegram" className="w-6" />
        </>
      ) : (
        "Registration Closed"
      )}
    </button>
  );
};

export default RegistrationButton;
