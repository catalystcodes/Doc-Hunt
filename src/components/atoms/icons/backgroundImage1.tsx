import * as React from "react";
import Svg, { SvgProps, G, Circle, Defs } from "react-native-svg";
const BackgroundImage1 = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G filter="url(#a)">
      <Circle cx={9} cy={75} r={108} fill="#61CEFF" fillOpacity={0.72} />
    </G>
    <Defs></Defs>
  </Svg>
);
export default BackgroundImage1;
