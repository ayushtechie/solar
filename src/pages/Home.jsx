import Testimonial from "../components/Testimonial";
import { Footer } from "../components/Footer";
import { LookingFor } from "../components/LookingFor";
import Logos from "../components/Logos";
import Whyus from "../components/Whyus";
import HomeSlideShow from "../components/HomeSlideShow";
import FixedIconWithDialog from "../components/FixedIconWithDialog";
import Calculator from "../components/Calculator";
import HelpButton from "../components/NeedHelp";
import CustomizedDialogs from "../components/InformationDialog"

const Home = () => {
  return (
    <>
      <div className="home-container">
        <FixedIconWithDialog/>
        <HomeSlideShow />
        <CustomizedDialogs/>
        <Calculator/>
        {/* <Estimater /> */}
        <LookingFor />
        {/* <HelpButton /> */}
        <Whyus />
        <Logos />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default Home;
