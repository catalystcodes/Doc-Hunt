import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowBack = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#677294"
      d="m.186 6.81 5.717 5.716c.25.25.657.25.909 0a.64.64 0 0 0 0-.907L1.548 6.357l5.263-5.262a.641.641 0 1 0-.909-.907L.185 5.903a.648.648 0 0 0 0 .907Z"
    />
  </Svg>
);
export default ArrowBack;
