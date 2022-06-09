import React, { FC } from "react";
import { UploadFile } from "./Upload";
import Icon from "../Icon/index";
import Progress from "../Progress/index";
export type UploadListProps = {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
};
const UpLoadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;
  return (
    <ul className="pf-upload-list">
      {fileList.map((item) => {
        return (
          <li className="pf-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon="file-alt" theme="secondary"></Icon>
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === "Uploading" || item.status === "ready") && (
                <Icon icon="spinner" spin theme="primary" />
              )}
              {item.status === "success" && (
                <Icon icon="check-circle" theme="success" />
              )}
              {item.status === "error" && (
                <Icon icon="times-circle" theme="danger" />
              )}
            </span>
            <span className="file-actions">
              <Icon
                icon="times"
                onClick={() => {
                  onRemove(item);
                }}
              />
            </span>
            {item.status === "Uploading" && (
              <Progress percent={item.percent || 0}></Progress>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default UpLoadList;
