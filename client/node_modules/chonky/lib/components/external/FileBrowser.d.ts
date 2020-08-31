import React, { ReactNode } from 'react';
import { FileBrowserHandle, FileBrowserProps } from '../../types/file-browser.types';
export declare const FileBrowser: React.ForwardRefExoticComponent<FileBrowserProps & {
    children?: ReactNode;
} & React.RefAttributes<FileBrowserHandle>>;
