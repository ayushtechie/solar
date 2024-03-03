import { Typography } from "@material-tailwind/react";
import React, { useRef, useEffect } from "react";
import solarshophero from '../../src/images/solarshophero.jpg'


const colors = [solarshophero, solarshophero, solarshophero];
const delay = 3000;

export default function HomeSlideShow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <img
            className="slide"
            key={index}
            
            src={backgroundColor}
          />
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
// }
  // return (
  //   <figure className="relative sm:h-[90vh] h-80 w-full">
  //     <img
  //       className="h-full w-full rounded-xl "
  //       src={solarshophero}
  //       alt="natureimage"
  //     />
  //     <figcaption className="text-center absolute sm:top-44 top-10 sm:left-2/3 left-20 sm:w-[calc(50%-10rem)] sm:-translate-x-2/4 rounded-xl border border-white bg-white/75 sm:py-4 py-2 sm:px-6 px-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
  //       <div>
  //         <Typography color="blue-gray" className="sm:text-3xl text-lg font-bold">
  //           Save With Solar
  //         </Typography>
  //         <Typography color="gray" className="mt-2 font-normal sm:text-xl">
  //           Still paying for your electricity bill ?
  //         </Typography>
  //       </div>
  //     </figcaption>
  //   </figure>
  // );
}




// ReactDOM.render(<Slideshow />, document.getElementById("App"));
