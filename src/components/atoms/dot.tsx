import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
const Dot = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={2.8} cy={2.8} r={2.8} fill="#fff" />
  </Svg>
);
export default Dot;
