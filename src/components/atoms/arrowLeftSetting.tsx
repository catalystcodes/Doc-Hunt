import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowLeftSetting = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      stroke="#677294"
      d="m.498 12.492-.353.353m.353-.353L6.14 6.863l.353-.351-.352-.353L.52.522.161.867m.337 11.625Zm-.353.353a.499.499 0 0 1 .001-.706l5.29-5.275.354-.353-.354-.354L.161.867M.145 12.845l.353-.353.353.354a.5.5 0 0 1-.706-.001ZM.161.867.514.516M.162.866A.5.5 0 0 1 .162.174m6.334 6.337.352-.352-.352.352Zm0 0-.352-.353L.522.52l5.974 5.991ZM.515.515Zm0 0L.162.174m0 0 .353.341M.162.174l.353.341M.499 12.491v.001H.497ZM.52.521Zm0 0v.001Z"
    />
  </Svg>
);
export default ArrowLeftSetting;
