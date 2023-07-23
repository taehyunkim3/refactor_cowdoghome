import { styled } from "styled-components";

export const LoginLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-color: #fafafa;
  font-family: "Jal_Haru";
`;

export const LoginBox = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex: 1 0 auto;
`;

export const LogoBox = styled.div`
  margin-bottom: 30px;
  width: 100%;
  height: 52.5px;
`;

export const FormBox = styled.form`
  width: 300px;
`;

export const UserAccountForm = styled.div`
  width: 100%;
  text-align: center;
  display: block;
  line-height: 1;
  font-size: 13px;
`;

export const UserAccountBtn = styled.span`
  width: 100%;
  cursor: pointer;
`;

export const SNSLoginBox = styled.div`
  width: 100%;
`;

export const SNSLoginText = styled.span`
  margin: 35px 0 15px;
  color: #757575;
  font-size: 12px;
  font-weight: normal;
  line-height: 1.33;
  text-align: center;
`;

export const SNSLoginBtn = styled.span`
  width: 100%;
  cursor: pointer;
`;

export const ErrorText = styled.span`
  margin-top: 24px;
  color: #c2c8cc;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  touch-action: manipulation;
`;

export const NonMembersBox = styled.div`
  width: 100%;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #dbdbdb;
`;

export const NonMembersText = styled.span`
  width: 100%;
  background-color: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  font-size: 15px;
  line-height: 1.4;
  color: #424242;
  margin-bottom: 20px;
  cursor: pointer;
  touch-action: manipulation;
`;
