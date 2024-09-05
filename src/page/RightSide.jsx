import { useState } from "react";
import WidgetOne from "../components/WidgetOne.jsx";
import WidgetTwo from "../components/WidgetTwo.jsx";

const RightSide = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex-col  ">
      <WidgetOne activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="w-1/2 h-1 rounded-md mx-auto mt-8 mb-8 line shadow-[9px_8px_8px_0px_#000]"></div>

      <WidgetTwo  />
      <div className="w-1/2 h-1 bg-white rounded-md mx-auto mt-4 line shadow-[9px_8px_8px_0px_#000]"></div>
    </div>
  );
};

export default RightSide;
