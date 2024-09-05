/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft, FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlinePlusSm } from "react-icons/hi";
import ImageCard from "../components/ImageCard";
import {
  goToNextSlide,
  goToPrevSlide,
  handleImageUpload,
} from "../utils/function.js";

const WidgetTwo = ({ activeTab, setActiveTab }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);
  const imagesToShow = 1;

  useEffect(() => {
    // Load images from local storage when component mounts
    const storedImages = JSON.parse(localStorage.getItem("images")) || [];
    setImages(storedImages);
  }, []);
  return (
    <div className="Box bg-bx-color rounded-3xl p-4  shadow-[9px_8px_8px_0px_#000]">
        {/* question mark */}
      <div className="absolute text-lg  text-white  mt-3">
        <FaRegQuestionCircle />
      </div>

      <div className="flex justify-between  items-center mt-2.5 mb-2.5 ml-6 mr-6 gap-4">
        {/* gallery button */}
        <div className="bg-custom-dark   text-center rounded-3xl p-1">
          <button
            className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-sm md:text-md lg:text-lg text-white bg-transparent border-none cursor-pointer  ${
              activeTab === "Gallery"
                ? "bg-dark shadow-[0px_0px_40px_5px_#000] transition-all hover:bg-transparent duration-7000 rounded-2xl ease-in "
                : " hover:bg-dark transition-all ease-in duration-1000 rounded-2xl hover-1"
            }`}
            onClick={() => setActiveTab("Gallery")}
          >
            Gallery
          </button>
        </div>
        {/* about and arrow key  */}
        <div className="flex justify-center items-center gap-4">
          <label
            className="flex items-center bg-dark text-wrap text-xs md:text-sm lg:text-lg justify-center text-white  rounded-2xl p-3 transition-all duration-100 ease-in 
            hover:shadow-[5px_5px_20px_3px_#000,0px_0px_8px_0px_#ffff] hover:bg-transparent cursor-pointer"
            htmlFor="file-input"
          >
            <HiOutlinePlusSm /> ADD IMAGE
            <input
              id="file-input"
              type="file"
              multiple
              accept="image/*"
              onChange={(event) => handleImageUpload(event, setImages)}
              className="hidden"
            />
          </label>
          <div className="flex justify-center items-center gap-2 ">
            <div
              className="md:text-md lg:text-lg arrow"
              onClick={() => {
                setCurrentSlide(
                  goToPrevSlide(currentSlide, imagesToShow, images.length)
                );
                // console.log("prev")
                // console.log("current slide",currentSlide);
                // console.log("imagetoshow",imagesToShow);
                // console.log("images.length", images.length);
              }}
            >
              <FaArrowLeft />
            </div>
            <div
              className="md:text-md lg:text-lg arrow"
              onClick={() => {
                setCurrentSlide(
                  goToNextSlide(currentSlide, imagesToShow, images.length)
                );
                // console.log("next")
                // console.log("current slide",currentSlide);
                // console.log("imagetoshow",imagesToShow);
                // console.log("images.length", images.length);
              }}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* image sec */}
      <div className="Image  p-1 mt-5 mb-2.5 ml-6 mr-6 overflow-hidden">
        <div
          className="carousel-inner flex gap-14 justify-around  p-3"
          style={{
            transform: `translateX(-${(currentSlide * 100) / imagesToShow}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <ImageCard
              key={index}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetTwo;
