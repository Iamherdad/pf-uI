import { FC } from "react";
export declare type UploadFile = {
    uid: string;
    size: number;
    name: string;
    status?: "ready" | "Uploading" | "success" | "error";
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
};
export declare type UploadProps = {
    action: string;
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onProgress?: (percentage: number, file: File) => void;
    onsuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
    onChange?: (file: File) => void;
    onRemove?: (file: UploadFile) => void;
    headers?: {
        [key: string]: any;
    };
    name?: string;
    data?: {
        [key: string]: any;
    };
    withCredentials?: boolean;
    accept?: string;
    multiple?: boolean;
    drag?: boolean;
    Children?: any;
};
declare const Upload: FC<UploadProps>;
export default Upload;
