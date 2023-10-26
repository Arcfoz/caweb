"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";
import RegistrationButton from "./ui/registration-button";
import { useGlobalContext } from "@/app/context/timeleft";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

var time = "";

const calculateTimeRemaining = (countdown: number): Countdown => {
  const days = Math.floor(countdown / (3600 * 24));
  const hours = Math.floor((countdown % (3600 * 24)) / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return { days, hours, minutes, seconds };
};

const targetDateUTC = new Date("2023-10-29T11:59:59Z");
const options = { timeZone: "Asia/Jakarta" };
const targetDateWIB = new Date(targetDateUTC.toLocaleString("en-US", options));

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [countdown, setCountdown] = useState<number>(Math.floor((targetDateWIB.getTime() - Date.now()) / 1000));
  const { setTimeLeft } = useGlobalContext();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = prevCountdown > 0 ? prevCountdown - 1 : 0;
        const countdownDate = new Date(newCountdown * 1000);
        const days = Math.floor(newCountdown / (3600 * 24));
        const hours = String(countdownDate.getUTCHours()).padStart(2, "0");
        const minutes = String(countdownDate.getUTCMinutes()).padStart(2, "0");
        const seconds = String(countdownDate.getUTCSeconds()).padStart(2, "0");
        time = `${days}:${hours}:${minutes}:${seconds}`;
        setTimeLeft(time);
        return newCountdown;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const { days, hours, minutes, seconds } = calculateTimeRemaining(countdown);

  const daysstyle = { "--value": days } as React.CSSProperties;
  const hoursstyle = { "--value": hours } as React.CSSProperties;
  const minutesstyle = { "--value": minutes } as React.CSSProperties;
  const secondsstyle = { "--value": seconds } as React.CSSProperties;

  return (
    <div className="mt-5 md:mt-7">
      <div
        style={{
          width: "57%",
          margin: "2vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        className="hidden lg:block"
      >
        <video autoPlay loop muted playsInline ref={videoRef} style={{ width: "100%", borderRadius: "12px" }}>
          <source src="/teaser.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        style={{
          width: "89%",
          margin: "2vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        className="hidden md:block lg:hidden"
      >
        <video autoPlay loop muted playsInline ref={videoRef} style={{ width: "100%", borderRadius: "12px" }}>
          <source src="/teaser.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        style={{
          width: "85%",
          margin: "2vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        className="md:hidden"
      >
        <video autoPlay loop muted playsInline ref={videoRef} style={{ width: "100%", borderRadius: "12px" }}>
          <source src="/teaser.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex justify-center items-center mt-8 md:mt-4 lg:mt-3">
        <div className="rounded-lg p-5">
          <div className="grid grid-flow-col gap-5 md:gap-10 font-viga font-bold text-center auto-cols-max">
            <div
              className="flex flex-col w-14 md:w-24 p-3 gap-2 md:gap-5 lg:gap-4 text-[13px] md:text-[16.5px] lg:text-[18px] font-viga font-regular text-center items-center justify-center bg-neutral rounded-xl border border-black text-neutral-content"
              style={{
                color: "#231f20",
                fontSmooth: "1px solid",
                backgroundColor: "#f4f4f4",
                boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.4)", // Larger sharp shadow effect
              }}
            >
              <span className="countdown text-2xl font-mono md:text-4xl lg:text-5xl">
                <Suspense>
                  <span id="counterElement" style={daysstyle}></span>
                </Suspense>
              </span>
              DAYS
            </div>
            <div
              className="flex flex-col w-14 md:w-24 p-3 gap-2 md:gap-5 lg:gap-4 text-[13px] md:text-[16.5px] lg:text-[18px] font-viga font-regular text-center items-center justify-center bg-neutral rounded-xl border border-black text-neutral-content"
              style={{
                color: "#231f20",
                fontSmooth: "1px solid",
                backgroundColor: "#f4f4f4",
                boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.4)", // Larger sharp shadow effect
              }}
            >
              <span className="countdown text-2xl font-mono md:text-4xl lg:text-5xl">
                <Suspense>
                  <span id="counterElement" style={hoursstyle}></span>
                </Suspense>
              </span>
              HOURS
            </div>
            <div
              className="flex flex-col w-14 md:w-24 p-3 gap-2 md:gap-5 lg:gap-4 text-[13px] md:text-[16.5px] lg:text-[18px] font-viga font-regular text-center items-center justify-center bg-neutral rounded-xl border border-black text-neutral-content"
              style={{
                color: "#231f20",
                fontSmooth: "1px solid",
                backgroundColor: "#f4f4f4",
                boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.4)", // Larger sharp shadow effect
              }}
            >
              <span className="countdown text-2xl font-mono md:text-4xl lg:text-5xl">
                <Suspense>
                  <span id="counterElement" style={minutesstyle}></span>
                </Suspense>
              </span>
              MIN
            </div>
            <div
              className="flex flex-col w-14 md:w-24 p-3 gap-2 md:gap-5 lg:gap-4 text-[13px] md:text-[16.5px] lg:text-[18px] font-viga font-regular text-center items-center justify-center bg-neutral rounded-xl border border-black text-neutral-content"
              style={{
                color: "#231f20",
                fontSmooth: "1px solid",
                backgroundColor: "#f4f4f4",
                boxShadow: "0px 0px 4px 2px rgba(0, 0, 0, 0.4)", // Larger sharp shadow effect
              }}
            >
              <span className="countdown text-2xl font-mono md:text-4xl lg:text-5xl">
                <Suspense>
                  <span id="counterElement" style={secondsstyle}></span>
                </Suspense>
              </span>
              SEC
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center  mt-5">
        <p className="font-regular text-center font-viga text-lg md:text-2xl lg:text-2xl" style={{ color: "#231f20" }}>
          What are you still waiting for?
        </p>
        <p className="font-regular text-center font-viga text-lg md:text-2xl lg:text-2xl mb-5" style={{ color: "#231f20" }}>
          Start Your Journey Now!
        </p>
        <div className="mt-5 md:scale-125 lg:scale-150 lg:mt-8">
          <RegistrationButton />
        </div>
      </div>
    </div>
  );
};

export default Video;
