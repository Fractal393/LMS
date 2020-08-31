/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from 'react';
export interface MouseClickEvent {
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
}
export declare type MouseClickEventHandler = (event: MouseClickEvent) => void;
export interface KeyboardClickEvent {
    enterKey: boolean;
    spaceKey: boolean;
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
}
export declare type KeyboardClickEventHandler = (event: KeyboardClickEvent) => void;
export interface ClickableWrapperProps {
    wrapperTag: any;
    passthroughProps?: any;
    onSingleClick?: MouseClickEventHandler;
    onDoubleClick?: MouseClickEventHandler;
    onKeyboardClick?: KeyboardClickEventHandler;
}
export declare const ClickableWrapper: React.FC<ClickableWrapperProps>;
