/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from 'react';
import { Nullable } from 'tsdef';
export interface SmartFileEntryProps {
    fileId: Nullable<string>;
    displayIndex: number;
}
export declare const SmartFileEntry: React.FC<SmartFileEntryProps>;
