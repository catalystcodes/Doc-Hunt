import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CancelIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#677294"
      d="M6.145 5.503 10.86.788a.458.458 0 1 0-.648-.648L5.497 4.855.782.14a.458.458 0 0 0-.648.648L4.85 5.503.134 10.218a.458.458 0 1 0 .648.648L5.497 6.15l4.715 4.715a.458.458 0 0 0 .648-.648L6.145 5.503Z"
    />
  </Svg>
);
export default CancelIcon;
