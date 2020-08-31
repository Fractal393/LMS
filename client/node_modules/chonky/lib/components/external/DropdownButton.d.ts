/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from 'react';
import { Nullable } from 'tsdef';
import { ChonkyIconName } from '../../types/icons.types';
export interface DropdownButtonProps {
    text: string;
    tooltip?: string;
    active?: boolean;
    icon?: Nullable<ChonkyIconName | string>;
    onClick?: () => void;
    disabled?: boolean;
}
export declare const DropdownButton: React.FC<DropdownButtonProps>;
export interface SmartDropdownButtonProps {
    fileActionId: string;
}
export declare const SmartDropdownButton: React.FC<SmartDropdownButtonProps>;
