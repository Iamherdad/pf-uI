import React from "react";
declare type BtnType = "primary" | "ghost" | "link" | "text" | "dashed" | "default" | "danger";
declare type BtnSize = "large" | "small";
declare type BtnShape = "round";
declare type BtnProps = {
    btnType?: BtnType;
    size?: BtnSize;
    shape?: BtnShape;
    disable?: boolean;
    className?: string;
    children?: React.ReactNode;
    href?: string;
};
declare type NativeButtonProps = BtnProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BtnProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
