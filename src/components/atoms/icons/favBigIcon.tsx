import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconWithCustomProps } from "../../../utils/types";
const FavBigIcon = (props: IconWithCustomProps) => (
  <Svg
    width={24}
    height={24}
    fill={props.isSelected ? "#ef2323" : "#FFFFFF"}
    {...props}
  >
    <Path
      stroke={props.isSelected ? "#ef2323" : "#D5CCCC"}
      d="m8.06 2.874.44.815.44-.815c.257-.478.687-1.117 1.318-1.612L9.95.868l.308.394A3.436 3.436 0 0 1 12.428.5c2.22 0 3.954 1.835 3.954 4.395 0 1.356-.53 2.517-1.533 3.744-1.016 1.242-2.479 2.507-4.298 4.079-.614.53-1.312 1.133-2.038 1.777a.02.02 0 0 1-.013.005.019.019 0 0 1-.013-.005 207.38 207.38 0 0 0-2.038-1.776v-.001c-1.82-1.572-3.283-2.837-4.299-4.08C1.148 7.413.617 6.252.617 4.896.617 2.335 2.351.5 4.57.5c.795 0 1.521.253 2.17.762l.307-.39-.306.39c.631.495 1.06 1.134 1.319 1.612Z"
    />
  </Svg>
);
export default FavBigIcon;
