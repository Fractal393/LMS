import { Nullable } from 'tsdef';
import { FileAction } from '../types/file-actions.types';
import { FileArray } from '../types/files.types';
import { ErrorMessageData } from '../types/validation.types';
export declare const isPlainObject: (value: any) => value is object;
export declare const isFunction: (value: any) => value is Function;
export declare const isMobileDevice: () => boolean;
/**
 * This function validates the user-provided files array. It checks the following
 * criteria:
 * - `files` is not an array
 * - there are duplicate file IDs
 * - some files are missing `id` field
 * - some files are missing `name` field
 * - some files have invalid type (they are neither an object nor `null`)
 */
export declare const cleanupFileArray: <AllowNull extends boolean>(fileArray: AllowNull extends false ? FileArray : Nullable<FileArray>, allowNull: AllowNull) => {
    cleanFileArray: AllowNull extends false ? FileArray : Nullable<FileArray>;
    warningMessage: Nullable<string>;
    warningBullets: string[];
};
export declare const useFileArrayValidation: (files: FileArray, folderChain: Nullable<FileArray>) => {
    cleanFiles: FileArray;
    cleanFolderChain: Nullable<FileArray>;
    errorMessages: ErrorMessageData[];
};
export declare const useFileActionsValidation: (fileActions: FileAction[], defaultFileActions: FileAction[], includeDefaultFileActions: boolean) => {
    cleanFileActions: FileAction[];
    errorMessages: ErrorMessageData[];
};
/**
 * This function validates the user-provided file actions array. It checks the following
 * criteria:
 * - `files` is not an array
 * - there are duplicate file action IDs
 * - some file actions are missing `id` field
 * - some files have invalid type (they are not objects)
 */
export declare const cleanupFileActions: (fileActions: FileAction[]) => {
    cleanFileActions: FileAction[];
    warningMessage: Nullable<string>;
    warningBullets: string[];
};
