import { FC } from "react";
import { MenuProps } from "./Menu";
import { MenuItemProps } from "./MenuItem";
import { SubMenuProps } from "./SubMenu";
export declare type ImenuComponents = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const Imenu: ImenuComponents;
export default Imenu;
