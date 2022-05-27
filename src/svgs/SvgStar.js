import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  color?: string;
}

function SvgComponent(props: Props) {
  return (
    <Svg width={14} height={12} viewBox="0 0 14 12" fill="none" {...props}>
      <Path
        d="M3.566 7.618l-.862 3.415c-.088.335.012.656.259.835a.693.693 0 00.411.132.86.86 0 00.461-.142l1.354-.851a.378.378 0 00-.403-.64l-1.349.848.92-3.643a.378.378 0 00-.124-.383L1.347 4.783l3.75-.25a.378.378 0 00.325-.238L6.82.807l1.397 3.488c.054.135.18.227.326.237l3.749.25L9.405 7.19a.378.378 0 00-.124.383l.92 3.643-3.18-2a.378.378 0 00-.403 0l-.572.359a.378.378 0 00.403.64l.37-.233 2.982 1.876c.292.186.627.19.874.011.248-.18.347-.5.26-.833l-.863-3.417 2.706-2.257c.268-.22.375-.537.28-.827-.094-.291-.367-.485-.711-.506L8.83 3.793 7.52.523C7.393.201 7.125 0 6.82 0c-.306 0-.575.2-.7.52L4.808 3.794l-3.515.235c-.346.021-.62.215-.714.505-.095.29.013.608.279.827l2.707 2.258z"
        fill={props.color ? props.color : '#4B66EA'}
      />
    </Svg>
  );
}

const SvgStar = React.memo(SvgComponent);
export default SvgStar;
