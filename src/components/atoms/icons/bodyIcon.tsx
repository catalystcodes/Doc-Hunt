import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const BodyIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={80} height={90} fill="url(#a)" rx={8} />
    <Circle cx={40} cy={79} r={40} fill="#fff" fillOpacity={0.06} />
    <Circle cx={79.5} cy={33.5} r={33.5} fill="#fff" fillOpacity={0.08} />
    <Path
      fill="#fff"
      d="M46.569 37.532c-.68-2.086-.203-4.33.529-6.4A.85.85 0 0 0 46.297 30H32.715a.85.85 0 0 0-.76 1.23 8.457 8.457 0 0 1 .554 6.1c-.562 1.773-1.384 3.388-2.18 4.95-.245.48-.485.954-.716 1.425l3.828 1.915c3.744 1.872 8.374 1.872 12.117 0l3.838-1.919c-.228-.464-.465-.93-.706-1.402-.768-1.502-1.563-3.056-2.121-4.766Zm-7.07 7.818a.85.85 0 1 1 0-1.7.85.85 0 0 1 0 1.7ZM25.85 36.854h1.404l-.25.248a.85.85 0 1 0 1.202 1.202l1.7-1.7a.85.85 0 0 0 0-1.2l-1.7-1.7a.85.85 0 1 0-1.201 1.201l.249.25H25.85a.85.85 0 1 0 0 1.699ZM53.15 35.154h-1.404l.25-.249a.85.85 0 1 0-1.202-1.201l-1.7 1.7a.85.85 0 0 0 0 1.2l1.7 1.7a.85.85 0 1 0 1.201-1.202l-.249-.248h1.404a.85.85 0 1 0 0-1.7Z"
    />
    <Path
      fill="#fff"
      d="m50.103 45.247-3.784 1.892a15.328 15.328 0 0 1-6.819 1.61c-2.354 0-4.711-.557-6.818-1.61l-3.774-1.887c-.35.826-.654 1.661-.863 2.538-.22.924-.36 1.858-.443 2.796 4.03-.88 7.577.286 10.8 3.51.335.27 1.863.271 2.203-.007 2.271-2.272 5.632-4.66 10.806-3.495a19.297 19.297 0 0 0-.443-2.804c-.21-.883-.515-1.719-.865-2.543Z"
    />
    <Path
      fill="#fff"
      d="M41.8 55.297c-.152.152-.365.27-.6.372v2.482c0 .47.38.85.85.85h7.646a.846.846 0 0 0 .802-.569c.651-1.95.947-4.037.957-6.072-4.57-1.18-7.503.785-9.655 2.937ZM27.559 52.34c.008 2.041.303 4.135.957 6.092.113.34.442.57.801.57h7.635c.469 0 .85-.381.85-.85v-2.483c-.236-.102-.45-.22-.602-.372-2.194-2.194-5.13-4.113-9.641-2.957Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        x2={80}
        y1={5}
        y2={90}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF484C" />
        <Stop offset={1} stopColor="#FF6C60" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BodyIcon;
