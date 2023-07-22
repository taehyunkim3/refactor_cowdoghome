import { useState } from "react";
import { Input, InputBox } from "./style";

export const InputContainer = ({ error, width, height, type, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const emWidth = width ? `${parseInt(width) / 16}em` : "18.75em";
  const emHeight = height ? `${parseInt(height) / 16}em` : "3.125em";

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <InputBox
      error={error}
      width={emWidth}
      height={emHeight}
      isFocused={isFocused}
    >
      <label>
        <Input
          type={type}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </label>
    </InputBox>
  );
};
