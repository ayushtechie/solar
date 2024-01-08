import Testimonial from "../components/Testimonial";
import { Footer } from "../components/Footer";
import { LookingFor } from "../components/LookingFor";
import Logos from "../components/Logos";
import Whyus from "../components/Whyus";
import Hero from "../components/Hero";
import Estimater from "../components/Estimator";
import { DrawerWithForm } from "../components/DrawerWithForm";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="fixed z-10"><DrawerWithForm/></div>
        <Hero />
        <Estimater />
        <LookingFor />
        <Whyus />
        <Logos />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default Home;
