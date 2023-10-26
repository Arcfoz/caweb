"use client";
import React from "react";

const Fullform = () => {
  setTimeout(() => {
    window.location.href = "/";
  }, 9000); // delay 9 sec
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-red-100 to-white-300">
      <div className="overflow-hidden w-full">
        <p
          className="animate-marquee underline underline-offset-8 font-viga font-regular text-[30px] md:text-[50px] lg:text-[85px]"
          style={{ color: "#231f20" }}
        >
          REGISTRATION ARE CLOSED
        </p>
      </div>
    </div>
  );
};

export default Fullform;
