import { useState } from "react";
import IndiaMap from "react-svgmap-india";
import indicate from "../images/indicate.png";
const Map = () => {
  const [state, setState] = useState("");
  // CSS style to change the color of Uttar Pradesh and Haryana to blue
  const mapStyle = `
    #UP, #HR, #DL {
      fill: #0e83bb !important; /* Blue color */
      stroke: #4f4f4f;
      stroke-width: 1;
    }
    #UP:hover, #HR:hover, #DL:hover {
      fill: #f8a130 !important; /* Hover color */
    }
    .indicator {
      position: absolute;
      top: 50%; /* Adjust as needed */
      left: 50%; /* Adjust as needed */
      transform: translate(-50%, -50%);
    }
  `;
  return (
    <>
      <style>{mapStyle}</style>
      <div className="relative">
        <div className="absolute top-8 right-0">{state}</div>
      </div>
      <div className="group relative ">
            <img
              src={indicate}
              alt=""
              width="60"
              height="60"
              className="absolute top-36 left-56 group-hover:visible"
            />
            <div className="invisible group-hover:visible absolute top-36 left-72 w-64 bg-white rounded-lg p-4">
              <h2 className="text-lg underline">Gurugram</h2>
              <p>
                1024, opposite om bikaner, Maruti Vihar, Maruti Housing Colony,
                Sector 28, Gurugram, Sarhol, Haryana 122001
              </p>
            </div>
          </div>
      <IndiaMap
        onClick={(selectedValue: string) => setState(selectedValue)}
        size="500px"
        mapColor="#cddffc"
        strokeColor="#4f4f4f"
        strokeWidth="1"
        hoverColor="#b6ffba"
        className="m-auto w-full h-[calc(100vh-80px)]"
      >
      </IndiaMap>
    </>
  );
};

export default Map;
