import React from "react";
import PropTypes from "prop-types";

import Navbar from "../../components/Navbar";

const NavbarPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <Navbar data={data} />;
};

NavbarPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default NavbarPreview;