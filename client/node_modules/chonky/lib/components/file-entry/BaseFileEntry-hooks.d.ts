/// <reference types="react" />
import { Nilable, Nullable } from 'tsdef';
import { FileData } from '../../types/files.types';
import { ChonkyIconName } from '../../types/icons.types';
export declare const useDndIcon: (selected: Nilable<boolean>, isDragging: Nilable<boolean>, isOver: Nilable<boolean>, canDrop: Nilable<boolean>) => Nullable<ChonkyIconName>;
export declare const useThumbnailUrl: (file: Nullable<FileData>, setThumbnailUrl: (url: string) => void, setThumbnailLoading: (state: boolean) => void) => void;
export declare const useModifierIconComponents: (file: Nullable<FileData>) => JSX.Element[];
export declare const useFileNameComponent: (file: Nullable<FileData>) => JSX.Element;
