import classNames from "classnames";
import React, { useState } from "react";
var Dragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = useState(false), dragOver = _a[0], setDragOver = _a[1];
    var classNamess = classNames("pf-uploader-dragger", {
        "is-dragover": dragOver,
    });
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(true);
    };
    var handleDrop = function (e) {
        e.preventDefault();
        setDragOver(false);
        onFile(e.dataTransfer.files);
    };
    return (React.createElement("div", { className: classNamess, onDragOver: function (e) { return handleDrag(e, true); }, onDragLeave: function (e) { return handleDrag(e, false); }, onDrop: handleDrop }, children));
};
export default Dragger;
