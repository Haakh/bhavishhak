import React from "react";
import PropTypes from "prop-types";

export const SectionTitleFn = (props) => (
  <div className="">
    <div className="">{props.title}</div>
    <p className="">{props.desc}</p>
  </div>
);

SectionTitleFn.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const SectionTitle = SectionTitleFn;

export default SectionTitle;
