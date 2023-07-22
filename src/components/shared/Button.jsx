import {
  GrayButton,
  StyledButton,
  WriteButton,
  BuyButton,
  BucketButton,
  LoginButton,
  EmailButton,
  SignUpButton,
  AskButton,
} from "./ButtonStyle";

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export const GrayBtn = ({ children }) => {
  return <GrayButton>{children}</GrayButton>;
};

export const WriteBtn = ({ children }) => {
  return <WriteButton>{children}</WriteButton>;
};

export const BuyBtn = ({ children }) => {
  return <BuyButton>{children}</BuyButton>;
};

export const BucketBtn = ({ children }) => {
  return <BucketButton>{children}</BucketButton>;
};

export const LoginBtn = ({ children }) => {
  return <LoginButton>{children}</LoginButton>;
};

export const SignUpBtn = ({ children }) => {
  return <SignUpButton>{children}</SignUpButton>;
};

export const EmailBtn = ({ children }) => {
  return <EmailButton>{children}</EmailButton>;
};

export const AskBtn = ({ children }) => {
  return <AskButton>{children}</AskButton>;
};

export const WhiteButton = ({ children }) => {
  return <WhiteButton>{children}</WhiteButton>;
};
