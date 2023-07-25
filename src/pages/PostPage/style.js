import { styled } from "styled-components";

export const CommonLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainLayoutInner = styled.div`
  max-width: 1000px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto; // 중앙정렬 반응형시 미디어쿼리로 변경
  padding: 50px 0px 10px 0px; //위아래 패딩 반응형시 미디어쿼리로 변경
`;