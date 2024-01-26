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
          <img src={SolarPanelModuleImg} alt="" className="h-80 mx-auto" />
        </div>
        <div className="w-8/12">
          <div className="flex flex-col">
            <h1 className="text-2xl mb-4 font-bold text-center">
              Solar Modules
            </h1>
            <p className="px-4">
              Our solar panels are certified or tested to most
              reputed International standards such as TUV, UL, IEC, CE, MNRE,
              Clean Energy Council, etc They have strong mechanical strength and
              are certified to withstand high wind loads and snow loads while
              being extremely responsive in low light conditions capturing more
              sunlight in cloudy conditions ensuring better power generation.
              The glass used in these solar panels are having ARC coatings. We
              offer solar PV panels in both mono crystalline and polycrystalline
              technologies in various wattage and cell configurations. They are
              based on latest technologies
            </p>
          </div>
        </div>
      </div>

      <div className="flex p-6 gap-x-4">
        <div className="w-3/12">
          <MultiLevelSidebar />
        </div>
        <div className="flex flex-wrap  gap-4 w-9/12">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default SolarModule;
