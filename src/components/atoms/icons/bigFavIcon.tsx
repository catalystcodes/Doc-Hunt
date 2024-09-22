import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const BigFavIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="red"
      d="M13.953 0c-1.03 0-1.976.331-2.81.984-.798.626-1.33 1.424-1.643 2.004-.313-.58-.845-1.378-1.644-2.004C7.023.331 6.078 0 5.046 0 2.17 0 0 2.385 0 5.548c0 3.417 2.707 5.755 6.805 9.294.696.601 1.484 1.283 2.304 2.01a.588.588 0 0 0 .782 0c.82-.727 1.608-1.409 2.305-2.01C16.293 11.303 19 8.965 19 5.548 19 2.385 16.83 0 13.953 0Z"
    />
  </Svg>
);
export default BigFavIcon;
