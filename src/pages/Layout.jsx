import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SolarShop from "../images/SOLARSHOP.png";

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
      <nav className="header">
        <a href="/solar"><img src={SolarShop} alt="logo" width={100} height={80} className="p-3"/></a>
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
              to="/solar-pannel"
              className="menu-item z-20"
              onClick={handleItemClick}
            >
              Solar Products
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
