import { useState } from "react";
import { Input, InputBox } from "./style";

/**
 * @param {Object} props - 컴포넌트에 전달된 속성들
 * @param {boolean} props.error - 회원가입 시 입력하지 않고 input 을 넘어가는 경우
 * @param {string} props.width - 입력 박스의 너비 (픽셀 단위)
 * @param {string} props.height - 입력 박스의 높이 (픽셀 단위)
 * @param {string} props.type - 입력 필드의 타입
 * @param {string} props.placeholder - 입력 필드의 플레이스홀더
 * @param {React.ReactNode} props.children - 입력 필드 앞에 표시될 요소 (예: 아이콘)
 */

export const InputContainer = ({
  error,
  width,
  height,
  type,
  placeholder,
  children,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const emWidth = width ? `${parseInt(width) / 16}em` : "18.75em";
  const emHeight = height ? `${parseInt(height) / 16}em` : "3.125em";

  const handleFocus = (e) => {setIsFocused(true)};
  const handleBlur = () => setIsFocused(false);

  return (
    <InputBox
      error={error}
      width={emWidth}
      height={emHeight}
      isFocused={isFocused}
    >
      <label>
        {children}
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
