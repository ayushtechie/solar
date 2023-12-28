import { Typography } from "@material-tailwind/react";
import { Footer } from "../components/Footer";

const SolarProducts = () => {
  return (
    <div className="sm:mt-20 mt-14">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Solar Pannel
            </Typography>
            <Typography variant="p" color="blue-gray" className="mb-2">
            Solar Pannel

Our solar panels are certified or tested to most reputed International standards such as TUV, UL, IEC, CE, MNRE, Clean Energy Council, etc They have strong mechanical strength and are certified to withstand high wind loads and snow loads while being extremely responsive in low light conditions capturing more sunlight in cloudy conditions ensuring better power generation.  The glass used in these solar panels are having ARC coatings.

We offer solar PV panels in both monocrystalline and polycrystalline technologies in various wattage and cell configurations.  They are based on latest technologies
            </Typography>
      <Footer />
    </div>
  );
};

export default SolarProducts;
