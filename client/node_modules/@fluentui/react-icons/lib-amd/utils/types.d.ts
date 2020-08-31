import * as React from 'react';
import { ISvgIconProps } from './SvgIcon.types';
export declare type SvgIconFuncArg<TProps = ISvgIconProps> = {
    classes: {
        [iconSlot: string]: string;
    };
    props: TProps;
};
export declare type SvgIconChildrenFn<TProps = ISvgIconProps> = (svgIcon: SvgIconFuncArg<TProps>) => React.ReactNode;
export declare type SvgIconCreateFnParams<TProps> = {
    svg: SvgIconChildrenFn<TProps & ISvgIconProps>;
    displayName: string;
};
export declare type SvgIconFuncWithRootArg<TProps = ISvgIconProps> = {
    classes: {
        [iconSlot: string]: string;
    };
    props: TProps;
    processedRootProps: React.HTMLAttributes<HTMLElement>;
};
export declare type SvgIconChildrenFnWithRoot<TProps = ISvgIconProps> = (svgIcon: SvgIconFuncWithRootArg<TProps>) => React.ReactElement;
export declare type SvgIconCreateFnWithRootParams<TProps> = {
    children: SvgIconChildrenFnWithRoot<TProps & ISvgIconProps>;
    displayName: string;
};
