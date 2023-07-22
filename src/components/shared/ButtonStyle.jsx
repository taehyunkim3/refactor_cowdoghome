import styled from "styled-components";

export const StyledButton = styled.button`
  list-style: none;
  cursor: pointer;
  touch-action: manipulation;
  border: none;
  background: none rgb(53, 197, 240);
  font-family: inherit;
  font-size: 14px;
  line-height: 18px;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 40px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  top: 56.5%;
  left: 34%;
  width: 34.2%;
  background-color: rgb(53, 197, 240);
  flex: 5;
`;

export const GrayButton = styled.button`
  touch-action: manipulation;
  border: none;
  background: none rgb(234, 237, 239);
  font-family: inherit;
  font-size: 14px;
  line-height: 18px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 44px;
  border-radius: 4px;
  padding: 0px 16px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: rgb(194, 200, 204);
  pointer-events: none;
  width: 132px;
  display: inline-block;
  cursor: pointer;
`;

export const WriteButton = styled.button`
  cursor: pointer;
  touch-action: manipulation;
  border: none;
  background: none;
  font: inherit;
  font-size: 14px;
  line-height: 18px;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: auto;
  height: 40px;
  border-radius: 4px;
  padding: 0 16px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: #ffffff;
  background-color: #35c5f0;
  outline: none;
  overflow: hidden;
`;

export const BuyButton = styled.button`
  touch-action: manipulation;
  user-select: none;
  display: inline-block;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid transparent;
  background: none;
  font-family: inherit;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  border-radius: 4px;
  cursor: pointer;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
  padding: 13px 10px 14px;
  font-size: 17px;
  line-height: 26px;
  flex: 1 0 0px;
  margin: 0 3px;
`;

export const SignUpButton = styled.button`
  touch-action: manipulation;
  user-select: none;
  display: inline-block;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid transparent;
  background: none;
  font-family: Noto Sans KR, Noto Sans CJK KR, 맑은 고딕, Malgun Gothic,
    sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  border-radius: 4px;
  cursor: pointer;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
  padding: 11px 10px;
  font-size: 17px;
  line-height: 26px;
  width: 100%;
`;

export const BucketButton = styled.button`
  touch-action: manipulation;
  user-select: none;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid transparent;
  background: none;
  font-family: inherit;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  border-color: #35c5f0;
  color: #35c5f0;
  padding: 13px 10px 14px;
  font-size: 17px;
  line-height: 26px;
  -webkit-box-flex: 1;
  flex: 1 0 0px;
  margin: 0 3px;
`;

export const LoginButton = styled.button`
  touch-action: manipulation;
  user-select: none;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  background: none;
  font-family: Noto Sans KR, Noto Sans CJK KR, 맑은 고딕, Malgun Gothic,
    sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  border-radius: 4px;
  cursor: pointer;
  background-color: #35c5f0;
  border-color: #35c5f0;
  color: #fff;
  padding: 15px 10px;
  line-height: 20px;
  font-size: 17px;
  min-height: 50px;
  width: 100%;

  &:hover,
  &:active {
    background-color: rgb(0, 159, 206);
  }
`;

export const EmailButton = styled.button`
  touch-action: manipulation;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid transparent;
  font-family: Noto Sans KR, Noto Sans CJK KR, 맑은 고딕, Malgun Gothic,
    sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  transition: color 0.1s, background-color 0.1s, border-color 0.1s;
  border-radius: 4px;
  cursor: pointer;
  line-height: 20px;
  font-size: 17px;
  min-height: 50px;
  margin-top: 10px;
  width: 100%;
  height: 45px;
  padding: 0px;
  background: rgb(247, 248, 250);
  color: rgb(194, 200, 204);
  border-color: rgb(218, 220, 224);
`;

export const AskButton = styled.button`
  flex: 1;
  cursor: pointer;
  touch-action: manipulation;
  margin: 0px;
  background: none;
  font-style: inherit;
  font-size: 14px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  border-radius: 4px;
  padding: 0px 16px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: rgb(53, 197, 240);
  border: 1px solid rgb(53, 197, 240);
  background-color: #ffffff;

  &:hover,
  &:active {
    background-color: rgb(239, 251, 255);
  }
`;

export const WhiteButton = styled.button`
  cursor: pointer;
  touch-action: manipulation;
  margin: 0px;
  background: none;
  font-style: inherit;
  font-size: 14px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  border-radius: 4px;
  padding: 0px 16px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: rgb(47, 52, 56);
  border: 1px solid rgb(218, 221, 224);
  background-color: #ffffff;

  &:hover,
  &:active {
    background-color: rgb(247, 249, 250);
  }
`;
