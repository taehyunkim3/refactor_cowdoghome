import { styled } from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px 0;

  @media (min-width: 768px) {
    width: 360px;
  }
`;

export const LoginSpan = styled.span`
  text-decoration: underline;
  font-weight: 700;
  font-size: 15px;
  padding-left: 10px;
  text-align: center;
  letter-spacing: -0.4px;
  color: rgb(66, 66, 66);

  &:hover {
    color: #7a7a7a;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: rgb(66, 66, 66);
  font-size: 20px;
`;

export const SNSBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(237, 237, 237);
`;

export const SNSTitle = styled.h2`
  color: rgb(117, 117, 117);
  font-size: 12px;
  margin: 15px 0;
  text-align: center;
`;

export const SNSLists = styled.ul`
  display: flex;
  justify-content: center;
`;

export const SNSList = styled.li`
  margin: 0 10px;
`;

export const QusetionBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const QuestionText = styled.p`
  color: #424242;
  font-size: 15px;
  text-align: center;
  leeter-spacing: -0.4px;
`;
