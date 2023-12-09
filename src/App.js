import './App.css';

import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';
import { Footer } from './components/Footer';
import { CardDefault } from './components/Card';
import Logos from './components/Logos';
import Estimator from './components/Estimator';

function App() {
  return (
    <>
      <Navigation/>
      <Carousel/>
      <Estimator/>
      <Stats/>
      <CardDefault/>
      <Logos/>
      <Testimonial/>
      <Footer/> 
    </>
  );
}

export default App;
