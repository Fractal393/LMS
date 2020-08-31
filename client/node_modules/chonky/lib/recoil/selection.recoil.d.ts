import { FileSelection, SelectionModifiers } from '../types/selection.types';
export declare const selectionState: import("recoil").RecoilState<FileSelection>;
export declare const selectionModifiersState: import("recoil").RecoilState<SelectionModifiers>;
export declare const selectedFilesState: import("recoil").RecoilValueReadOnly<import("..").FileData[]>;
export declare const selectionSizeState: import("recoil").RecoilValueReadOnly<number>;
export declare const fileSelectedState: (param: string | null) => import("recoil").RecoilValueReadOnly<boolean>;
