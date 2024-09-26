import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LogOutIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M6.563 0h7.5c.517 0 .937.42.937.938v13.125c0 .517-.42.937-.938.937h-7.5a.938.938 0 0 1-.937-.938V.938c0-.518.42-.938.938-.938Zm1.874 8.438a.938.938 0 1 0 0-1.876.938.938 0 0 0 0 1.875ZM0 7.5l3.281-2.812v1.875h1.406v1.875H3.282v1.875L0 7.5Z"
    />
  </Svg>
);
export default LogOutIcon;
