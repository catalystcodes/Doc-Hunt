import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const MedicalIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M14.427.562a1.124 1.124 0 0 0-.97-.562h-4.17v4.947h7.669L14.427.562ZM8.117 0H3.908c-.4 0-.771.216-.971.563L.417 4.947h7.7V0ZM0 6.119v12.503C0 19.382.617 20 1.375 20H15.99c.758 0 1.375-.618 1.375-1.378V6.119H0Zm11.336 5.258-3.023 3.031a.582.582 0 0 1-.826 0l-1.417-1.42a.588.588 0 0 1 0-.83.583.583 0 0 1 .826 0L7.9 13.166l2.61-2.617a.583.583 0 0 1 .826 0c.228.229.228.6 0 .829Z"
    />
  </Svg>
);
export default MedicalIcon;
