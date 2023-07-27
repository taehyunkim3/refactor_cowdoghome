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
  padding: 2.5em 3.75em;

  @media (max-width: 768px) {
    padding: 1.875em 0;
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
  font-size: 12px;
  line-height: 16px;
  font-family: "Jal_Onuel";
  width: 48%;
  margin-bottom: 1em;
`;

export const contentBoxStyle = {
  width: "23%",
};

export const Title = styled.span`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Number = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  white-space: nowrap;
  margin-right: 6px;
  touch-action: manipulation;
`;

export const Text = styled.span`
  margin: 0;
  padding: 0%;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: rgb(47, 52, 56);
`;

export const CompanyInfoBox = styled.div`
  width: 100%;
  margin-top: auto;
`;

export const CompanyInfoText = styled.span`
  font-size: 10px;
  line-height: 16px;
  color: rgb(130, 140, 148);
  font-family: "Jal_Onuel";
  overflow-x: hidden;
  margin-right: 10px;
`;

export const companyInfoStyle = {
  display: "flex",
  alignItems: "center",
  marginRight: "10px",
};
