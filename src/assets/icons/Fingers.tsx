import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const FingersSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon width="20" height="20" viewBox="0 0 20 20" {...props}>
        <path d="M0 16.12H16V0.12H0V16.12Z" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_1_41" transform="scale(0.00625)"/>
        </pattern>
        <image id="image0_1_41" width="160" height="160" xlinkHref="data:image/png;base64,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"/>
        </defs>
    </SvgIcon>
  );
};

export default FingersSvg;