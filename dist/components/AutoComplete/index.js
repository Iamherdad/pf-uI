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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useRef, } from "react";
import Input from "../Input";
import classNames from "classnames";
import useClickOutside from "../../hooks/useClickOutside";
var AutoComplete = function (props) {
    var fetchSuggestions = props.fetchSuggestions, onSelect = props.onSelect, renderOption = props.renderOption, reset = __rest(props, ["fetchSuggestions", "onSelect", "renderOption"]);
    var _a = useState(""), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState([]), suggestions = _b[0], setSuggestions = _b[1];
    var _c = useState(0), highlightIndex = _c[0], setHighlightIndex = _c[1];
    var containerRef = useRef(null);
    //   useEffect(() => {
    //     console.log(123);
    //   }, []);
    useClickOutside(containerRef, function () { return setSuggestions([]); });
    var handleChange = function (e) {
        var value = e.target.value;
        setInputValue(value);
        if (value) {
            var result = fetchSuggestions(value);
            setSuggestions(result);
        }
        else {
            setSuggestions([]);
        }
    };
    var handleSelect = function (item) {
        setSuggestions([]);
        setInputValue(item);
        if (onSelect) {
            onSelect(item);
        }
    };
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item;
    };
    var highlight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length)
            index = suggestions.length - 1;
        setHighlightIndex(index);
    };
    var handleKeyDown = function (e) {
        switch (e.keyCode) {
            case 13:
                setInputValue(suggestions[highlightIndex]); //回车
                setSuggestions([]);
                break;
            case 38:
                highlight(highlightIndex - 1); //向上
                break;
            case 40:
                highlight(highlightIndex + 1); //向下
                break;
            case 27:
                setSuggestions([]); //取消
                break;
            default:
                break;
        }
    };
    return (React.createElement("div", { className: "pf-auto-complete", ref: containerRef },
        React.createElement(Input, __assign({ onChange: handleChange, defaultValue: inputValue, onKeyDown: handleKeyDown }, reset)),
        suggestions.length > 0 && (React.createElement("ul", null, suggestions.map(function (item, index) {
            var classNamess = classNames("suggesItem", {
                suggesItemActive: index === highlightIndex,
            });
            return (React.createElement("li", { key: index, className: classNamess, onClick: function () { return handleSelect(item); } }, renderTemplate(item)));
        })))));
};
export default AutoComplete;
