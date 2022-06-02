import React, { FC } from "react";
import classNames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}
const Icon: FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  const classNamess = classNames("pf-icon", className, {
    [`icon-${theme}`]: theme,
  });
  return (
    <FontAwesomeIcon className={classNamess} {...restProps}></FontAwesomeIcon>
  );
};

export default Icon;
