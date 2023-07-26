import { useEffect, useRef, useState } from "react";
import {
  IconStyle,
  SelectorStyle,
  SelectorWrapper,
  SpanStyle,
} from "./SelectorStyle";

export const Selector = ({
  title,
  options,
  focus = false,
  onClick,
  storeValue,
  isSelectFinished,
  storeAdditionalPrices,
}) => {
  const [selected, setSelected] = useState(null);

  const selectRef = useRef(null);

  const handleSelect = (event) => {
    storeValue(options[event.target.value]);
    setSelected(event.target.value);
    storeAdditionalPrices && storeAdditionalPrices(+event.target.value);
  };

  const handleClick = (event) => {
    onClick(event.target.value);
  };

  useEffect(() => {
    if (isSelectFinished) {
      selectRef.current.value = "";
    }
  }, [isSelectFinished]);

  return (
    <SelectorWrapper>
      <SelectorStyle
        onClick={handleClick}
        onChange={handleSelect}
        focus={focus}
        ref={selectRef}
      >
        <option value="">{title}</option>
        {options.map((e, i) => {
          return (
            <option key={i} value={i}>
              {e}
            </option>
          );
        })}
      </SelectorStyle>
      <SpanStyle>
        <IconStyle
          selected={selected}
          width="10"
          height="10"
          preserveAspectRatio="xMidYMid meet"
          focus={focus}
        >
          <path fillRule="evenodd" d="M0 3l5 5 5-5z"></path>
        </IconStyle>
      </SpanStyle>
    </SelectorWrapper>
  );
};
