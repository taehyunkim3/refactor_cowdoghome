import { useState } from "react";
import {
  IconStyle,
  SelectorStyle,
  SelectorWrapper,
  SpanStyle,
} from "./SelectorStyle";

export const Selector = ({ title, options, focus = false }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (event) => {
    setSelected(event.target.value);
  };

  return (
    <SelectorWrapper>
      <SelectorStyle value={selected} onChange={handleSelect} focus={focus}>
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
