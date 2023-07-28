/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  ellipseClassName: any;
  ellipseClassNameOverride: any;
  divClassName: any;
  union: string;
  vector: string;
  img: string;
  vector1: string;
}

export const DivWrapper = ({
  ellipseClassName,
  ellipseClassNameOverride,
  divClassName,
  union = "https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/union-5.svg",
  vector = "https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/vector-6-1.svg",
  img = "https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/vector-7-1.svg",
  vector1 = "https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/vector-8-1.svg",
}: Props): JSX.Element => {
  return (
    <div className="div-wrapper">
      <div className="overlap">
        <div className={`ellipse ${ellipseClassName}`} />
        <div className={`div ${ellipseClassNameOverride}`} />
      </div>
      <div className={`ellipse-2 ${divClassName}`} />
      <div className="group">
        <div className="overlap-group-2">
          <img className="union-2" alt="Union" src={union} />
          <img className="vector-2" alt="Vector" src={vector} />
          <img className="vector-3" alt="Vector" src={img} />
          <img className="vector-4" alt="Vector" src={vector1} />
        </div>
      </div>
    </div>
  );
};

DivWrapper.propTypes = {
  union: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
};
