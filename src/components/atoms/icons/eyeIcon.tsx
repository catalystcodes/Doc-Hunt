import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const EyeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={80} height={90} fill="url(#a)" rx={8} />
    <Circle cx={40} cy={79} r={40} fill="#fff" fillOpacity={0.06} />
    <Circle cx={79.5} cy={33.5} r={33.5} fill="#fff" fillOpacity={0.08} />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        x2={73}
        y1={0}
        y2={85}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.286} stopColor="#FE7F44" />
        <Stop offset={1} stopColor="#FFCF68" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default EyeIcon;
