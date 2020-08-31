import React from 'react';
import { Nullable } from 'tsdef';
import { ChonkyIconName } from '../../types/icons.types';
export interface ToolbarButtonProps {
    text: string;
    tooltip?: string;
    active?: boolean;
    icon?: Nullable<ChonkyIconName | string>;
    iconOnly?: boolean;
    iconOnRight?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}
export declare const ToolbarButton: React.FC<ToolbarButtonProps>;
export interface SmartToolbarButtonProps {
    fileActionId: string;
}
export declare const SmartToolbarButton: React.FC<SmartToolbarButtonProps>;
