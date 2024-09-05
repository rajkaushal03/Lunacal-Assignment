/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { handleTabClick, handleResize } from "../utils/function.js"; // Import the functions

const WidgetOne = ({ activeTab, setActiveTab }) => {
  const [beforePosition, setBeforePosition] = useState(0);
  const [isVertical, setIsVertical] = useState(false); // Track whether tabs are vertical

  // Listen to screen size to check if we need vertical (Y-axis) movement
  useEffect(() => {
    handleResize(setIsVertical); // Set the initial state
    window.addEventListener("resize", () => handleResize(setIsVertical));

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", () => handleResize(setIsVertical));
    };
  }, []);

  return (
    <div className="Box bg-bx-color rounded-3xl p-4 shadow-[9px_8px_8px_0px_#000] relative">
      <div className="absolute text-lg text-white mt-3">
        <FaRegQuestionCircle />
      </div>
      <div className="Bar flex justify-center text-gray-500 items-center text-lg md:flex-wrap lg:flex-nowrap font-medium leading-5 text-center font-poppins rounded-3xl bg-custom-dark  p-2 mt-2.5 mb-2.5 ml-6 mr-6 relative gap-2">
        {/* Moving Before Element */}
        <div
          className="moving-before"
          style={{
            transform: isVertical
              ? `translateY(${beforePosition * 100}%)` // Move vertically in column layout
              : `translateX(${beforePosition * 100}%) `, // Move horizontally in row layout
          }}
        ></div>

        <div
          className={`w-full rounded-2xl p-4 cursor-pointer  ${
            activeTab === "about"
              ? "bg-dark shadow-[0px_0px_40px_5px_#000] transition-all duration-1000 ease-in text-white"
              : "hover-1"
          }`}
          onClick={() =>
            handleTabClick("about", setActiveTab, setBeforePosition, isVertical)
          }
        >
          About me
        </div>

        <div
          className={`w-full rounded-2xl p-4 cursor-pointer  ${
            activeTab === "experiences"
              ? "bg-dark shadow-[0px_0px_40px_5px_#000] transition-all duration-1000 ease-in text-white"
              : "hover-1"
          }`}
          onClick={() =>
            handleTabClick(
              "experiences",
              setActiveTab,
              setBeforePosition,
              isVertical
            )
          }
        >
          Experiences
        </div>

        <div
          className={`w-full rounded-2xl p-4 cursor-pointer  ${
            activeTab === "Recommended"
              ? "bg-dark shadow-[0px_0px_40px_5px_#000] transition-all duration-1000 ease-in text-white"
              : "hover-1"
          }`}
          onClick={() =>
            handleTabClick(
              "Recommended",
              setActiveTab,
              setBeforePosition,
              isVertical
            )
          }
        >
          Recommended
        </div>
      </div>

      <div className="Text mt-8 mb-2.5 ml-6 mr-6">
        <p className="text-gray-500 text-xl sm:text-sm md:tex-md lg:text-lg leading-6">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now.
          <br />
          <br />I was born and raised in Albany, NY & have been living in Santa
          Carla for the past 10 years with my wife Tiffany and my 4-year-old
          twin daughters—Emma and Ella. Both of them are just starting school,
          so my calendar is usually blocked between 9-10 AM. This is a...
        </p>
      </div>
    </div>
  );
};

export default WidgetOne;
