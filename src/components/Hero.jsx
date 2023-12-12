import { Typography } from "@material-tailwind/react";

import solarshophero from '../images/solarshophero.jpg'
 
export default function Hero() {
  return (
    <figure className="relative sm:h-[90vh] h-80 w-full">
      <img
        className="h-full w-full rounded-xl "
        src={solarshophero}
        alt="natureimage"
      />
      <figcaption className="text-center absolute sm:top-44 top-10 sm:left-2/3 left-20 sm:w-[calc(50%-10rem)] sm:-translate-x-2/4 rounded-xl border border-white bg-white/75 sm:py-4 py-2 sm:px-6 px-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography color="blue-gray" className="sm:text-3xl text-lg font-bold">
            Save With Solar
          </Typography>
          <Typography color="gray" className="mt-2 font-normal sm:text-xl">
            now have some fun with your sun
          </Typography>
        </div>
      </figcaption>
    </figure>
  );
}