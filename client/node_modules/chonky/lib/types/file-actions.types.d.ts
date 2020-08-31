import { FileData, FileFilter } from './files.types';
import { ChonkyIconName } from './icons.types';
import { FileSortKeySelector } from './sort.types';
import { SpecialAction } from './special-actions.types';
export interface FileAction {
    id: string;
    metadata?: any;
    requiresSelection?: boolean;
    fileFilter?: FileFilter;
    hotkeys?: readonly string[];
    toolbarButton?: ToolbarButtonData;
    sortKeySelector?: FileSortKeySelector;
    option?: {
        id: string;
        defaultValue: boolean;
    };
    specialActionToDispatch?: SpecialAction;
}
export interface FileActionData {
    actionId: string;
    target?: FileData;
    files?: FileData[];
}
export declare type FileActionHandler = (action: FileAction, data: FileActionData) => void | Promise<void>;
export declare type InternalFileActionDispatcher = (actionData: FileActionData) => void;
export declare type InternalFileActionRequester = (actionId: string) => void;
export interface ActionGroupData {
    name?: string;
    dropdown?: boolean;
    fileActionIds: string[];
}
export interface ToolbarButtonData {
    name: string;
    group?: string;
    dropdown?: boolean;
    tooltip?: string;
    icon?: ChonkyIconName | string;
    iconOnly?: boolean;
}
