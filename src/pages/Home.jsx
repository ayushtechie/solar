import Testimonial from "../components/Testimonial";
import { Footer } from "../components/Footer";
import { LookingFor } from "../components/LookingFor";
import Logos from "../components/Logos";
import Whyus from "../components/Whyus";
import Hero from "../components/Hero";
import FixedIconWithDialog from "../components/FixedIconWithDialog";
import Calculator from "../components/Calculator";
import HelpButton from "../components/NeedHelp";

const Home = () => {
  return (
    <>
      <div className="">
      <FixedIconWithDialog/>
        <Hero />
        <Calculator/>
        {/* <Estimater /> */}
        <LookingFor />
        <HelpButton />
        <Whyus />
        <Logos />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default Home;
