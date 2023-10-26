"use client";
import { useState } from "react";

const Berkas = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleAccordionClick = (id: number) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };

  return (
    <div className="container p-2" id="berkas">
      <div className="text-center mb-8"></div>
      <div className="join join-vertical">
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
              If wearing a hijab, use a square scarf, and if not, tie your hair
              neatly.
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
              Document containing a description of yourself, including hobbies,
              interests, or other personal aspects you&apos;d like to share.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berkas;
