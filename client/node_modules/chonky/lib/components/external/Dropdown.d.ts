/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from 'react';
import { ActionGroupData } from '../../types/file-actions.types';
export interface DropdownProps {
    group: ActionGroupData;
}
export declare const Dropdown: React.FC<DropdownProps>;
