import { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export declare type InputProps = {
    disable?: boolean;
    size?: "lg" | "sm";
    icon?: IconProp;
    prepand?: string | ReactElement;
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
} & InputHTMLAttributes<HTMLElement>;
declare const Input: FC<InputProps>;
export default Input;
