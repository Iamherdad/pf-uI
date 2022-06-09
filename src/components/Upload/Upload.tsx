import React, { ChangeEvent, FC, useRef, useState } from "react";
import axios from "axios";

import UpLoadList from "./UploadList";
import Dragger from "./Dragger";
export type UploadFile = {
  uid: string;
  size: number;
  name: string;
  status?: "ready" | "Uploading" | "success" | "error";
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
};
export type UploadProps = {
  action: string;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onsuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  // defaultFileList?: UploadFile[];
  onRemove?: (file: UploadFile) => void;
  headers?: { [key: string]: any };
  name?: string;
  data?: { [key: string]: any };
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
  drag?: boolean;
  Children?: any;
};
const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    onProgress,
    onsuccess,
    onError,
    beforeUpload,
    onChange,
    onRemove,
    // defaultFileList,
    headers,
    name = "file",
    data,
    withCredentials,
    accept,
    multiple,
    drag,
    Children = "点击上传",
  } = props;

  const fileIptRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };
  const handleClick = () => {
    if (fileIptRef.current) {
      fileIptRef.current.click();
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileIptRef.current) {
      fileIptRef.current.value = "";
    }
  };
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach((item) => {
      if (!beforeUpload) {
        post(item);
      } else {
        const result = beforeUpload(item);
        if (result && result instanceof Promise) {
          result.then((res) => {
            post(res);
          });
        } else if (result !== false) {
          post(item);
        }
      }
    });
  };
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + "upload-file",
      status: "ready",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    // setFileList([_file, ...fileList]);
    setFileList((pri) => {
      return [_file, ...pri];
    });
    const formData = new FormData();
    formData.append(name || "file", file);
    if (data) {
      Object.keys(data).forEach((item) => {
        formData.append(item, data[item]);
      });
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          "Content-Type": "mutipart/form-data",
        },
        withCredentials,
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;

          if (percentage < 100) {
            updateFileList(_file, { percent: percentage, status: "Uploading" });
            if (onProgress) {
              onProgress(percentage, file);
            }
          }
        },
      })
      .then((res) => {
        updateFileList(_file, { status: "success", response: res.data });
        if (onsuccess) {
          onsuccess(res.data, file);
        }
        if (onChange) {
          onChange(file);
        }
      })
      .catch((err) => {
        updateFileList(_file, { status: "error", response: err });
        console.log(err);
        if (onError) {
          onError(err, file);
        }
        if (onChange) {
          onChange(file);
        }
      });
  };
  const handleRemove = (file: UploadFile) => {
    setFileList((pre) => {
      return pre.filter((item) => {
        return item.uid !== file.uid;
      });
    });
    if (onRemove) onRemove(file);
  };
  return (
    <div className="pf-upload">
      <div onClick={handleClick}>
        {drag ? (
          <Dragger
            onFile={(files) => {
              uploadFiles(files);
            }}
          >
            {Children}
          </Dragger>
        ) : (
          Children
        )}
      </div>
      <input
        type="file"
        className="pf-ipt-file"
        style={{ display: "none" }}
        ref={fileIptRef}
        onChange={handleFileChange}
        multiple={multiple}
        accept={accept}
      />
      <UpLoadList fileList={fileList} onRemove={handleRemove}></UpLoadList>
    </div>
  );
};
export default Upload;
