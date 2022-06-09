import classNames from "classnames";
import React, { createContext, useState } from "react";
export var MenuContext = createContext({ index: "0" });
var Menu = function (props) {
    var className = props.className, _a = props.defaultIndex, defaultIndex = _a === void 0 ? "0" : _a, _b = props.mode, mode = _b === void 0 ? "horizontal" : _b, style = props.style, onSelect = props.onSelect, children = props.children, _c = props.defaultOpenSubMenu, defaultOpenSubMenu = _c === void 0 ? [] : _c;
    var _d = useState(defaultIndex), currentActive = _d[0], setActive = _d[1];
    var classNamess = classNames("pf-menu", className, {
        "pf-menu-vertical": mode === "vertical",
        "menu-horizontal": mode !== "vertical",
    });
    var handleClick = function (index) {
        setActive(index);
        onSelect && onSelect(index);
    };
    var passedContext = {
        index: currentActive ? currentActive : "0",
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenu: defaultOpenSubMenu,
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return React.cloneElement(childElement, { index: index.toString() });
            }
            else {
                return console.log("%c Waring:Menu只支持MenuItem作为子节点", "color:red;font-size:14px");
            }
        });
    };
    return (React.createElement("ul", { className: classNamess, style: style },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
export default Menu;
