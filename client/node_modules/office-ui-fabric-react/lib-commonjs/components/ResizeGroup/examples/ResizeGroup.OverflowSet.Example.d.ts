import * as React from 'react';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
export interface IOverflowData {
    primary: IContextualMenuItem[];
    overflow: IContextualMenuItem[];
    cacheKey?: string;
}
export declare const ResizeGroupOverflowSetExample: React.FunctionComponent;
