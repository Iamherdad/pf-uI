var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import classNames from "classnames";
var Button = function (props) {
    var _a;
    var _b = props.btnType, btnType = _b === void 0 ? "default" : _b, className = props.className, size = props.size, _c = props.disable, disable = _c === void 0 ? false : _c, children = props.children, href = props.href, shape = props.shape, restProps = __rest(props, ["btnType", "className", "size", "disable", "children", "href", "shape"]);
    //类名，BtnType or BtnSize存在时会被赋值类名btn-${}
    var classNamess = classNames("pf-btn", className, (_a = {},
        _a["pf-btn-".concat(btnType)] = btnType,
        _a["pf-btn-".concat(size)] = size,
        _a["pf-btn-".concat(shape)] = shape,
        _a.disable = btnType === "link" && disable,
        _a));
    if (btnType === "link" && href) {
        return (React.createElement("a", __assign({ className: classNamess, href: href }, restProps), children));
    }
    else {
        return (React.createElement("button", __assign({ disabled: disable, className: classNamess }, restProps), children));
    }
};
export default Button;
// export { BtnType, BtnSize };
