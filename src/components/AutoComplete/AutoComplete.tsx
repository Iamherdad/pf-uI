import React, {
  ChangeEvent,
  FC,
  useState,
  ReactElement,
  KeyboardEvent,
  useRef,
  useEffect,
} from "react";
import Input, { InputProps } from "../Input/Input";
import classNames from "classnames";
import useClickOutside from "../../hooks/useClickOutside";

export type AutoCompleteProps = {
  fetchSuggestions: (str: string) => string[];
  onSelect?: (item: string) => void;
  renderOption?: (option: string) => ReactElement;
} & InputProps;
const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,

    renderOption,
    ...reset
  } = props;

  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  //   useEffect(() => {
  //     console.log(123);
  //   }, []);
  useClickOutside(containerRef, () => setSuggestions([]));
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const result = fetchSuggestions(value);
      setSuggestions(result);
    } else {
      setSuggestions([]);
    }
  };
  const handleSelect = (item: string) => {
    setSuggestions([]);
    setInputValue(item);

    if (onSelect) {
      onSelect(item);
    }
  };
  const renderTemplate = (item: string) => {
    return renderOption ? renderOption(item) : item;
  };
  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) index = suggestions.length - 1;
    setHighlightIndex(index);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
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
  return (
    <div className="pf-auto-complete" ref={containerRef}>
      <Input
        onChange={handleChange}
        defaultValue={inputValue}
        onKeyDown={handleKeyDown}
        {...reset}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item, index) => {
            const classNamess = classNames("suggesItem", {
              suggesItemActive: index === highlightIndex,
            });
            return (
              <li
                key={index}
                className={classNamess}
                onClick={() => handleSelect(item)}
              >
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
