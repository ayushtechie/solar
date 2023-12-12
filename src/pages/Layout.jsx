import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

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
        <a href="/solar">LOGO</a>
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
