import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const NavLink = ({currentPage, setCurrentPage, pageName, route}) => (
  <div className={`${currentPage === route ? "isActive" : ""} navBarLink`}>
    <Link to={route} onClick={() => setCurrentPage(route)}>
        {pageName}
    </Link>
  </div>
);

NavLink.propTypes = {
    currentPage: PropTypes.string.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    pageName: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
};

export default NavLink;
