import Testimonial from "../components/Testimonial";
import { Footer } from "../components/Footer";
import { CardDefault } from "../components/Card";
import Logos from "../components/Logos";
import Whyus from "../components/Whyus";
import Hero from "../components/Hero";
import Estimater from "../components/Estimator";

const Home = () => {
  return (
    <>
      <div className="sm:mt-20 mt-14">
        <Hero />
        <Estimater />
        <CardDefault />
        <Whyus />
        <Logos />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default Home;
