/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from 'react';
import { Nullable } from 'tsdef';
export interface FileThumbnailProps {
    thumbnailUrl: Nullable<string>;
}
export declare const FileThumbnail: React.FC<FileThumbnailProps>;
