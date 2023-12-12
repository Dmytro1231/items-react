import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const UncheckedSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon width="20" height="20" viewBox="0 0 20 20" {...props}>
      <circle cx="10" cy="10" r="10" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6881 5.98101C15.8827 6.17696 15.8816 6.49354 15.6856 6.68812L8.30103 14.0215C8.10606 14.2151 7.79137 14.2151 7.5964 14.0215L4.31434 10.7622C4.1184 10.5676 4.1173 10.251 4.31188 10.0551C4.50646 9.85915 4.82304 9.85804 5.01898 10.0526L7.94872 12.962L14.981 5.97855C15.177 5.78397 15.4935 5.78507 15.6881 5.98101Z" fill="#667085"/>
    </SvgIcon>
  );
};

export default UncheckedSvg;