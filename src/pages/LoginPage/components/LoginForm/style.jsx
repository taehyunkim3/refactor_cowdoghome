import styled from "styled-components";
import { Button as BaseButton } from "../../../../components/shared/Button/Button";

export const FormBox = styled.form`
  width: 300px;
  box-sizing: border-box;
`;

export const LoginButton = ({ children, ...props }) => (
  <div style={{ margin: "20px 0" }}>
    <BaseButton {...props}>{children}</BaseButton>
  </div>
);

export const ErrorMsg = styled.p`
  padding-top: 10px;
  font-size: 14px;
  line-height: 18px;
  color: rgb(255, 119, 119);
`;
