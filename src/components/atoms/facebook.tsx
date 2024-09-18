import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const Facebook = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M14.917 17.855a54.879 54.879 0 0 1-11.668 0 3.308 3.308 0 0 1-2.938-2.938 54.868 54.868 0 0 1 0-11.668A3.308 3.308 0 0 1 3.249.311a54.868 54.868 0 0 1 11.668 0 3.308 3.308 0 0 1 2.938 2.938 54.878 54.878 0 0 1 0 11.668 3.308 3.308 0 0 1-2.938 2.938Z"
    />
    <Path
      fill="url(#b)"
      d="M16.867 3.906A2.935 2.935 0 0 0 14.26 1.3a48.707 48.707 0 0 0-10.354 0A2.936 2.936 0 0 0 1.3 3.906a48.707 48.707 0 0 0 0 10.354 2.935 2.935 0 0 0 2.607 2.607c3.448.368 6.906.368 10.353 0a2.935 2.935 0 0 0 2.608-2.607 48.684 48.684 0 0 0 0-10.354Z"
    />
    <Path
      fill="url(#c)"
      d="M.272 14.54c.012.126.025.251.039.377a3.308 3.308 0 0 0 2.938 2.938c3.885.415 7.782.415 11.667 0a3.308 3.308 0 0 0 2.939-2.938l.039-.377H.272Z"
    />
    <Path
      fill="url(#d)"
      d="M12.213 3.025a2.866 2.866 0 0 0-2.866 2.866v2.14H7.805v2.651l1.542 1.382v6.101a54.988 54.988 0 0 0 5.57-.31 3.308 3.308 0 0 0 2.938-2.938c.309-2.891.388-5.788.237-8.683l-3.209-3.209h-2.67Z"
    />
    <Path
      fill="#fff"
      d="M9.347 18.165a54.803 54.803 0 0 0 3.175-.107v-7.376h2.107l.254-2.65h-2.36V6.349c0-.372.3-.673.672-.673h1.688v-2.65h-2.67A2.866 2.866 0 0 0 9.347 5.89v2.14H7.805v2.651h1.542v7.483Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={6.031}
        x2={10.626}
        y1={2.554}
        y2={12.385}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3457A0" />
        <Stop offset={1} stopColor="#3B5998" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12.529}
        x2={-3.351}
        y1={11.451}
        y2={0.54}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3457A0" stopOpacity={0} />
        <Stop offset={1} stopColor="#1F3F77" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={9.083}
        x2={9.083}
        y1={15.181}
        y2={17.639}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3457A0" stopOpacity={0} />
        <Stop offset={1} stopColor="#1F3F77" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={20.855}
        x2={8.246}
        y1={15.002}
        y2={8.644}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3457A0" stopOpacity={0} />
        <Stop offset={0.325} stopColor="#2A4C8D" stopOpacity={0.325} />
        <Stop offset={0.705} stopColor="#22427D" stopOpacity={0.706} />
        <Stop offset={1} stopColor="#1F3F77" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Facebook;
