import * as React from "react";
import Svg, { Circle, Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const CommoditiesIcon = (props) => (
  <Svg
    width={52}
    height={52}
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Circle cx={26} cy={26} r={26} fill="#5038E1" />
    <Rect
      x={9.04346}
      y={10.1739}
      width={32.7826}
      height={32.7826}
      fill="url(#pattern0)"
    />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_755_3637" transform="scale(0.001)" />
      </Pattern>
      <Image
        id="image0_755_3637"
        width={1000}
        height={1000}
      />
    </Defs>
  </Svg>
);
export default CommoditiesIcon;