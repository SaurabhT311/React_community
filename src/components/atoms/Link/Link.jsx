import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

require("./_style.scss");

const Links = (props) => (
  <Link
    style={{
      color: "white",
    }}
    className="a__button"
  >
    {props.text}
  </Link>
);

Links.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Links;
