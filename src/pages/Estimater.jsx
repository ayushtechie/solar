import { Footer } from "../components/Footer";
import Estimator from "../components/Estimator";
import { DrawerWithForm } from "../components/DrawerWithForm";
import Calculator from "../components/Calculator";

/////////////////////////////////////////////////
const Estimater = () => {
  return (
    <div className="sm:mt-20 mt-14">
      <div className="fixed z-50"><DrawerWithForm/></div>
      {/* <Estimator /> */}
      <Calculator/>
      <Footer />
    </div>
  );
};

export default Estimater;
