import { styled } from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  flex: 1;
`;

export const FooterBox = styled.div`
  width: 100%;
  display: block;
  box-sizing: border-box;
  background-color: #f7f9fa;
  padding: 2.5vw 3.75vw;

  @media (max-width: 768px) {
    padding: 1.875vw 2vw;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const ContentBox = styled.div`
  color: rgb(47, 52, 56);
  display: block;
  font-size: 1.2vw;
  line-height: 1.6vw;
  font-family: "Jal_Onuel";
  width: 48%;
  margin-bottom: 1vw;
  @media (max-width: 768px) {
    font-size: 2.125vw;
    line-height: 2.7vw;
  }
`;

export const contentBoxStyle = {
  width: "23%",
};

export const Title = styled.span`
  font-size: 1.8vw;
  line-height: 2.4vw;
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 1.2vw;
  }
`;

export const Number = styled.span`
  font-size: 1.6vw;
  line-height: 2vw;
  font-weight: 700;
  white-space: nowrap;
  margin-right: 0.6vw;
  touch-action: manipulation;
`;

export const Text = styled.span`
  margin: 0;
  padding: 0%;
  display: block;
  margin-block-start: 1vw;
  margin-block-end: 1vw;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: rgb(47, 52, 56);
`;

export const CompanyInfoBox = styled.div`
  width: 100%;
  margin-top: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CompanyInfoText = styled.span`
  font-size: 1vw;
  line-height: 1.6vw;
  color: rgb(130, 140, 148);
  font-family: "Jal_Onuel";
  overflow-x: hidden;
  margin-right: 1vw;
`;

export const companyInfoStyle = {
  display: "flex",
  alignItems: "center",
  marginRight: "1vw",
};
