import { FlexButtonStyle } from "./FlexButtonStyle";

// <FlexButton backgroundColor="filled" line="thin">
//   hi
// </FlexButton>

export const FlexButton = ({ backgroundColor, line, children }) => {
  console.log(children);
  return (
    <FlexButtonStyle $background={backgroundColor} $line={line}>
      {children}
    </FlexButtonStyle>
  );
};
