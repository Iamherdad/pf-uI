import React, {
  FC,
  ReactElement,
  InputHTMLAttributes,
  ChangeEvent,
  useState,
  useEffect,
} from "react";
import classNames from "classnames";
import Icon from "../Icon";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type InputProps = {
  disable?: boolean;
  size?: "lg" | "sm";
  icon?: IconProp;
  prepand?: string | ReactElement;
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
} & InputHTMLAttributes<HTMLElement>;

const Input: FC<InputProps> = (props) => {
  const {
    disabled = false,
    size,
    icon,
    prepand,
    append,
    className,
    defaultValue = "",
    onChange = () => {},
    ...reset
  } = props;
  useEffect(() => {
    setDefaultVal(defaultValue);
  }, [defaultValue]);
  const [dafaultVal, setDefaultVal] = useState(defaultValue || "");
  const classNamess = classNames("pf-ipt", className, {});
  const valChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setDefaultVal(e.target.value);
  };

  return (
    <div className="pf-ipt-container">
      {prepand && <div className="pf-prepand">{prepand}</div>}
      <input
        type="text"
        className={classNamess}
        disabled={disabled}
        onChange={(e) => valChange(e)}
        // defaultValue={"6226"}
        value={dafaultVal}
        {...reset}
      ></input>
      {icon && (
        <Icon icon={icon || "search"} theme="primary" className="pf-ipt-icon" />
      )}
      {append && <div className="pf-append">{append}</div>}
    </div>
  );
};

export default Input;
