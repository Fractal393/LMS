/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2019
 * @license MIT
 */
import React from 'react';
import { ActionGroupData } from '../../types/file-actions.types';
export interface ToolbarButtonGroupProps {
    group: ActionGroupData;
}
export declare const ToolbarButtonGroup: React.FC<ToolbarButtonGroupProps>;
