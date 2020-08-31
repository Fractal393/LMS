import React from 'react';
import { ChonkyIconName } from '../../types/icons.types';
export interface ChonkyIconProps {
    icon: ChonkyIconName | string;
    spin?: boolean;
    className?: string;
    color?: string;
    fixedWidth?: boolean;
    size?: 'xs' | 'lg' | 'sm';
    style?: React.CSSProperties;
}
export declare const ChonkyIconFA: React.FC<ChonkyIconProps>;
