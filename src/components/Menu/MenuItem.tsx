import React, { FC, Fragment, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";

export interface MenuItemProps {
  index?: string;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const MenuItem: FC<MenuItemProps> = (props) => {
  const { index, className, disabled, style, children } = props;
  const context = useContext(MenuContext);

  const classNamess = classNames("pf-menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === "string") {
      context.onSelect(index);
    }
  };
  return (
    <Fragment>
      <li className={classNamess} style={style} onClick={handleClick}>
        {children}
      </li>
    </Fragment>
  );
};
MenuItem.displayName = "MenuItem";
export default MenuItem;
