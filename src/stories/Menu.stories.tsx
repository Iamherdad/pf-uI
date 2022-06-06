import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Menu from "../components/Menu/Menu";
import MenuItem from "../components/Menu/MenuItem";
import SubMenu from "../components/Menu/SubMenu";
import "../styles/index.scss";
export default {
  title: "Example/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;
export const 基本的Menu: ComponentStory<typeof Menu> = () => (
  <>
    <Menu>
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
      <MenuItem>3</MenuItem>
      <MenuItem>4</MenuItem>
    </Menu>
  </>
);
export const 纵向的Menu: ComponentStory<typeof Menu> = () => (
  <>
    <Menu mode="vertical">
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
      <MenuItem>3</MenuItem>
      <MenuItem>4</MenuItem>
    </Menu>
  </>
);
export const 可禁用的Menu: ComponentStory<typeof Menu> = () => (
  <>
    <Menu>
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
      <MenuItem disabled>3</MenuItem>
    </Menu>
  </>
);
export const subMenu: ComponentStory<typeof Menu> = () => (
  <>
    <Menu>
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
      <MenuItem>3</MenuItem>
      <SubMenu title="submenu">
        <MenuItem>submenu1</MenuItem>
        <MenuItem>submenu2</MenuItem>
        <MenuItem>submenu3</MenuItem>
        <MenuItem>submenu4</MenuItem>
      </SubMenu>
    </Menu>
  </>
);

export const 纵向的subMenu: ComponentStory<typeof Menu> = () => (
  <>
    <Menu mode="vertical">
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
      <MenuItem>3</MenuItem>
      <SubMenu title="submenu">
        <MenuItem>submenu1</MenuItem>
        <MenuItem>submenu2</MenuItem>
        <MenuItem>submenu3</MenuItem>
        <MenuItem>submenu4</MenuItem>
      </SubMenu>
    </Menu>
  </>
);
