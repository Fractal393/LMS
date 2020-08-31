import * as React from 'react';
import { IContextualMenuItem } from 'office-ui-fabric-react';
export interface IOverflowData {
    primary: IContextualMenuItem[];
    overflow: IContextualMenuItem[];
    cacheKey?: string;
}
export declare const ResizeGroupVerticalOverflowSetExample: React.FunctionComponent;
