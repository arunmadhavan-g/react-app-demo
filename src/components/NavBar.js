import React, { useState } from "react";
import "../styles/NavBar.css";
import NavLink from "./NavLink";
import NavConstants from "./NavConstants";

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("/login");

  return (
    <div className="navBarContainer">
      {NavConstants.map(nav => (
        <NavLink
          currentPage={currentPage}
          route={nav.route}
          pageName={nav.name}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </div>
  );
};

export default NavBar;
