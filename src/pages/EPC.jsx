import { Typography } from "@material-tailwind/react";
import { Footer } from "../components/Footer";
import { Table } from "../components/Table";
import EpcHero from "../components/EpcHero";

const EPC = () => {
  return (
    <div className="sm:mt-20 mt-14">
      <EpcHero/>
      <div className="lg:w-3/4 lg:mx-auto py-5">
        <Table/>
      </div>
      <Footer />
    </div>
  );
};

export default EPC;
