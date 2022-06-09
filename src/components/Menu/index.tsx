import { FC } from "react";
import Menu, { MenuProps } from "./Menu";
import MenuItem, { MenuItemProps } from "./MenuItem";
import SubMenu, { SubMenuProps } from "./SubMenu";

export type ImenuComponents = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};
const Imenu = Menu as ImenuComponents;
Imenu.Item = MenuItem;
Imenu.SubMenu = SubMenu;

export default Imenu;
