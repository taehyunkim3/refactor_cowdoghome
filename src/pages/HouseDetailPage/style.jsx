import { styled } from "styled-components";
export const CommonLayout = styled.div`
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
`;
// export const HouseDetailPageLayout = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;

//   width: 100%;
//   min-height: 10vh;
//   position: relative;
//   z-index: 0;
// `;

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

  position: relative;
`;

export const MainImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 133.333%;
  .imageratio {
    //이미지 비율 설정
    //
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain; // 이미지의 비율을 유지하면서 가능한 많이 채우는 설정입니다.
  }
`;

export const OnPosition = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  margin: ${(props) => props.margin};
`;

export const RelatedItems = styled.div`
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
