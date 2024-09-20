import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const TheetIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={80} height={90} fill="url(#a)" rx={8} />
    <Circle cx={40} cy={79} r={40} fill="#fff" fillOpacity={0.04} />
    <Circle cx={79.5} cy={33.5} r={33.5} fill="#fff" fillOpacity={0.06} />
    <Path
      fill="#fff"
      d="M54.055 28.653c-3.18-2.962-6.779-2.958-9.469-2.293-2.68.662-5.492.662-8.172 0-2.69-.665-6.29-.67-9.47 2.293-6.024 5.612-1.176 15.637.283 17.364 1.46 1.727 1.506 4.029 2.542 8.73 1.035 4.7 2.353 9.161 4.989 8.49 2.636-.672 3.342-3.933 4-8.298.046-.3.093-.582.142-.847.335-1.815 2.865-1.815 3.2 0 .049.265.096.547.142.847.658 4.365 1.364 7.627 4 8.298 2.636.671 3.954-3.79 4.99-8.49 1.035-4.701 1.082-7.003 2.54-8.73 1.46-1.727 6.308-11.752.283-17.364Zm-18.401 2.18a.995.995 0 0 1-1.11.867c-.194-.024-4.491-.508-5.698 4.273a.995.995 0 0 1-.96.758.972.972 0 0 1-.247-.032c-.53-.139-.85-.69-.713-1.23 1.323-5.238 5.731-6.065 7.878-5.772.542.075.923.583.85 1.136Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={5}
        x2={74}
        y1={6}
        y2={90}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#2753F3" />
        <Stop offset={1} stopColor="#765AFC" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default TheetIcon;
