import React, { FC } from "react";
declare type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
    className?: string;
    defaultIndex?: String;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (selectIndex: string) => void;
    children: React.ReactNode;
    defaultOpenSubMenu?: string[];
}
interface IMenuContext {
    index: String;
    onSelect?: (selectIndex: string) => void;
    mode?: MenuMode;
    defaultOpenSubMenu?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: FC<MenuProps>;
export default Menu;
