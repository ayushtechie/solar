import './App.css';

import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';
import { Footer } from './components/Footer';
import { CardDefault } from './components/Card';
import Logos from './components/Logos';
import Estimator from './components/Estimator';
import Whyus from './components/Whyus';

function App() {
  return (
    <>
      <Navigation/>
      <Carousel/>
      <Estimator/>
      <Whyus/>
      <Stats/>
      <CardDefault/>
      <Logos/>
      <Testimonial/>
      <Footer/> 
    </>
  );
}

export default App;
