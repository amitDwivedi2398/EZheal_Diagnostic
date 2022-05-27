import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}>
      <Path
        d="M19.007 5.02C17.256 3.147 14.68 2 12 2 9.32 2 6.744 3.042 4.993 5.02 3.55 6.689 2.829 8.77 3.035 10.855c0 .417.103.834.206 1.146.927 4.375 5.667 8.23 7.728 9.688.31.208.619.312 1.031.312.412 0 .721-.104 1.03-.313 1.959-1.458 6.802-5.312 7.73-9.687.102-.313.102-.73.205-1.146.207-2.083-.515-4.166-1.958-5.833ZM12 13.98a2.896 2.896 0 0 1-2.885-2.918c0-1.666 1.236-2.916 2.885-2.916 1.649 0 2.885 1.25 2.885 2.916A2.896 2.896 0 0 1 12 13.98Z"
        fill="#030D45"
      />
    </Svg>
  );
}

const SvgLocation = React.memo(SvgComponent);
export default SvgLocation;
