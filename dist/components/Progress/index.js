import React from "react";
var Progress = function (props) {
    var percent = props.percent, _a = props.strokeHeight, strokeHeight = _a === void 0 ? 15 : _a, _b = props.showText, showText = _b === void 0 ? true : _b, styles = props.styles, _c = props.theme, theme = _c === void 0 ? "primary" : _c;
    return (React.createElement("div", { className: "pf-progress-bar", style: styles },
        React.createElement("div", { className: "pf-progress-bar-outer", style: { height: "".concat(strokeHeight, "px") } },
            React.createElement("div", { className: "pf-progress-bar-inner color-".concat(theme), style: { width: "".concat(percent, "%") } }, showText && React.createElement("span", { className: "inner-text" }, "".concat(percent, "%"))))));
};
export default Progress;
