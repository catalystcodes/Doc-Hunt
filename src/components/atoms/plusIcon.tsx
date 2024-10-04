import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PlusIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#0EBE7F"
      d="M13.3 27.35c-.333 0-.6-.1-.8-.3-.2-.2-.3-.467-.3-.8V15.3H1.35c-.333 0-.6-.1-.8-.3-.2-.2-.3-.467-.3-.8v-.7c0-.333.1-.6.3-.8.2-.2.467-.3.8-.3H12.2V1.75c0-.333.1-.6.3-.8.2-.2.467-.3.8-.3h.75c.333 0 .6.1.8.3.2.2.3.467.3.8V12.4h10.9c.333 0 .6.1.8.3.2.2.3.467.3.8v.7c0 .333-.1.6-.3.8-.2.2-.467.3-.8.3h-10.9v10.95c0 .333-.1.6-.3.8-.2.2-.467.3-.8.3h-.75Z"
    />
  </Svg>
);
export default PlusIcon;
