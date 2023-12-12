import './App.css';

import Navigation from './components/Navigation';
import Testimonial from './components/Testimonial';
import { Footer } from './components/Footer';
import { CardDefault } from './components/Card';
import Logos from './components/Logos';
import Estimator from './components/Estimator';
import Whyus from './components/Whyus';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <Estimator/>
      <Whyus/>
      <CardDefault/>
      <Logos/>
      <Testimonial/>
      <Footer/> 
    </>
  );
}

export default App;
