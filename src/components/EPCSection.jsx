import React from "react";
import EngineeringImg1 from "../images/solar_engineers.svg";
import ProcurementImg from "../images/undraw_process_re_gws7.svg";
import ConstructionImg from "../images/undraw_under_construction_-46-pa.svg";
import cloud from "../images/cloud.svg";

const EPCSection = () => {
  return (
    <div className="flex flex-col gap-x-6 h-[38rem] px-6 pt-28 bg-gradient-to-t from-green-500 to-white-900">
      <div className="flex gap-x-6">
        <div className="flex-1 px-6">
          <div className="flex flex-col">
            <div className="flex">
              <img src={cloud} alt="" />
              <p className="relative landing-7 font-bold -left-12 top-5">1</p>
            </div>
            <h3 className="mt-2 text-2xl leading-7">Engineering</h3>
            <p>
              Run the feasibility test and do the site assessment and selection
              of the technology to be practised for a particular project, and
              check if the site requires any interconnection or not.
            </p>
          </div>
        </div>
        <div className="flex-1 px-6">
          <div className="flex flex-col">
            <div className="flex">
              <img src={cloud} alt="" />
              <p className="relative landing-7 font-bold -left-12 top-5">2</p>
            </div>
            <h3 className="mt-2 text-2xl leading-7">Procurement</h3>
            <p>
              Obtaining required resources for the project like clearance and
              commissioning, equipment selection and installation under a
              specified time frame and budget given by a client.
            </p>
          </div>
        </div>
        <div className="flex-1 px-6">
          <div className="flex flex-col px-4">
            <div className="flex">
              <img src={cloud} alt="" />
              <p className="relative landing-7 font-bold -left-12 top-5">3</p>
            </div>
            <h3 className="mt-2 text-2xl leading-7">Construction</h3>
            <p>
              Supervision and monitoring services, construction related to a
              solar power plant, construction support, project planning and
              operations management, and preparation of a detailed proposal with
              an action plan and budget.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-6">
        <div className="flex-1">
          <img src={EngineeringImg1} alt="" className="h-52" />
        </div>
        <div className="flex-1">
          <img src={ProcurementImg} alt="" className="h-52" />
        </div>
        <div className="flex-1">
          <img src={ConstructionImg} alt="" className="h-52" />
        </div>
      </div>
    </div>
  );
};

export default EPCSection;
