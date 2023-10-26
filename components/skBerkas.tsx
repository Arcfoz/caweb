"use client";
import { useState } from "react";

const Skberkas = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleAccordionClick = (id: number) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };

  return (
    <div className="container h-96" id="skberkas">
      <h1
        className="flex justify-center text-3xl font-viga font-regular mb-20"
        style={{ color: "#231f20" }}
      >
        ❯ Requirement ❮
      </h1>
      <div className="flex h-full flex-row items-center">
        <div
          className="w-1/2 justify-center items-center space-y-7 -mt-3 p-[19px] lg:space-y-10 lg:p-[40px]"
          style={{ backgroundColor: "ba2025" }}
        >
          <h2
            className="text-[21px] font-viga font-regular text-center"
            style={{ color: "#231f20" }}
          >
            Terms and Conditions
          </h2>
          <ol
            className="list-decimal ml-10 space-y-2 mx-auto text-base font-plus-jakarta-sans font-semibold leading-relaxed text-[19px] lg:text-[20px] lg:space-y-4"
            style={{ color: "#231f20" }}
          >
            <li className="">Fear to the One God</li>
            <li className="">An Active Student of Telkom University</li>
            <li className="">Student of FTE and FRI Batch 2021,2022, 2023</li>
            <li className="">Have Motivation and High Spirit in Learning</li>
          </ol>
        </div>
        <div className="w-1/2 ">
          <div className="join join-vertical w-full">
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input
                type="radio"
                name="my-accordion-1"
                onClick={() => handleAccordionClick(1)}
                checked={activeAccordion === 1}
              />
              <div
                className="collapse-title text-[17px] font-viga font-regular"
                style={{ color: "#f4f4f4" }}
              >
                Creative CV
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5 font-plus-jakarta-sans font-semibold">
                  Creative Curriculum Vitae (CV) reflecting your educational
                  background, experience, and skills.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input
                type="radio"
                name="my-accordion-2"
                onClick={() => handleAccordionClick(2)}
                checked={activeAccordion === 2}
              />
              <div
                className="collapse-title text-[17px] font-viga font-regular"
                style={{ color: "#f4f4f4" }}
              >
                Full Body Photo
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5 font-plus-jakarta-sans font-semibold">
                  If wearing a hijab, use a square scarf, and if not, tie your
                  hair neatly.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input
                type="radio"
                name="my-accordion-3"
                onClick={() => handleAccordionClick(3)}
                checked={activeAccordion === 3}
              />
              <div
                className="collapse-title text-[17px] font-viga font-regular"
                style={{ color: "#f4f4f4" }}
              >
                Self Description
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5 font-plus-jakarta-sans font-semibold">
                  Document containing a description of yourself, including
                  hobbies, interests, or other personal aspects you&apos;d like
                  to share.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input
                type="radio"
                name="my-accordion-4"
                onClick={() => handleAccordionClick(4)}
                checked={activeAccordion === 4}
              />
              <div
                className="collapse-title text-[17px] font-viga font-regular"
                style={{ color: "#f4f4f4" }}
              >
                Vision, Mission, and Motivation
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5 font-plus-jakarta-sans font-semibold">
                  Your vision, mission, and motivation for joining the Cyber
                  Academy.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input
                type="radio"
                name="my-accordion-5"
                onClick={() => handleAccordionClick(5)}
                checked={activeAccordion === 5}
              />
              <div
                className="collapse-title text-[17px] font-viga font-regular"
                style={{ color: "#f4f4f4" }}
              >
                Essay
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5 font-plus-jakarta-sans font-semibold">
                  Essay on one of the following topics:
                </p>
                <ol className="list-decimal font-plus-jakarta-sans font-regular text-gray-900 text-2 mt-2 ml-4">
                  <li>Cyber Physical System</li>
                  <li>Embedded System</li>
                  <li>Internet of Things</li>
                  <li>Web Development</li>
                </ol>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skberkas;
