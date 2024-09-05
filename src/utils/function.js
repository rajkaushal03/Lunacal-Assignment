// functions.js

export const goToNextSlide = (currentSlide, imagesToShow, imagesLength) => {
  return (currentSlide + imagesToShow) % imagesLength;
};

export const goToPrevSlide = (currentSlide, imagesToShow, imagesLength) => {
  return (currentSlide - imagesToShow + imagesLength) % imagesLength;
};

// functions.js
export const handleImageUpload = (event, setImages) => {
  const files = Array.from(event.target.files);
  const newImages = files.map((file) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = (e) => {
        const base64String = e.target.result;
        resolve({
          src: base64String,
          alt: file.name,
          title: file.name,
        });
      };
      reader.readAsDataURL(file);
    });
  });

  Promise.all(newImages).then((resolvedImages) => {
    // Retrieve existing images from local storage
    const existingImages = JSON.parse(localStorage.getItem("images")) || [];
    const updatedImages = [...existingImages, ...resolvedImages];

    // Save updated images to local storage
    localStorage.setItem("images", JSON.stringify(updatedImages));

    // Update state with new images
    setImages(updatedImages);
  });
};

export const handleTabClick = (
  tab,
  setActiveTab,
  setBeforePosition,
  isVertical
) => {
  setActiveTab(tab);

  if (isVertical) {
    // If layout is vertical (column), we move the element on Y-axis
    switch (tab) {
      case "about":
        setBeforePosition(0.06); // First tab position
        break;
      case "experiences":
        setBeforePosition(1); // Second tab position
        break;
      case "Recommended":
        setBeforePosition(2); // Third tab position
        break;
      default:
        setBeforePosition(0);
    }
  } else {
    // If layout is horizontal (row), move on X-axis
    switch (tab) {
      case "about":
        setBeforePosition(0.02); // First tab position
        break;
      case "experiences":
        setBeforePosition(1.05); // Second tab position
        break;
      case "Recommended":
        setBeforePosition(2.07); // Third tab position
        break;
      default:
        setBeforePosition(0);
    }
  }
};

// Function to handle window resize and determine if the layout should be vertical
export const handleResize = (setIsVertical) => {
  if (window.innerWidth <= 1024) {
    setIsVertical(true); // Vertical layout for medium screens
  } else {
    setIsVertical(false); // Horizontal layout for larger screens
  }
};
