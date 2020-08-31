import { Nullable } from 'tsdef';
import { FileArray, FileData } from '../types/files.types';
export declare const filesState: import("recoil").RecoilState<FileArray>;
export declare const folderChainState: import("recoil").RecoilState<Nullable<FileArray>>;
export declare const parentFolderState: import("recoil").RecoilState<Nullable<FileData>>;
export declare const fileMapState: import("recoil").RecoilValueReadOnly<{
    [fileId: string]: FileData;
}>;
export declare const fileDataState: (param: string | null) => import("recoil").RecoilValueReadOnly<Nullable<FileData>>;
