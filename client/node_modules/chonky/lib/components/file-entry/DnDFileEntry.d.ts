import React from 'react';
import { DragObjectWithType } from 'react-dnd';
import { Nullable } from 'tsdef';
import { FileData } from '../../types/files.types';
import { FileEntryProps } from './BaseFileEntry';
export interface DnDProps {
    dndIsDragging?: boolean;
    dndIsOver?: boolean;
    dndCanDrop?: boolean;
}
export declare type DnDFileEntryItem = DragObjectWithType & {
    file: Nullable<FileData>;
};
export declare const DnDFileEntryType = "chonky-file-entry";
export declare const DnDFileEntry: React.FC<FileEntryProps>;
