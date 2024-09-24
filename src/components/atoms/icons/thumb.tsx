import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Thumb = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#0EBE7F"
      d="M7.5 30.708c-4.134 0-7.5 3.366-7.5 7.5v24c0 4.134 3.366 7.5 7.5 7.5h9c1.689 0 3.243-.57 4.5-1.518V30.708H7.5ZM72 41.958a6.652 6.652 0 0 0-1.953-4.722 7.448 7.448 0 0 0 1.92-5.727c-.351-3.813-3.786-6.8-7.824-6.8H45.612c.918-2.788 2.388-7.897 2.388-12 0-6.508-5.529-12-9-12-3.117 0-5.343 1.754-5.439 1.826A1.507 1.507 0 0 0 33 3.708v10.173l-8.64 18.717-.36.183v32.154c2.442 1.152 5.532 1.773 7.5 1.773h27.537c3.267 0 6.126-2.202 6.798-5.24a6.749 6.749 0 0 0-.543-4.507 6.72 6.72 0 0 0 3.003-9.003 6.715 6.715 0 0 0 3.705-6Z"
    />
  </Svg>
);
export default Thumb;
