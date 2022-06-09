import { useEffect, useState } from "react";

export default function useDebounce(fun: any, time = 300) {
  const [debounceVal, setDebounceVal] = useState(fun);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceVal(fun);
    }, time);
    return () => {
      clearTimeout(timeout);
    };
  }, [fun, time]);
  return debounceVal;
}
