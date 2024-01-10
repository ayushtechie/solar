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
      <h2 className="text-xl text-center pt-4 pb-1 font-bold leading-7 text-blue-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Looking for
      </h2>
      <div className="sm:flex justify-evenly py-8">
        <Card className="mt-6 sm:w-72 self-center">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={EPCcontractor} alt="cardimage" className="h-full w-full"/>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
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
        <Card className="mt-6 sm:w-72">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={SolarImg} alt="cardimage" className="h-full w-full"/>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Services
            </Typography>
          </CardBody>
          {/* <CardFooter className="pt-0">
            <Link to='/'>
              <Button>Read More</Button>
            </Link>
          </CardFooter> */}
        </Card>
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
