/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  unionClassName: any;
  union: string;
}

export const IconIonicons = ({
  className,
  unionClassName,
  union = "https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/union-3.svg",
}: Props): JSX.Element => {
  return (
    <div className={`icon-ionicons ${className}`}>
      <img className={`union ${unionClassName}`} alt="Union" src={union} />
    </div>
  );
};

IconIonicons.propTypes = {
  union: PropTypes.string,
};
