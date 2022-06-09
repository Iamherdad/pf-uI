import { FC, ReactElement } from "react";
import { InputProps } from "../Input";
export declare type AutoCompleteProps = {
    fetchSuggestions: (str: string) => string[];
    onSelect?: (item: string) => void;
    renderOption?: (option: string) => ReactElement;
} & InputProps;
declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
