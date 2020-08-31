/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2019
 * @license MIT
 */
import { Nullable } from 'tsdef';
import { FileData } from '../types/files.types';
import { FileIconData } from '../types/icons.types';
export declare const useIconData: (file: Nullable<FileData>) => FileIconData;
export declare const VideoExtensions: string[];
export declare const ImageExtensions: string[];
export declare const AudioExtensions: string[];
export declare const ColorsLight: string[];
export declare const ColorsDark: string[];
