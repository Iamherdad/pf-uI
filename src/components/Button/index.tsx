import React from "react";
import classNames from "classnames";

enum BtnType {
  primary = "primary",
  ghost = "ghost",
  link = "link",
  text = "text",
  dashed = "dashed",
  default = "default",
  danger = "danger",
}
enum BtnSize {
  large = "large",
  small = "small",
}

type BtnShape = "round";

type BtnProps = {
  btnType?: BtnType;
  size?: BtnSize;
  shape?: BtnShape;
  disable?: boolean;
  className?: string;
  children?: React.ReactNode;
  href?: string;
};
//获取button和a原生事件类型
type NativeButtonProps = BtnProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BtnProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType = "default",
    className,
    size,
    disable = false,
    children,
    href,
    shape,
    ...restProps
  } = props;

  //类名，BtnType or BtnSize存在时会被赋值类名btn-${}
  const classNamess = classNames("pf-btn", className, {
    [`pf-btn-${btnType}`]: btnType,
    [`pf-btn-${size}`]: size,
    [`pf-btn-${shape}`]: shape,
    disable: btnType === BtnType.link && disable,
  });

  if (btnType === "link" && href) {
    return (
      <a className={classNamess} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button disabled={disable} className={classNamess} {...restProps}>
        {children}
      </button>
    );
  }
};
export default Button;
export { BtnType, BtnSize };
