import React, { useEffect, useState, Suspense } from "react";
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
const targetDateWIB = new Date(targetDateUTC.getTime() + 5 * 60 * 60 * 1000);

const Timer = () => {
  const [countdown, setCountdown] = useState<number>(0);
  const { setTimeLeft } = useGlobalContext();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      console.log(targetDateWIB);
      const timeDifference = Math.floor((targetDateWIB.getTime() - Date.now()) / 1000);
      setCountdown(timeDifference > 0 ? timeDifference : 0);
      const { days, hours, minutes, seconds } = calculateTimeRemaining(timeDifference);
      time = `${days}:${hours}:${minutes}:${seconds}`;
      setTimeLeft(time);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [setTimeLeft]);

  const { days, hours, minutes, seconds } = calculateTimeRemaining(countdown);

  const daysstyle = { "--value": days } as React.CSSProperties;
  const hoursstyle = { "--value": hours } as React.CSSProperties;
  const minutesstyle = { "--value": minutes } as React.CSSProperties;
  const secondsstyle = { "--value": seconds } as React.CSSProperties;

  return (
    <div className="flex justify-center items-center mt-8 md:mt-4 lg:mt-4">
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
  );
};

export default Timer;
