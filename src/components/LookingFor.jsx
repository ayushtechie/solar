import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import SolarImg from '../images/Solar.jpg'
import EPCcontractor from '../images/epcImage.jpg';
import SolarPanelWithSun from '../images/SolarPanelWithSun.jpeg'
import SolarPanelResidential from '../images/SolarPanelResidential.jpeg'
import { Link } from "react-router-dom";

export function LookingFor() {
  return (
    <>
      <h2 className="text-3xl  text-center font-bold pt-4 pb-1 text-blue-900 sm:truncate sm:tracking-tight">
        Looking for
      </h2>
      {/* <div className="flex w-full h-96 mt-4" >
        <div className="flex flex-1 relative justify-center">
          <div className="flex absolute bottom-10 ">
            <h2 className="text-md bg-[#ffffff87] hover:bg-green-700 hover:text-white text-center border rounded-lg py-1 px-6">EPC Contractor</h2>
          </div>
          <img src="https://res.cloudinary.com/dtyhpa19d/image/upload/v1709477330/SolarShopSolutions/The_Best_Solar_Companies_in_California_of_2023_dbehgm.jpg" alt="" width="100%" height="100%"/>
        </div>
        <div className="flex flex-1"></div>
      </div> */}
      <div className="sm:flex gap-4 py-8 pl-10 mr-44">
        <Link to='/epc' className="sm:flex-auto sm:w-3/5">
        <Card className="mt-6 self-center">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src="https://res.cloudinary.com/dtyhpa19d/image/upload/v1709625651/SolarShopSolutions/epcImage.jpg" alt="cardimage" className="h-full w-full"/>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
              EPC Contractor
            </Typography>
            {/* <Typography variant="p" color="blue-gray" className="mb-2 overflow-hidden h-[3em]">
            EPC refers to Engineering, procurement and civil construction. In the solar industry, EPC companies are those who provide a one-stop solution for everything solar. With that, you don’t have to go to multiple vendors to assemble numerous components of a solar plant, EPC providers do that job for you. It is crucial for the successful installation of a solar power plant, especially when it is a large-scale project in MW. Let’s understand what EPC companies do when they undertake an industrial project
            </Typography> */}
          </CardBody>
          {/* <CardFooter className="pt-0">
            <Link to='/epc'>
              <Button>Read More</Button>
            </Link>
          </CardFooter> */}
        </Card>
        </Link>
        <Link to="/solar-panel">
        <Card className="mt-6 sm:w-72">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={SolarPanelWithSun} alt="cardimage" className="h-full w-full"/>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Solar Products
            </Typography>
            {/* <Typography variant="p" color="blue-gray" className="mb-2 overflow-hidden h-[3em]">
            Our solar panels are certified or tested to most reputed International standards such as TUV, UL, IEC, CE, MNRE, Clean Energy Council, etc They have strong mechanical strength and are certified to withstand high wind loads and snow loads while being extremely responsive in low light conditions capturing more sunlight in cloudy conditions ensuring better power generation.  The glass used in these solar panels are having ARC coatings.

We offer solar PV panels in both monocrystalline and polycrystalline technologies in various wattage and cell configurations.  They are based on latest technologies
            </Typography> */}
          </CardBody>
          {/* <CardFooter className="pt-0">
            <Link to='/solar-pannel'>
              <Button>Read More</Button>
            </Link>
          </CardFooter> */}
        </Card>
        </Link>
        <Link to='="/solar-pannel'>
        <Card className="mt-6 sm:w-72">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={SolarImg} alt="cardimage" className="h-full w-full"/>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
              Services
            </Typography>
          </CardBody>
          {/* <CardFooter className="pt-0">
            <Link to='/'>
              <Button>Read More</Button>
            </Link>
          </CardFooter> */}
        </Card>
        </Link>
        {/* <Card className="mt-6 sm:w-72">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={SolarPanelResidential} alt="cardimage" className="h-full w-full"/>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Application
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to='/'>
              <Button>Read More</Button>
            </Link>
          </CardFooter>
        </Card> */}
      </div>
    </>
  );
}
