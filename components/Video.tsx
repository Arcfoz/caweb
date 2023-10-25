"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";
import RegistrationButton from "./ui/registration-button";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeRemaining = (countdown: number): Countdown => {
  const days = Math.floor(countdown / (3600 * 24));
  const hours = Math.floor((countdown % (3600 * 24)) / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return { days, hours, minutes, seconds };
};

const targetDateUTC = new Date("2023-10-28T11:59:59Z");
const targetDateWIB = new Date(targetDateUTC.getTime() + 7 * 60 * 60 * 1000);

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [countdown, setCountdown] = useState<number>(
    Math.floor((targetDateWIB.getTime() - Date.now()) / 1000)
  );

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
      console.log(targetDateWIB)
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const { days, hours, minutes, seconds } = calculateTimeRemaining(countdown);

  const daysstyle = { "--value": days } as React.CSSProperties;
  const hoursstyle = { "--value": hours } as React.CSSProperties;
  const minutesstyle = { "--value": minutes } as React.CSSProperties;
  const secondsstyle = { "--value": seconds } as React.CSSProperties;

  return (
    <div>
      <div
        style={{
          width: "60%",
          margin: "2vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        className="hidden lg:block"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
          style={{ width: "100%", borderRadius: "12px" }}
        >
          <source src="/teaser.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        style={{
          width: "82%",
          margin: "2vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        className="lg:hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
          style={{ width: "100%", borderRadius: "12px" }}
        >
          <source src="/teaser.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex justify-center items-center mt-5">
        <div className="rounded-lg p-5">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div
              className="flex flex-col w-18 md:w-24 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box text-neutral-content"
              style={{ background: "#f8cdce", color: "#231f20" }}
            >
              <span className="countdown font-mono text-5xl">
                <Suspense>
                  <span id="counterElement" style={daysstyle}></span>
                </Suspense>
              </span>
              days
            </div>
            <div
              className="flex flex-col w-18 md:w-24 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box text-neutral-content"
              style={{ background: "#f8cdce", color: "#231f20" }}
            >
              <span className="countdown font-mono text-5xl">
                <Suspense>
                  <span id="counterElement" style={hoursstyle}></span>
                </Suspense>
              </span>
              hours
            </div>
            <div
              className="flex flex-col w-18 md:w-24 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box text-neutral-content"
              style={{ background: "#f8cdce", color: "#231f20" }}
            >
              <span className="countdown font-mono text-5xl">
                <Suspense>
                  <span id="counterElement" style={minutesstyle}></span>
                </Suspense>
              </span>
              min
            </div>
            <div
              className="flex flex-col w-18 md:w-24 p-3 gap-3 text-center items-center justify-center font-mono bg-neutral rounded-box text-neutral-content"
              style={{ background: "#f8cdce", color: "#231f20" }}
            >
              <span className="countdown font-mono text-5xl">
                <Suspense>
                  <span id="counterElement" style={secondsstyle}></span>
                </Suspense>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:mt-7">
        <p
          className="text-center text-lg md:text-xl lg:text-2xl"
          style={{ color: "#231f20" }}
        >
          What are you still waiting for?
        </p>
        <p
          className="text-center text-lg md:text-xl lg:text-2xl mb-5"
          style={{ color: "#231f20" }}
        >
          Start Your Journey Now!
        </p>
        <div className="lg:scale-150 lg:mt-5">
        <RegistrationButton />

        </div>
      </div>
    </div>
  );
};

export default Video;
