import { Typography } from "@material-tailwind/react";
import { Footer } from "../components/Footer";
import { Table } from "../components/Table";
import EpcHero from "../components/EpcHero";
import { DrawerWithForm } from "../components/DrawerWithForm";

const EPC = () => {
  return (
    <div>
      {/* <div className="fixed z-50"><DrawerWithForm/></div> */}
      <EpcHero/>
      <div className="lg:w-11/12 lg:mx-auto py-5">
        <Table/>
      </div>
      <div className="mx-auto max-w-4xl lg:text-center">
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These three components of EPC are essential well-connected pillars
            of a successful solar power plant. They take care of the complete
            lifespan of a project. So, industries have to be very careful in
            choosing the right one, as it will be a long-term partnership of 25
            years. The EPCs should be skilled, resourceful, dedicated and
            professional in their approach.
          </p>
        </div>
      <Footer />
    </div>
  );
};

export default EPC;
