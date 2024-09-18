import * as React from "react";
import Svg, { SvgProps, G, Circle, Defs } from "react-native-svg";
const BackgroundImage2 = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G filter="url(#a)">
      <Circle
        cx={308.5}
        cy={308.5}
        r={128.5}
        fill="#0EBE7E"
        fillOpacity={0.3}
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default BackgroundImage2;
