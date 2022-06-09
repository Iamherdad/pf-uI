import { FC } from "react";
export declare type DraggerProps = {
    onFile: (file: FileList) => void;
    children?: any;
};
declare const Dragger: FC<DraggerProps>;
export default Dragger;
