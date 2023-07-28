/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  iconIonicons: string;
}

export const ImgWrapper = ({
  className,
  iconIonicons = "https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/icon---ionicons---outline---mic-circle-outline-1.svg",
}: Props): JSX.Element => {
  return <img className={`img-wrapper ${className}`} alt="Icon ionicons" src={iconIonicons} />;
};

ImgWrapper.propTypes = {
  iconIonicons: PropTypes.string,
};
