import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const ArrowBack = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={30} height={30} fill="#fff" rx={10} />
    <Path
      fill="#677294"
      d="m12.186 15.81 5.717 5.716c.25.25.657.25.909 0a.64.64 0 0 0 0-.907l-5.264-5.262 5.263-5.262a.641.641 0 1 0-.909-.907l-5.717 5.715a.648.648 0 0 0 0 .907Z"
    />
  </Svg>
);
export default ArrowBack;
