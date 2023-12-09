// Default theme
import '@splidejs/react-splide/css';

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
        <img src='solar11.jpg' alt="Image1" className='h-full w-full' />
      </SplideSlide>
      <SplideSlide>
        <img src="solar1.jpg" alt="Image2" className='h-full w-full' />
      </SplideSlide>
    </Splide>
  );
}
