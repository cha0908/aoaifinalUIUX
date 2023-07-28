/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  iconIoniconsSharp: string;
}

export const IconIoniconsSharp = ({
  className,
  iconIoniconsSharp = "https://generation-sessions.s3.amazonaws.com/5589623fe2b139b7aede52dac1f6e538/img/icon---ionicons---sharp---arrow-forward-circle-sharp.svg",
}: Props): JSX.Element => {
  return <img className={`icon-ionicons-sharp ${className}`} alt="Icon ionicons sharp" src={iconIoniconsSharp} />;
};

IconIoniconsSharp.propTypes = {
  iconIoniconsSharp: PropTypes.string,
};
