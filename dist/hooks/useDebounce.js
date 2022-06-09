import { useEffect, useState } from "react";
export default function useDebounce(fun, time) {
    if (time === void 0) { time = 300; }
    var _a = useState(fun), debounceVal = _a[0], setDebounceVal = _a[1];
    useEffect(function () {
        var timeout = setTimeout(function () {
            setDebounceVal(fun);
        }, time);
        return function () {
            clearTimeout(timeout);
        };
    }, [fun, time]);
    return debounceVal;
}
