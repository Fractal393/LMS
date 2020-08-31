import * as React from 'react';
import { ISvgIconProps } from './SvgIcon.types';
import { SvgIconCreateFnParams } from './types';
declare const createSvgIcon: <TProps = {}>({ svg, displayName }: SvgIconCreateFnParams<TProps>) => React.FC<React.HTMLAttributes<HTMLSpanElement> & TProps & ISvgIconProps>;
export default createSvgIcon;
