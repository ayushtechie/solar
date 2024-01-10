import { useState } from "react";
import { Outlet } from "react-router-dom";

import { ComplexNav } from "../components/ComplexNav";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    if (isOpen) {
      toggle();
    }
  };

  return (
    <>
      {/* <nav className="header">
        <a href="/solar">
          <img
            src={SolarShop}
            alt="logo"
            width={100}
            height={80}
            className="p-3"
          />
        </a>
        <div className={`menu-btn ${isOpen ? "open" : ""}`} onClick={toggle}>
          <div className="menu-btn__lines"></div>
        </div>
        <ul className={`menu-items ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="menu-item z-20" onClick={handleItemClick}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/estimater"
              className="menu-item z-20"
              onClick={handleItemClick}
            >
              Estimater
            </Link>
          </li>
          <li>
            <Link
              to="/epc"
              className="menu-item z-20"
              onClick={handleItemClick}
            >
              EPC
            </Link>
          </li>
          <li>
            <Link
              className="menu-item z-20"
              onClick={handleItemClick}
            >
              <DropdownMenu/>
            </Link>
          </li>
          <li className="relative group">
            <a
              href="/solar-pannel"
              className="menu-item z-20"
              onClick={(e) => {
                e.preventDefault();
                toggle(); // Toggle the dropdown on Solar Products link click
              }}
            >
              Solar Products
            </a>
            <ul
              className={`absolute top-12 right-0 w-48 h-44 flex flex-col justify-between gap-x-2  ${
                isOpen ? "block" : "hidden"
              } bg-blue-900 text-white p-2 space-y-2`}
            >
              <li>
                <Link to="/solar-pannel/solar-plant" onClick={handleItemClick}>
                  Solar Plant
                </Link>
              </li>
              <li>
                <Link to="/solar-pannel/solar-water-heater" onClick={handleItemClick}>
                  Solar water heater
                </Link>
              </li>
              <li>
                <Link to="/solar-pannel/solar-lights" onClick={handleItemClick}>
                  Solar Lights
                </Link>
              </li>
              <li>
                <Link to="/solar-pannel/solar-pump" onClick={handleItemClick}>
                  Solar Pump
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav> */}
      <ComplexNav/>

      <Outlet />
    </>
  );
};

export default Layout;
