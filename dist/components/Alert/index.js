import React, { useState } from "react";
import classNames from "classnames";
var Alert = function (props) {
    var _a;
    var _b = props.type, type = _b === void 0 ? "info" : _b, message = props.message, className = props.className, description = props.description, _c = props.closable, closable = _c === void 0 ? false : _c, _d = props.onClose, onClose = _d === void 0 ? function () { } : _d;
    var _e = useState(true), alertIsshow = _e[0], setIsshow = _e[1];
    var classNamess = classNames("pf-alert", className, (_a = {},
        _a["alert-".concat(type)] = type,
        _a));
    var AlertClose = function () {
        setIsshow(false);
        onClose();
    };
    return (alertIsshow && (React.createElement("div", { className: classNamess, style: { display: "block" } },
        React.createElement("div", { className: "alert-content" },
            React.createElement("div", { className: "alert-message" }, message),
            React.createElement("div", { className: "alert-description" }, description)),
        closable && (React.createElement("button", { className: "alert-closable", onClick: AlertClose },
            React.createElement("svg", { className: "icon", "aria-hidden": "true" },
                React.createElement("use", { xlinkHref: "#icon-guanbi1" })))))));
};
export default Alert;
