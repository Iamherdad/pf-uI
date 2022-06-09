import { FC } from "react";
import { UploadFile } from "./Upload";
export declare type UploadListProps = {
    fileList: UploadFile[];
    onRemove: (_file: UploadFile) => void;
};
declare const UpLoadList: FC<UploadListProps>;
export default UpLoadList;
