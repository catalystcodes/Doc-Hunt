import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const RateIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#F6D060"
      d="M8.987 3.418a.267.267 0 0 0-.213-.189l-2.79-.425L4.736.154A.263.263 0 0 0 4.5 0c-.1 0-.192.06-.236.154l-1.248 2.65-2.79.425a.267.267 0 0 0-.213.189c-.031.1-.005.21.067.283l2.018 2.063-.476 2.913a.283.283 0 0 0 .105.27.255.255 0 0 0 .277.021L4.5 7.593l2.495 1.375c.09.05.197.041.278-.02a.283.283 0 0 0 .105-.271l-.477-2.913L8.921 3.7a.286.286 0 0 0 .066-.283Z"
    />
  </Svg>
);
export default RateIcon;
