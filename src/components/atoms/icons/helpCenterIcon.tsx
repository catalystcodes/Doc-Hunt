import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const HelpCenterIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9Zm0 14.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm1.187-4.769a.753.753 0 0 0-.437.682v.337a.75.75 0 1 1-1.5 0v-.337A2.26 2.26 0 0 1 9.559 8.12c.764-.352 1.316-1.286 1.316-1.744 0-1.033-.84-1.875-1.875-1.875a1.877 1.877 0 0 0-1.875 1.875.75.75 0 1 1-1.5 0A3.38 3.38 0 0 1 9 3a3.38 3.38 0 0 1 3.375 3.375c0 1.013-.879 2.503-2.188 3.106Z"
    />
  </Svg>
);
export default HelpCenterIcon;
