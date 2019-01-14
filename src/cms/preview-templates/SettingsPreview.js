import React from "react";
import PropTypes from "prop-types";

import SettingsTemplate from "../../components/Settings";

const SettingsPreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <SettingsTemplate data={data} />;
};

SettingsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default SettingsPreview;