import { Nullable } from 'tsdef';
import { FileData } from '../../types/files.types';
import { KeyboardClickEvent, MouseClickEvent } from '../internal/ClickableWrapper';
export declare const useFileClickHandlers: (file: Nullable<FileData>, displayIndex: number) => {
    onSingleClick: (event: MouseClickEvent) => void;
    onDoubleClick: (event: MouseClickEvent) => void;
    onKeyboardClick: (event: KeyboardClickEvent) => void;
};
