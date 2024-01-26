import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import EPCheroImage from "../images/EPChero.jpg";
import EngineeringImg1 from "../images/solar_engineers.svg";
import EPCSection from "./EPCSection";

const features = [
  {
    name: "Engineering",
    description:
      "Run the feasibility test and do the site assessment and selection of the technology to be practised for a particular project, and check if the site requires any interconnection or not.",
    icon: EngineeringImg1,
  },
  {
    name: "Procurement",
    description:
      "Obtaining required resources for the project like clearance and commissioning, equipment selection and installation under a specified time frame and budget given by a client.",
    icon: LockClosedIcon,
  },
  {
    name: "Construction",
    description:
      "Supervision and monitoring services, construction related to a solar power plant, construction support, project planning and operations management, and preparation of a detailed proposal with an action plan and budget.",
    icon: ArrowPathIcon,
  },
];

export default function EpcHero() {
  return (
    <div className="bg-white">
      <div className="">
        <div className="flex items-center lg:text-center">
          <div className="w-7/12 bg-green-400 ">
            <img src={EPCheroImage} alt="" className="opacity-50 " />
          </div>
          <div className="w-5/12">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              EPC Contractor
            </p>
            <p className="mt-6 px-10 text-left text-xl leading-8 text-gray-600">
              EPC refers to Engineering, procurement and civil construction. In
              the solar industry, EPC companies are those who provide a one-stop
              solution for everything solar. With that, you don’t have to go to
              multiple vendors to assemble numerous components of a solar plant,
              EPC providers do that job for you. It is crucial for the
              successful installation of a solar power plant, especially when it
              is a large-scale project in MW.
            </p>
          </div>
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">E P C</h2> */}
        </div>
        <EPCSection/>
        {/* <div className="mt-16 sm:mt-20 lg:mt-24">
          <dl className="flex flex-col max-w-xl gap-x-8 gap-y-10 lg:max-w-none lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative odd:bg-gray-100  pl-16 lg:p-0"
              >
                <dt className="flex gap-x-4 text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute lg:relative left-0 top-0 flex h-50 w-6/12 items-center justify-center rounded-lg ">
                    <img
                      src={feature.icon}
                      alt=""
                      className="odd:text-right h-full w-full text-white"
                      aria-hidden="true"
                    />
                    
                  </div>

                  <div className="w-6/12">
                    <dd className="mt-2 text-2xl leading-7 text-gray-600">
                      {feature.name}
                    </dd>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                </dt>
              </div>
            ))}
          </dl>
        </div> */}
        
      </div>
    </div>
  );
}
