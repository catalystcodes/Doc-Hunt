import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconWithCustomProps } from "../../../utils/types";
const FavIcon = (props: IconWithCustomProps) => (
  <Svg
    width={24}
    height={24}
    fill={props.isSelected ? "#FFC107" : "white"}
    {...props}
  >
    <Path
      stroke={props.isSelected ? "#FFC107" : "#777EA5"}
      d="m4.56 2.39.44.814.44-.815c.146-.271.387-.626.734-.898l-.305-.39.305.39a1.848 1.848 0 0 1 1.17-.412c1.194 0 2.156.986 2.156 2.42 0 .748-.29 1.397-.869 2.105-.592.725-1.45 1.467-2.539 2.408-.331.286-.703.608-1.092.95-.388-.342-.76-.663-1.09-.948l-.002-.002c-1.09-.94-1.947-1.683-2.539-2.408C.789 4.896.5 4.247.5 3.5c0-1.434.962-2.42 2.156-2.42.428 0 .817.135 1.17.412l.277-.353-.277.353c.347.272.588.627.734.898Z"
    />
  </Svg>
);
export default FavIcon;
