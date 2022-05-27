import * as React from 'react';
import Svg, { Path, Mask } from 'react-native-svg';

function SvgComponent(props) {
  const { color } = props;
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.642 11.34A4.638 4.638 0 009.283 6.7a4.638 4.638 0 004.642 4.64 4.638 4.638 0 004.641-4.64 4.638 4.638 0 00-4.641-4.642 4.638 4.638 0 00-4.642 4.641 4.638 4.638 0 00-4.641-4.641A4.638 4.638 0 000 6.699c-.029 2.566 2.076 4.642 4.642 4.642zm0-6.543a1.9 1.9 0 011.902 1.902 1.9 1.9 0 01-1.902 1.903 1.92 1.92 0 01-1.903-1.903c-.029-1.066.836-1.902 1.903-1.902zm17.845 7.668a.979.979 0 011.355.346c.115.144.144.317.144.49l-.029 3.806v3.863c0 .547-.432.98-.98.98a.887.887 0 01-.548-.173L19.2 19.903c-.014 0-.021-.007-.028-.014-.008-.008-.015-.015-.03-.015l-.778-.461v-4.555l.836-.49 3.287-1.903zm-6.083-.865a5.525 5.525 0 01-2.48.606 5.39 5.39 0 01-2.998-.894H7.64a5.39 5.39 0 01-2.998.894c-.894 0-1.73-.202-2.48-.606a2.254 2.254 0 00-1.124 1.932v7.034a2.344 2.344 0 002.335 2.335h11.849a2.344 2.344 0 002.335-2.335v-7.034c-.029-.807-.49-1.557-1.153-1.932zm-2.48-6.803a1.9 1.9 0 011.903 1.902 1.9 1.9 0 01-1.902 1.903 1.92 1.92 0 01-1.903-1.903c0-1.066.836-1.902 1.903-1.902z"
        fill={color ? color : '#1A051D'}
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={2}
        width={24}
        height={21}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.642 11.34A4.638 4.638 0 009.283 6.7a4.638 4.638 0 004.642 4.64 4.638 4.638 0 004.641-4.64 4.638 4.638 0 00-4.641-4.642 4.638 4.638 0 00-4.642 4.641 4.638 4.638 0 00-4.641-4.641A4.638 4.638 0 000 6.699c-.029 2.566 2.076 4.642 4.642 4.642zm0-6.543a1.9 1.9 0 011.902 1.902 1.9 1.9 0 01-1.902 1.903 1.92 1.92 0 01-1.903-1.903c-.029-1.066.836-1.902 1.903-1.902zm17.845 7.668a.979.979 0 011.355.346c.115.144.144.317.144.49l-.029 3.806v3.863c0 .547-.432.98-.98.98a.887.887 0 01-.548-.173L19.2 19.903c-.014 0-.021-.007-.028-.014-.008-.008-.015-.015-.03-.015l-.778-.461v-4.555l.836-.49 3.287-1.903zm-6.083-.865a5.525 5.525 0 01-2.48.606 5.39 5.39 0 01-2.998-.894H7.64a5.39 5.39 0 01-2.998.894c-.894 0-1.73-.202-2.48-.606a2.254 2.254 0 00-1.124 1.932v7.034a2.344 2.344 0 002.335 2.335h11.849a2.344 2.344 0 002.335-2.335v-7.034c-.029-.807-.49-1.557-1.153-1.932zm-2.48-6.803a1.9 1.9 0 011.903 1.902 1.9 1.9 0 01-1.902 1.903 1.92 1.92 0 01-1.903-1.903c0-1.066.836-1.902 1.903-1.902z"
          fill="#fff"
        />
      </Mask>
    </Svg>
  );
}

const SvgVideo = React.memo(SvgComponent);
export default SvgVideo;
