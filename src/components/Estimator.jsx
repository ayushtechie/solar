import { useState } from "react";
import { Button } from "@material-tailwind/react";

const pincodeMapping = {
    "201301": "Noida",
    "110001": "Delhi",
    // Add more pin codes and corresponding names as needed
  };

export default function Estimator() {
  const [selectedConnectionType, setSelectedConnectionType] =
    useState("residential");

  const [pincode, setPincode] = useState("");
  const [bill, setBill] = useState("");
  const [roofArea, setRoofArea] = useState("");

  const [calculatedSize, setCalculatedSize] = useState(null);

  const handleConnectionTypeClick = (type) => {
    setSelectedConnectionType(type);
  };

  const handleDesignForm = (e) => {
    e.preventDefault();

    const pincodeNumber = parseInt(pincode, 10) || 0;
    const billNumber = parseInt(bill, 10) || 0;
    const roofareaNumber = parseInt(roofArea, 10) || 0;

    const calculatedPower = pincodeNumber + billNumber + roofareaNumber;

    setCalculatedSize(calculatedPower);

    console.log("calculatedPower: ", calculatedPower);
  };

  return (
    <>
      <form className="flex flex-col py-12 justify-evenly items-stretch max-w-screen-md mx-auto ">
        <p className="text-center text-2xl font-bold py-2">
          Design your system
        </p>
        <div className="flex w-full flex-wrap my-5">
          {/* Residential Connection Type */}
          <div
            className={`conn-type flex flex-col sm:flex-row w-1/3 px-3 py-2 justify-center items-center cursor-pointer ${
              selectedConnectionType === "residential"
                ? "border-2 rounded border-b-transparent border-blue-700 -mb-0.5 z-10 bg-white"
                : ""
            }`}
            onClick={() => handleConnectionTypeClick("residential")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-green-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <p className="font-bold text-xl text-blue-700">Residential</p>
          </div>

          {/* Commercial Connection Type */}
          <div
            className={`conn-type flex flex-col sm:flex-row w-1/3 px-3 py-2 justify-center items-center cursor-pointer ${
              selectedConnectionType === "commercial"
                ? "border-2 rounded border-b-transparent border-blue-700 -mb-0.5 z-10 bg-white"
                : ""
            }`}
            onClick={() => handleConnectionTypeClick("commercial")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-green-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              />
            </svg>
            <p className="font-bold text-xl text-blue-700">Commercial</p>
          </div>

          {/* Society Connection Type */}
          <div className={`conn-type flex flex-col sm:flex-row w-1/3 px-3 py-2 justify-center items-center cursor-pointer ${
              selectedConnectionType === "society"
                ? "border-2 rounded border-b-transparent border-blue-700 -mb-0.5 z-10 bg-white"
                : ""
            }`}
            onClick={() => handleConnectionTypeClick("society")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-green-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
            <p className="font-bold text-xl text-blue-700">Society</p>
          </div>

          <div className="sm:flex flex-row w-full py-5 px-3 border-2 rounded border-blue-700">
            <div className="flex-auto sm:w-4/12">
              <label htmlFor="pincode" className="block">
                What is your pincode?
              </label>

              <input
                type="text"
                name="pincode"
                id="pincode"
                placeholder="201301"
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="flex-auto sm:w-5/12">
              <label htmlFor="Bill" className="flex items-center">
                Average monthly Bill
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </label>

              <input
                type="text"
                name="Bill"
                id="Bill"
                placeholder="5040"
                onChange={(e) => setBill(e.target.value)}
              />
            </div>
            <div className="flex-auto sm:w-3/12">
              <label htmlFor="roof-area" className="block">
                Roof area (sqft)
              </label>

              <input
                type="text"
                name="roof-area"
                id="roof-area"
                placeholder="1000"
                onChange={(e) => setRoofArea(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {/* <button type="submit" className="bg-sky-600/50">Design</button> */}
          <Button color="blue" type="submit" onClick={handleDesignForm}>
            Design
          </Button>
        </div>
      </form>
      {/* Display Calculated Size */}
      {calculatedSize !== null && (
        <div className="mt-5">
          <p className="text-center text-xl font-bold">
            Calculated Solar Power Size:
          </p>
          <p className="text-center text-2xl">{calculatedSize} kW</p>
          <p className="text-center text-lg">Location: {pincodeMapping[pincode]}</p>
        </div>
      )}
    </>
  );
}
