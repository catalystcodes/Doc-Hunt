import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const Google = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M5.029 5.064a5.7 5.7 0 0 1 7.858-.247.38.38 0 0 0 .514-.016l1.852-1.852a.376.376 0 0 0-.01-.542A9.052 9.052 0 0 0 8.944.001a9.05 9.05 0 0 0-6.297 2.683c-.18.18.03 2.374.03 2.374s1.337 1.029 2.35.006Z"
    />
    <Path
      fill="url(#b)"
      d="M5.028 5.064a5.7 5.7 0 0 1 7.859-.247.38.38 0 0 0 .513-.016l1.063-1.063a5.295 5.295 0 0 1-.273-.225c-1.385-1.227-3.187-2.008-5.188-1.987a7.53 7.53 0 0 0-5.287 2.225c-.147.149-.205 1.31-.205 1.31s.173-.016 1.518.003Z"
    />
    <Path
      fill="url(#c)"
      d="M3.368 9.031a5.699 5.699 0 0 0 1.691 4.111l-.81 1.749-1.57.632A9.055 9.055 0 0 1 0 9.096a9.057 9.057 0 0 1 2.648-6.412l2.38 2.38a5.694 5.694 0 0 0-1.66 3.967Z"
    />
    <Path
      fill="url(#d)"
      d="M3.368 9.031a5.699 5.699 0 0 0 1.691 4.111l-1.302 1.303a7.532 7.532 0 0 1-2.23-5.24 7.536 7.536 0 0 1 2.189-5.453l1.313 1.312a5.694 5.694 0 0 0-1.661 3.967Z"
    />
    <Path
      fill="url(#e)"
      d="M13.111 13.147a5.701 5.701 0 0 1-4.065 1.651 5.696 5.696 0 0 1-3.986-1.656L2.68 15.523a9.053 9.053 0 0 0 6.376 2.643c2.493.008 4.76-1.017 6.41-2.666l-.681-1.456-1.673-.897Z"
    />
    <Path
      fill="url(#f)"
      d="M13.111 13.147a5.702 5.702 0 0 1-4.065 1.651 5.696 5.696 0 0 1-3.986-1.656l-1.303 1.302a7.533 7.533 0 0 0 5.326 2.196c2.078 0 3.96-.839 5.325-2.196l-1.297-1.297Z"
    />
    <Path
      fill="url(#g)"
      d="M18.166 8.15a.324.324 0 0 0-.324-.324H9.387a.29.29 0 0 0-.29.29v2.796c0 .16.13.29.29.29h4.13c.425 0 .689.464.47.83-.244.406-.538.78-.872 1.111l-.004.004 2.353 2.353.338-.334a9.168 9.168 0 0 0 2.364-6.153V8.15Z"
    />
    <Path
      fill="url(#h)"
      d="M16.258 11.462a1.55 1.55 0 0 0-1.47-2.04H9.097v1.49c0 .16.13.29.29.29h4.13c.425 0 .689.464.47.83a5.698 5.698 0 0 1-.87 1.108l-.006.007 1.297 1.297a7.562 7.562 0 0 0 1.85-2.982Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={2.575}
        x2={15.363}
        y1={2.759}
        y2={2.759}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF637B" />
        <Stop offset={1} stopColor="#F90217" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12.259}
        x2={4.225}
        y1={7.672}
        y2={-0.363}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF637B" />
        <Stop offset={1} stopColor="#F90217" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={0.216}
        x2={5.155}
        y1={6.656}
        y2={11.596}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFD833" />
        <Stop offset={1} stopColor="#F2B631" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={6.278}
        x2={1}
        y1={11.639}
        y2={6.361}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFD833" />
        <Stop offset={1} stopColor="#F2B631" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={8.301}
        x2={11.057}
        y1={14.354}
        y2={17.109}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#28A265" />
        <Stop offset={1} stopColor="#28895E" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={12.604}
        x2={4.632}
        y1={17.965}
        y2={9.993}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#28A265" />
        <Stop offset={1} stopColor="#28895E" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={12.965}
        x2={17.192}
        y1={8.858}
        y2={13.085}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7FAEF4" />
        <Stop offset={1} stopColor="#4C8DF1" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={16.505}
        x2={11.017}
        y1={14.469}
        y2={8.981}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7FAEF4" />
        <Stop offset={1} stopColor="#4C8DF1" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Google;
