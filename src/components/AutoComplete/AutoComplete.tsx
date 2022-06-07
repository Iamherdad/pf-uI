import React, { ChangeEvent, FC, useState, ReactElement } from "react";
import Input, { InputProps } from "../Input/Input";
import classNames from "classnames";

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
  return (
    <div className="pf-auto-complete">
      <Input onChange={handleChange} defaultValue={inputValue} {...reset} />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
