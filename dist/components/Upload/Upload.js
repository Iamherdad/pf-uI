var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useRef, useState } from "react";
import axios from "axios";
import UpLoadList from "./UploadList";
import Dragger from "./Dragger";
var Upload = function (props) {
    var action = props.action, onProgress = props.onProgress, onsuccess = props.onsuccess, onError = props.onError, beforeUpload = props.beforeUpload, onChange = props.onChange, onRemove = props.onRemove, 
    // defaultFileList,
    headers = props.headers, _a = props.name, name = _a === void 0 ? "file" : _a, data = props.data, withCredentials = props.withCredentials, accept = props.accept, multiple = props.multiple, drag = props.drag, _b = props.Children, Children = _b === void 0 ? "点击上传" : _b;
    var fileIptRef = useRef(null);
    var _c = useState([]), fileList = _c[0], setFileList = _c[1];
    var updateFileList = function (updateFile, updateObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var handleClick = function () {
        if (fileIptRef.current) {
            fileIptRef.current.click();
        }
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (!files) {
            return;
        }
        uploadFiles(files);
        if (fileIptRef.current) {
            fileIptRef.current.value = "";
        }
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (item) {
            if (!beforeUpload) {
                post(item);
            }
            else {
                var result = beforeUpload(item);
                if (result && result instanceof Promise) {
                    result.then(function (res) {
                        post(res);
                    });
                }
                else if (result !== false) {
                    post(item);
                }
            }
        });
    };
    var post = function (file) {
        var _file = {
            uid: Date.now() + "upload-file",
            status: "ready",
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file,
        };
        // setFileList([_file, ...fileList]);
        setFileList(function (pri) {
            return __spreadArray([_file], pri, true);
        });
        var formData = new FormData();
        formData.append(name || "file", file);
        if (data) {
            Object.keys(data).forEach(function (item) {
                formData.append(item, data[item]);
            });
        }
        axios
            .post(action, formData, {
            headers: __assign(__assign({}, headers), { "Content-Type": "mutipart/form-data" }),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                var percentage = Math.round((e.loaded * 100) / e.total) || 0;
                if (percentage < 100) {
                    updateFileList(_file, { percent: percentage, status: "Uploading" });
                    if (onProgress) {
                        onProgress(percentage, file);
                    }
                }
            },
        })
            .then(function (res) {
            updateFileList(_file, { status: "success", response: res.data });
            if (onsuccess) {
                onsuccess(res.data, file);
            }
            if (onChange) {
                onChange(file);
            }
        })
            .catch(function (err) {
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
    var handleRemove = function (file) {
        setFileList(function (pre) {
            return pre.filter(function (item) {
                return item.uid !== file.uid;
            });
        });
        if (onRemove)
            onRemove(file);
    };
    return (React.createElement("div", { className: "pf-upload" },
        React.createElement("div", { onClick: handleClick }, drag ? (React.createElement(Dragger, { onFile: function (files) {
                uploadFiles(files);
            } }, Children)) : (Children)),
        React.createElement("input", { type: "file", className: "pf-ipt-file", style: { display: "none" }, ref: fileIptRef, onChange: handleFileChange, multiple: multiple, accept: accept }),
        React.createElement(UpLoadList, { fileList: fileList, onRemove: handleRemove })));
};
export default Upload;
