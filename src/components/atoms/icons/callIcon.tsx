import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CallIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M8.07 7.821 7.032 6.476c-.37-.48-1.115-.404-1.357.127-.178.366-.63.524-1.002.389-.823-.323-1.828-1.578-1.925-2.498-.078-.4.232-.792.632-.87.575-.098.838-.8.468-1.28L2.813 1C2.51.657 2 .591 1.664.85l-.912.704c-.919.745-.318 3.115 1.422 5.373 1.74 2.259 3.873 3.487 4.834 2.746l.912-.703c.342-.302.408-.812.15-1.149Z"
    />
  </Svg>
);
export default CallIcon;
