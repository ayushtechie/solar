import { Typography } from "@material-tailwind/react";
import { Footer } from "../components/Footer";
import { Table } from "../components/Table";

const EPC = () => {
  return (
    <div className="sm:mt-20 mt-14">
      <div className="lg:w-3/4 lg:mx-auto py-5">
      <Typography variant="h5" color="blue-gray" className="mb-2">
              EPC Contractor
            </Typography>
            <Typography variant="p" color="blue-gray" className="mb-2">
            EPC refers to Engineering, procurement and civil construction. In the solar industry, EPC companies are those who provide a one-stop solution for everything solar. With that, you don’t have to go to multiple vendors to assemble numerous components of a solar plant, EPC providers do that job for you. It is crucial for the successful installation of a solar power plant, especially when it is a large-scale project in MW. Let’s understand what EPC companies do when they undertake an industrial project;
            <br /> <span className="font-bold"> Engineering </span> – Run the feasibility test and do the site assessment and selection of the technology to be practised for a particular project, and check if the site requires any interconnection or not.
            <br /> <span className="font-bold">Procurement</span> – Obtaining required resources for the project like clearance and commissioning, equipment selection and installation under a specified time frame and budget given by a client.
            <br /> <span className="font-bold">Construction </span>– Supervision and monitoring services, construction related to a solar power plant, construction support, project planning and operations management, and preparation of a detailed proposal with an action plan and budget.
            <br /> <br />These three components of EPC are essential well-connected pillars of a successful solar power plant. They take care of the complete lifespan of a project. So, industries have to be very careful in choosing the right one, as it will be a long-term partnership of 25 years. The EPCs should be skilled, resourceful, dedicated and professional in their approach.

            </Typography>
        <Table/>
      </div>
      <Footer />
    </div>
  );
};

export default EPC;
