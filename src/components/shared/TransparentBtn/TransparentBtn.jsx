import { TransparentButton } from "./style";

/**
 * TransparentButton 컴포넌트
 * @param {ReactNode} children - 버튼안에 내용
 * @param {string} width - 버튼의 너비 값으로, em 단위로 변환됩니다. 기본값은 '11.18em = 178.88ㅔㅌ' 입니다.
 * @param {string} height - 버튼의 높이 값으로, em 단위로 변환됩니다. 기본값은 '2em = 32px' 입니다.
 */

export const TransparentBtn = ({ children, width, height }) => {
  const emWidth = width ? `${parseInt(width) / 16}em` : "11.18em";
  const emHeight = height ? `${parseInt(height) / 16}em` : "2em";
  return (
    <TransparentButton width={emWidth} height={emHeight}>
      {children}
    </TransparentButton>
  );
};
