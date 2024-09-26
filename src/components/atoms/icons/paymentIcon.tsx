import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PaymentIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M18.909 3.065v-.997A2.068 2.068 0 0 0 16.84 0H2.068A2.068 2.068 0 0 0 0 2.068v.997c0 .102.083.185.185.185h18.54a.185.185 0 0 0 .184-.185ZM0 4.617v6.315C0 12.074.926 13 2.068 13h14.773a2.068 2.068 0 0 0 2.068-2.068V4.617a.185.185 0 0 0-.185-.185H.184A.185.185 0 0 0 0 4.617Zm4.727 4.838c0 .326-.264.59-.59.59h-.592a.591.591 0 0 1-.59-.59v-.591a.59.59 0 0 1 .59-.591h.591a.59.59 0 0 1 .591.59v.592Z"
    />
  </Svg>
);
export default PaymentIcon;
