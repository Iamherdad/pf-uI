import React, { Fragment, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
var MenuItem = function (props) {
    var index = props.index, className = props.className, disabled = props.disabled, style = props.style, children = props.children;
    var context = useContext(MenuContext);
    var classNamess = classNames("pf-menu-item", className, {
        "is-disabled": disabled,
        "is-active": context.index === index,
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && typeof index === "string") {
            context.onSelect(index);
        }
    };
    return (React.createElement(Fragment, null,
        React.createElement("li", { className: classNamess, style: style, onClick: handleClick }, children)));
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
