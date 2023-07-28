/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  unionClassName: any;
  union: string;
  subtract: string;
  img: string;
  vector: string;
}

export const IconIoniconsWrapper = ({
  unionClassName,
  union = "https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/union-4@2x.png",
  subtract = "https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/subtract-3.svg",
  img = "https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/subtract-2.svg",
  vector = "https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/vector-2-1.svg",
}: Props): JSX.Element => {
  return (
    <div className="icon-ionicons-wrapper">
      <img className={`img ${unionClassName}`} alt="Union" src={union} />
      <div className="overlap-group">
        <img className="subtract" alt="Subtract" src={subtract} />
        <img className="subtract-2" alt="Subtract" src={img} />
        <img className="vector" alt="Vector" src={vector} />
      </div>
    </div>
  );
};

IconIoniconsWrapper.propTypes = {
  union: PropTypes.string,
  subtract: PropTypes.string,
  img: PropTypes.string,
  vector: PropTypes.string,
};
