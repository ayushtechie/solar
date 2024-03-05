import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import SolarImg from "../images/Solar.jpg";
import EPCcontractor from "../images/epcImage.jpg";
import SolarPanelWithSun from "../images/SolarPanelWithSun.jpeg";
import SolarPanelResidential from "../images/SolarPanelResidential.jpeg";
import { Link } from "react-router-dom";

export function LookingFor() {
  return (
    <>
      <h2 className="text-3xl  text-center font-bold pt-4 pb-1 text-blue-900 sm:truncate sm:tracking-tight">
        Looking for
      </h2>

      <div className="sm:flex gap-4 py-8 pl-10 mr-44">
        <Link to="/epc" className="sm:flex-1">
          <Card className="mt-6 self-center">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://res.cloudinary.com/dtyhpa19d/image/upload/v1709625651/SolarShopSolutions/epcImage.jpg"
                alt="cardimage"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-center"
              >
                EPC Contractor
              </Typography>
            </CardBody>
          </Card>
        </Link>

        <Link to='="/servies' className="sm:flex-1">
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={SolarImg} alt="cardimage" className="h-full w-full" />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-center"
              >
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
