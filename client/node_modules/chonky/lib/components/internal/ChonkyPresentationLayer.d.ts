/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */
import React from 'react';
import { ErrorMessageData } from '../../types/validation.types';
export interface ChonkyPresentationLayerProps {
    validationErrors: ErrorMessageData[];
}
export declare const ChonkyPresentationLayer: React.FC<ChonkyPresentationLayerProps>;
