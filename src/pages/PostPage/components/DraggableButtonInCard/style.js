import { styled } from "styled-components";



export const StDragContainerWrapper = styled.div`

    width: 430px;

`;
export const StDragContainer = styled.div`
  width: 430px;

  height: auto;
  position: absolute;
  cursor: move;
  color: black;

  border-radius: 5px;
  // padding: 1em; 이거때문에 오차 생김
  margin: auto;
  user-select: none;
  background: #ffffff;
  flex: 1 1 auto;
  padding: 0px;
  //   overflow: auto;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  z-index: 1;
`;
export const StDragImage = styled.img`
  // position: absolute; 이거때문에 안됨
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const StButton = styled.button`
  display: inline-block;
  margin: 0px;
  border: none;
  background: none rgb(53, 197, 240);
  position: absolute;
  top: 13px;
  left: 50%;
  padding: 7px 12px 8px;
  font-size: 14px;
  line-height: 20px;
  color: rgb(255, 255, 255);
  letter-spacing: -0.3px;
  transform: translateX(-50%);
  border-radius: 100px;
  transition: background-color 0.1s ease 0s;
  z-index: 1;
  cursor: pointer;
`;

export const StDelete = styled.button`
  display: inline-block;
  margin: 0px;
  border: none;
  background: #ffffff;
  position: absolute;
  top: 13px;
  left: 10%;
  padding: 7px 12px 8px;
  font-size: 14px;
  line-height: 20px;
  color: rgb(255, 255, 255);
  letter-spacing: -0.3px;
  transform: translateX(-50%);
  border-radius: 100px;
  transition: background-color 0.1s ease 0s;
  z-index: 1;
  cursor: pointer;
`;

export const StTag = styled.div`
position:absolute;
left: 0;
top: 0;
`;

