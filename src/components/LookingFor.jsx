import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import SolarImg from '../images/Solar.jpg'
import EPC from '../images/EPCimage.jpeg'
import SolarPanelWithSun from '../images/SolarPanelWithSun.jpeg'
import SolarPanelResidential from '../images/SolarPanelResidential.jpeg'

export function LookingFor() {
  return (
    <>
      <h2 className="text-xl text-center pt-4 pb-1 font-bold leading-7 text-blue-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Looking for
      </h2>
      <div className="sm:flex justify-evenly py-8">
        <Card className="mt-6 sm:w-72 self-center">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={EPC} alt="cardimage" className="h-full w-full"/>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              EPC Contractor
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 sm:w-72">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={SolarPanelWithSun} alt="cardimage" className="h-full w-full"/>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Solar Products
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
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
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 sm:w-72">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={SolarPanelResidential} alt="cardimage" className="h-full w-full"/>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              House Rooftop
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
