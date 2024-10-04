import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const UploadPics = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#677294"
      d="M13.304 0H1.697C.76 0 0 .76 0 1.697v10.669c0 .935.76 1.695 1.697 1.695h11.607c.936 0 1.696-.76 1.696-1.695V1.697C15 .761 14.24 0 13.304 0ZM9.7 2.524a1.639 1.639 0 1 1 0 3.278 1.639 1.639 0 0 1 0-3.278Zm3.072 9.969H2.462c-.452 0-.654-.328-.45-.732l2.812-5.57c.204-.404.593-.44.868-.08l2.827 3.695c.275.36.756.39 1.074.068l.692-.7c.318-.322.786-.282 1.046.088l1.791 2.559c.259.371.103.672-.35.672Z"
    />
  </Svg>
);
export default UploadPics;
