import React, { FC } from "react";
export interface MenuItemProps {
    index?: string;
    className?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
declare const MenuItem: FC<MenuItemProps>;
export default MenuItem;
