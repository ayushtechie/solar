// Default theme
import '@splidejs/react-splide/css';

import solar1 from "../images/solar1.jpg";
import solar11 from "../images/solar11.jpg";
import solar111 from "../images/solar111.jpg";

// or only core styles
import '@splidejs/react-splide/css/core';
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Carousel() {
  return (
    <Splide aria-label="My Favorite Images" options={{
        type: 'loop',
        gap: '1rem',
        autoplay: true,
        pauseOnHover: false,
        resetProgress: false,
        height: '90vh',
        }} className='p-0'>
      <SplideSlide>
        <div className="absolute sm:right-60 sm:top-36 text-center">
        <h2 className='font-bold text-5xl'>Save with Solar</h2>
        <p className='font-semibold text-2xl'>now have some fun with your sun</p>

        </div>
        <img src={solar11} alt="Image1" className='h-full w-full' />
      </SplideSlide>
      {/* <SplideSlide>
        <img src={solar111} alt="Image2" className='h-full w-full' />
      </SplideSlide>
      <SplideSlide>
        <img src={solar1} alt="Image2" className='h-full w-full' />
      </SplideSlide> */}
    </Splide>
  );
}
