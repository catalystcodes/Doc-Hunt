import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#677294"
      d="M5.725 0A5.731 5.731 0 0 0 0 5.725a5.731 5.731 0 0 0 5.725 5.725 5.731 5.731 0 0 0 5.725-5.725A5.731 5.731 0 0 0 5.725 0Zm0 10.393a4.673 4.673 0 0 1-4.668-4.668 4.673 4.673 0 0 1 4.668-4.668 4.673 4.673 0 0 1 4.668 4.668 4.673 4.673 0 0 1-4.668 4.668Z"
    />
    <Path
      fill="#677294"
      d="m12.845 12.098-3.03-3.03a.528.528 0 1 0-.747.747l3.03 3.03a.527.527 0 0 0 .747 0 .528.528 0 0 0 0-.747Z"
    />
  </Svg>
);
export default SearchIcon;
