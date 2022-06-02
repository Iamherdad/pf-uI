import React, { useContext, FC, ReactNode, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
import { MenuItemProps } from "./MenuItem";
import Icon from "../Icon";

interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
  children?: ReactNode | any;
}
const SubMenu: FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props;

  const context = useContext(MenuContext);
  const openSubMenus = context.defaultOpenSubMenu as string[];
  const isOpend =
    index && context.mode === "vertical" ? openSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpend);
  const classNamess = classNames("pf-menu-item", "submenu-item", className, {
    "is-active": context.index === index,
    "is-opened": menuOpen,
    "is-vertical": context.mode === "vertical",
  });
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  let time: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(time);
    e.preventDefault();
    time = setTimeout(() => {
      setOpen(toggle);
    }, 200);
  };
  const clickEvents =
    context.mode === "vertical" ? { onClick: handleClick } : {};
  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  const renderChildren = () => {
    const subMenuClass = classNames("pf-submenu", {
      "menu-opened": menuOpen,
    });
    const childrenCompnents = React.Children.map(children, (child, i) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, { index: `${index}-${i}` });
      } else {
        console.log(
          "%c Waring:Menu只支持MenuItem作为子节点111",
          "color:red;font-size:14px"
        );
      }
    });
    return <ul className={subMenuClass}>{childrenCompnents} </ul>;
  };
  return (
    <li key={index} className={classNamess} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu";
export default SubMenu;
