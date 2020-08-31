/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from 'react';
import { Nilable } from 'tsdef';
import { KeyboardClickEventHandler, MouseClickEventHandler } from './ClickableWrapper';
export declare const useClickHandler: (onSingleClick: Nilable<MouseClickEventHandler>, onDoubleClick: Nilable<MouseClickEventHandler>) => (event: React.MouseEvent) => void;
export declare const useKeyDownHandler: (onKeyboardClick?: KeyboardClickEventHandler | undefined) => (event: React.KeyboardEvent) => void;
