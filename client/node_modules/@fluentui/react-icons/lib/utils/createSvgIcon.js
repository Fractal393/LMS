import { __assign } from "tslib";
import * as React from 'react';
import { css, getNativeProps, htmlElementProperties } from '@uifabric/utilities';
import * as classes from './SvgIcon.scss';
var createSvgIcon = function (_a) {
    var svg = _a.svg, displayName = _a.displayName;
    var Component = function (props) {
        var _a;
        var className = props.className, _b = props.style, style = _b === void 0 ? {} : _b;
        var nativeProps = getNativeProps(props, htmlElementProperties);
        var containerProps = props['aria-label']
            ? {}
            : (_a = {
                    role: 'presentation'
                },
                _a['aria-hidden'] = true,
                _a);
        return React.createElement('span', __assign(__assign(__assign({}, containerProps), nativeProps), { className: css(classes.root, className), style: style }), svg({ classes: classes, props: props }));
    };
    Component.displayName = displayName;
    return Component;
};
export default createSvgIcon;
//# sourceMappingURL=createSvgIcon.js.map