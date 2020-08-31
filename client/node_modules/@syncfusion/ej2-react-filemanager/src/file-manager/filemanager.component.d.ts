import * as React from 'react';
import { FileManager, FileManagerModel } from '@syncfusion/ej2-filemanager';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 Represents the Essential JS 2 react FileManager Component.
 * ```tsx
 * <FileManagerComponent showThumbnail={false}></FileManagerComponent>
 * ```
 */
export declare class FileManagerComponent extends FileManager {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<FileManagerModel & DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private immediateRender;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<FileManagerModel & DefaultHtmlAttributes>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
