import { FC } from "react";
declare type AlertProps = {
    type?: "success" | "info" | "warning" | "error";
    message: string;
    className?: string;
    description?: string;
    closable?: boolean;
    onClose?: () => void;
};
declare const Alert: FC<AlertProps>;
export default Alert;
