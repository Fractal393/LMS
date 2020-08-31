import { Nullable } from 'tsdef';
import { FileData } from './files.types';
export declare type FileSortKeySelector = (file: Nullable<FileData>) => any;
export declare enum SortOrder {
    Asc = "asc",
    Desc = "desc"
}
export interface SortConfig {
    fileActionId: string;
    sortKeySelector: FileSortKeySelector;
    order: SortOrder;
}
