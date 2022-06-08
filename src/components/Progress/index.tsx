import React, { FC } from "react";
import { ThemeProps } from "../Icon";
type ProgressProps = {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
};
const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight = 15,
    showText = true,
    styles,
    theme = "primary",
  } = props;
  return (
    <div className="pf-progress-bar" style={styles}>
      <div
        className="pf-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`pf-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};
export default Progress;
