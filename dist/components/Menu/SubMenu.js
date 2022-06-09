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
import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
import Icon from "../Icon";
var SubMenu = function (props) {
    var index = props.index, title = props.title, className = props.className, children = props.children;
    var context = useContext(MenuContext);
    var openSubMenus = context.defaultOpenSubMenu;
    var isOpend = index && context.mode === "vertical" ? openSubMenus.includes(index) : false;
    var _a = useState(isOpend), menuOpen = _a[0], setOpen = _a[1];
    var classNamess = classNames("pf-menu-item", "submenu-item", className, {
        "is-active": context.index === index,
        "is-opened": menuOpen,
        "is-vertical": context.mode === "vertical",
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var time;
    var handleMouse = function (e, toggle) {
        clearTimeout(time);
        e.preventDefault();
        time = setTimeout(function () {
            setOpen(toggle);
        }, 200);
    };
    var clickEvents = context.mode === "vertical" ? { onClick: handleClick } : {};
    var hoverEvents = context.mode !== "vertical"
        ? {
            onMouseEnter: function (e) {
                handleMouse(e, true);
            },
            onMouseLeave: function (e) {
                handleMouse(e, false);
            },
        }
        : {};
    var renderChildren = function () {
        var subMenuClass = classNames("pf-submenu", {
            "menu-opened": menuOpen,
        });
        var childrenCompnents = React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === "MenuItem") {
                return React.cloneElement(childElement, { index: "".concat(index, "-").concat(i) });
            }
            else {
                console.log("%c Waring:Menu只支持MenuItem作为子节点111", "color:red;font-size:14px");
            }
        });
        return React.createElement("ul", { className: subMenuClass },
            childrenCompnents,
            " ");
    };
    return (React.createElement("li", __assign({ key: index, className: classNamess }, hoverEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            React.createElement(Icon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
