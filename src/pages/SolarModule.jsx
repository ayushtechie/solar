import React from "react";
import ControlPanel from "../images/undraw_control_panel_re_y3ar (1).svg";
import SolarPanelModuleImg from "../images/solarpanelmodule.png";
import ProductCard from "../components/ProductCard";
import { MultiLevelSidebar } from "../components/Sidebar";

const SolarModule = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="flex-1">
          <img src={SolarPanelModuleImg} alt="" className="h-80 mx-auto pt-2" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col w-8/12 mx-auto">
            <h1 className="text-2xl mb-4 font-bold text-center">
              Lorem, ipsum.
            </h1>
            <p className="px-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptas, fugit! Dolore illum fuga, culpa repudiandae nulla
              corrupti provident dolores doloribus.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Velit accusamus dolor possimus
              quos!
            </p>
          </div>
        </div>
      </div>

      <div className="flex p-6 gap-x-4">
        <div className="w-3/12">
          <MultiLevelSidebar/>
        </div>
        <div className="flex flex-wrap  gap-4 w-9/12">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        
        </div>
      </div>
    </>
  );
};

export default SolarModule;
