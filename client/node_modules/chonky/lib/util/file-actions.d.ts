import { Nullable } from 'tsdef';
import { FileAction, FileActionHandler } from '../types/file-actions.types';
import { ChonkyIconName } from '../types/icons.types';
export declare const useFileActions: (fileActions: FileAction[], externalFileActonHandler: Nullable<FileActionHandler>) => {
    internalFileActionDispatcher: import("../types/file-actions.types").InternalFileActionDispatcher;
    internalFileActionRequester: (fileActionId: string) => void;
};
export declare const useFileActionTrigger: (fileActionId: string) => () => void;
export declare const useFileActionProps: (fileActionId: string) => {
    icon: Nullable<ChonkyIconName | string>;
    active: boolean;
    disabled: boolean;
};
