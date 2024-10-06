import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
const Dots = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={2} cy={2} r={2} fill="#677294" />
    <Circle cx={2} cy={10} r={2} fill="#677294" />
    <Circle cx={2} cy={18} r={2} fill="#677294" />
  </Svg>
);
export default Dots;
