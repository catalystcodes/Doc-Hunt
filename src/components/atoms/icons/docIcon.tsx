import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const DocIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M18 20.625c-.047-3.017-.987-5.76-2.659-7.746C13.68 10.905 11.428 9.82 9 9.82c-2.428 0-4.68 1.086-6.342 3.06C.988 14.863.05 17.602 0 20.615c.944.473 4.851 2.294 9 2.294 4.486 0 8.124-1.81 9-2.284ZM9 8.883c2.517 0 4.558-1.988 4.558-4.441S11.518 0 9 0 4.44 1.989 4.44 4.442c0 2.453 2.041 4.441 4.559 4.441Z"
    />
  </Svg>
);
export default DocIcon;
