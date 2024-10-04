import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const EditIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#677294"
      d="M1.4 9.66 0 14l4.34-1.4L1.4 9.66ZM9.214 1.824l-6.83 6.83 2.97 2.97 6.83-6.83-2.97-2.97ZM13.79 2.17 11.83.21a.677.677 0 0 0-.98 0l-.63.63 2.94 2.94.63-.63c.28-.28.28-.7 0-.98Z"
    />
  </Svg>
);
export default EditIcon;
