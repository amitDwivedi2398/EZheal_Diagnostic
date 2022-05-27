import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={56} height={560} viewBox="0 0 56 560" fill="none" {...props}>
      <Path
        opacity={0.5}
        d="M0 36c0-8.837 7.163-16 16-16h24v520H16c-8.837 0-16-7.163-16-16V36z"
        fill="#015a13"
      />
      <Path
        d="M16 16c0-8.837 7.163-16 16-16h24v560H32c-8.837 0-16-7.163-16-16V16z"
        fill="#5ecf31"
      />
    </Svg>
  );
}

const SvgFakeScreens = React.memo(SvgComponent);
export default SvgFakeScreens;
