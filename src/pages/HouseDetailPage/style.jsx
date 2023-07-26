import { styled } from "styled-components";
export const CommonLayout = styled.div`
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainLayout = styled.div`
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
`;

export const MainLayoutInner = styled.div`
  max-width: 720px;
  position: relative;
  width: 100%;
  margin: 0 auto; // 중앙정렬 반응형시 미디어쿼리로 변경
  padding: 50px 0px 10px 0px; //위아래 패딩 반응형시 미디어쿼리로 변경
`;

export const MainImageContainer = styled.div`
  width: 720px; //고정값필요함
  height: auto;
  position: relative;
`;

export const MainImage = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  // padding-bottom: 133.333%;
  padding-bottom: ${(props) => props.imgHeight}%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const OnPosition = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  margin: ${(props) => props.margin};
  .bubble {
    margin: 15px;
  }
`;

export const RelatedItems = styled.div`
  margin-top: 16px;
  position: relative;
  z-index: 0;
  ul {
    padding: 0px;
    scroll-padding: 0px;
    display: flex;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    list-style: none;
  }
  li {
    margin: 0px 8px 0px 0px;
    padding: 0px;
    flex-shrink: 0;
    scroll-snap-align: start;
  }
`;

export const ContentText = styled.p`
  margin: 24px 0px;
  padding: 0px 16px;
  font-size: 16px;
  line-height: 24px;
  color: rgb(47, 52, 56);
  white-space: pre-line;
  letter-spacing: -0.4px;
  word-break: keep-all;
  word-wrap: break-word;
`;
