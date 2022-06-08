import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import axios from "axios";
import Button from "../Button";
import UpLoadList from "./UploadList";
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
type UploadProps = {
  action: string;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onsuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  defaultFileList?: UploadFile[];
  onRemove?: (file: UploadFile) => void;
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
    defaultFileList,
  } = props;
  const defaultVal: UploadFile[] = [
    { uid: "123", size: 123, name: "hellos", status: "ready", percent: 30 },
    {
      uid: "1234",
      size: 1234,
      name: "helloss",
      status: "success",
      percent: 30,
    },
    {
      uid: "12345",
      size: 1234,
      name: "error",
      status: "error",
      percent: 30,
    },
    {
      uid: "123456",
      size: 1234,
      name: "hellossss",
      status: "Uploading",
      percent: 30,
    },
  ];
  const fileIptRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>(defaultVal || []);
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
    setFileList([_file, ...fileList]);
    const formData = new FormData();
    formData.append(file.name, file);
    axios
      .post(action, formData, {
        headers: {
          "Content-Type": "mutipart/form-data",
        },
        onUploadProgress: (e) => {
          console.log(e);

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
      <Button btnType="primary" onClick={handleClick}>
        点击上传
      </Button>
      <input
        type="file"
        className="pf-ipt-file"
        style={{ display: "none" }}
        ref={fileIptRef}
        onChange={handleFileChange}
      />
      <UpLoadList fileList={fileList} onRemove={handleRemove}></UpLoadList>
    </div>
  );
};
export default Upload;
