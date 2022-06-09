import { FC, ReactNode } from "react";
export interface SubMenuProps {
    index?: string;
    title?: string;
    className?: string;
    children?: ReactNode | any;
}
declare const SubMenu: FC<SubMenuProps>;
export default SubMenu;
