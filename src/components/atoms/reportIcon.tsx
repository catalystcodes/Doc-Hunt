import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ReportIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#677294"
      d="M11.333 7.417c-.78 0-1.416-.636-1.416-1.417V.333h-8.5C.637.333 0 .97 0 1.75v19.833C0 22.365.636 23 1.417 23h14.166c.782 0 1.417-.635 1.417-1.417V7.417h-5.667Zm-5.666 12.75H2.833v-4.25h2.834v4.25Zm4.25 0H7.083v-7.084h2.834v7.084Zm4.25 0h-2.834V10.25h2.834v9.917Z"
    />
    <Path fill="#677294" d="M11.334.333V6h5.667L11.334.333Z" />
  </Svg>
);
export default ReportIcon;
