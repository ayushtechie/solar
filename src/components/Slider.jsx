import { Slider } from "@material-tailwind/react";
 
export function DefaultSlider() {
  return (
    <div className="w-96 py-4">
      <Slider defaultValue={50} />
    </div>
  );
}