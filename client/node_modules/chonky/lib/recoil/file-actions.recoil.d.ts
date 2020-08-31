import { Nullable } from 'tsdef';
import { FileAction, InternalFileActionDispatcher, InternalFileActionRequester } from '../types/file-actions.types';
import { FileData } from '../types/files.types';
export declare const fileActionsState: import("recoil").RecoilState<FileAction[]>;
export declare const fileActionMapState: import("recoil").RecoilState<{
    [fileActionId: string]: FileAction;
}>;
export declare const dispatchFileActionState: import("recoil").RecoilState<InternalFileActionDispatcher>;
export declare const requestFileActionState: import("recoil").RecoilState<InternalFileActionRequester>;
export declare const doubleClickDelayState: import("recoil").RecoilState<number>;
export declare const fileActionDataState: (param: string) => import("recoil").RecoilValueReadOnly<Nullable<FileAction>>;
/**
 * This Recoil selector family returns a subset of the global file selection that
 * satisfies filter of the provided file action.
 */
export declare const fileActionSelectedFilesState: (param: string) => import("recoil").RecoilValueReadOnly<readonly FileData[]>;
export declare const fileActionSelectedFilesCountState: (param: string) => import("recoil").RecoilValueReadOnly<number>;
