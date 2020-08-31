import React from 'react';
import { Nullable } from 'tsdef';
import { FileData } from '../../types/files.types';
import { DnDProps } from './DnDFileEntry';
export interface FileEntryProps extends DnDProps {
    file: Nullable<FileData>;
    displayIndex: number;
    selected: boolean;
    style?: React.CSSProperties;
}
export declare const BaseFileEntry: React.FC<FileEntryProps>;
