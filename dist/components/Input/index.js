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
import React, { useState, useEffect, } from "react";
import classNames from "classnames";
import Icon from "../Icon";
var Input = function (props) {
    var _a = props.disabled, disabled = _a === void 0 ? false : _a, size = props.size, icon = props.icon, prepand = props.prepand, append = props.append, className = props.className, _b = props.defaultValue, defaultValue = _b === void 0 ? "" : _b, _c = props.onChange, onChange = _c === void 0 ? function () { } : _c, reset = __rest(props, ["disabled", "size", "icon", "prepand", "append", "className", "defaultValue", "onChange"]);
    useEffect(function () {
        setDefaultVal(defaultValue);
    }, [defaultValue]);
    var _d = useState(defaultValue || ""), dafaultVal = _d[0], setDefaultVal = _d[1];
    var classNamess = classNames("pf-ipt", className, {});
    var valChange = function (e) {
        onChange(e);
        setDefaultVal(e.target.value);
    };
    return (React.createElement("div", { className: "pf-ipt-container" },
        prepand && React.createElement("div", { className: "pf-prepand" }, prepand),
        React.createElement("input", __assign({ type: "text", className: classNamess, disabled: disabled, onChange: function (e) { return valChange(e); }, 
            // defaultValue={"6226"}
            value: dafaultVal }, reset)),
        icon && (React.createElement(Icon, { icon: icon || "search", theme: "primary", className: "pf-ipt-icon" })),
        append && React.createElement("div", { className: "pf-append" }, append)));
};
export default Input;
