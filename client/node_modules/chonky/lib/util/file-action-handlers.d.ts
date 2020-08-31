import { Nullable } from 'tsdef';
import { FileActionHandler, InternalFileActionDispatcher } from '../types/file-actions.types';
export declare const useInternalFileActionDispatcher: (externalFileActonHandler: Nullable<FileActionHandler>) => InternalFileActionDispatcher;
export declare const useInternalFileActionRequester: () => (fileActionId: string) => void;
