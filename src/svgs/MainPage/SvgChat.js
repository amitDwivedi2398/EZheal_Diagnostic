import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 297 297"
      style={{
        enableBackground: 'new 0 0 297 297',
      }}
      xmlSpace="preserve"
      {...props}>
      <Circle
        style={{
          fill: '#c63c22',
        }}
        cx={148.5}
        cy={148.5}
        r={148.5}
      />
      <Path
        style={{
          fill: '#a53d04',
        }}
        d="m68.489 183.939 110.026 110.026c62.607-12.851 110.838-65.104 117.653-129.706l-67.897-67.897-159.782 87.577z"
      />
      <Path
        style={{
          fill: '#ffcd02',
        }}
        d="M148.5 66c-54.676 0-99 33.243-99 74.25 0 38.177 38.42 69.62 87.843 73.778L132 247.5l16.5-14.514V66zM148.5 66v166.986l23.394-20.577c43.384-7.884 75.606-37.197 75.606-72.159 0-41.007-44.324-74.25-99-74.25z"
      />
      <Path
        style={{
          fill: '#d6ad00',
        }}
        d="M148.5 66v166.986l23.394-20.577c43.384-7.884 75.606-37.197 75.606-72.159 0-41.007-44.324-74.25-99-74.25z"
      />
      <Circle
        style={{
          fill: '#cc3b3b',
        }}
        cx={198}
        cy={142.5}
        r={13}
      />
      <Circle
        style={{
          fill: '#e95755',
        }}
        cx={148.5}
        cy={142.5}
        r={13}
      />
      <Path
        style={{
          fill: '#cc3b3b',
        }}
        d="M161.5 142.5c0-7.18-5.82-13-13-13v26c7.18 0 13-5.82 13-13z"
      />
      <Circle
        style={{
          fill: '#e95755',
        }}
        cx={99}
        cy={142.5}
        r={13}
      />
    </Svg>
  );
}

const SvgChat = React.memo(SvgComponent);
export default SvgChat;
