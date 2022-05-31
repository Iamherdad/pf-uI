import { type } from "@testing-library/user-event/dist/type";
import classNames from "classnames";
import React, { FC, createContext, useState } from "react";
import { MenuItemProps } from "./MenuItem";
type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  className?: string; //类名
  defaultIndex?: String; //默认高亮
  mode?: MenuMode; //类型，横向or纵向
  style?: React.CSSProperties; //样式
  onSelect?: (selectIndex: string) => void; //menu.item点击事件回调
  children: React.ReactNode; //children
  defaultOpenSubMenu?: string[];
}
interface IMenuContext {
  index: String;
  onSelect?: (selectIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenu?: string[];
}
export const MenuContext = createContext<IMenuContext>({ index: "0" });
const Menu: FC<MenuProps> = (props) => {
  const {
    className,
    defaultIndex = "0",
    mode = "horizontal",
    style,
    onSelect,
    children,
    defaultOpenSubMenu = [],
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classNamess = classNames("pf-menu", className, {
    "pf-menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  const handleClick = (index: string) => {
    setActive(index);
    onSelect && onSelect(index);
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenu,
  };
  //检测Menu子节点是否为MenuItem
  type IRenderChildren = () => React.ReactNode | any;
  const renderChildren: IRenderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        return console.log(
          "%c Waring:Menu只支持MenuItem作为子节点",
          "color:red;font-size:14px"
        );
      }
    });
  };
  return (
    <ul className={classNamess} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
        {/* {children} */}
      </MenuContext.Provider>
    </ul>
  );
};
export default Menu;
