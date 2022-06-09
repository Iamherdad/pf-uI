import classNames from "classnames";
import React, { DragEvent, FC, useState } from "react";

type DraggerProps = {
  onFile: (file: FileList) => void;
  children?: any;
};

const Dragger: FC<DraggerProps> = (props) => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const classNamess = classNames("pf-uploader-dragger", {
    "is-dragover": dragOver,
  });

  const handleDrag = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
    onFile(e.dataTransfer.files);
  };
  return (
    <div
      className={classNamess}
      onDragOver={(e) => handleDrag(e, true)}
      onDragLeave={(e) => handleDrag(e, false)}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Dragger;
