import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 505 505"
      style={{
        enableBackground: 'new 0 0 505 505',
      }}
      xmlSpace="preserve"
      {...props}>
      <Circle
        style={{
          fill: '#fd8469',
        }}
        cx={252.5}
        cy={252.5}
        r={252.5}
      />
      <Path
        style={{
          fill: '#2b3b4e',
        }}
        d="M268.4 224.9c0-7.2-2.6-13.5-6.5-16.7-1.3-39.7-28.6-57.1-62-57.1-33.5 0-60.7 17.4-62 57.1-3.9 3.3-6.5 9.5-6.5 16.7 0 10 5.1 18.3 11.6 19 9.6 31.2 31.5 58.6 56.9 58.6 25.5 0 47.4-27.4 56.9-58.6 6.5-.7 11.6-9 11.6-19zM312.7 374.1c-30.8 24.9-70.1 39.8-112.8 39.8S118 399 87.1 374.1c20.8-35.4 59.2-59.1 103.2-59.1h19.2c33.1 0 63 13.4 84.6 35 7.2 7.3 13.4 15.4 18.6 24.1z"
      />
      <Path
        style={{
          fill: '#fff',
        }}
        d="M413.8 137.5H309.4c-9.2 0-16.7 7.5-16.7 16.7v55.9c0 9.2 7.5 16.7 16.7 16.7h7.7l-14.2 37 49.3-37h61.7c9.2 0 16.7-7.5 16.7-16.7v-55.9c0-9.2-7.5-16.7-16.8-16.7z"
      />
      <Path
        style={{
          fill: '#e6e9ee',
        }}
        d="M321.9 158.1h79.4v9.6h-79.4zM321.9 177.3h79.4v9.6h-79.4zM321.9 196.6h55.9v9.6h-55.9z"
      />
    </Svg>
  );
}

const SvgSocial = React.memo(SvgComponent);
export default SvgSocial;
