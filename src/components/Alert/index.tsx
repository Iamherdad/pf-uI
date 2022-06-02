import React, { FC, useState } from "react";
import classNames from "classnames";

type AlertProps = {
  type?: "success" | "info" | "warning" | "error";
  message: string;
  className?: string;
  description?: string;
  closable?: boolean; //是否显示关闭列表
  onClose?: () => void; //关闭后的回调
};
const Alert: FC<AlertProps> = (props): any => {
  const {
    type = "info",
    message,
    className,
    description,
    closable = false,
    onClose = () => {},
  } = props;
  const [alertIsshow, setIsshow] = useState(true);
  const classNamess = classNames("pf-alert", className, {
    [`alert-${type}`]: type,
  });
  const AlertClose = () => {
    setIsshow(false);
    onClose();
  };

  return (
    alertIsshow && (
      <div className={classNamess} style={{ display: "block" }}>
        <div className="alert-content">
          <div className="alert-message">{message}</div>
          <div className="alert-description">{description}</div>
        </div>

        {closable && (
          <button className="alert-closable" onClick={AlertClose}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-guanbi1"></use>
            </svg>
          </button>
        )}
      </div>
    )
  );
};

export default Alert;
