import { styled } from "styled-components";

export const ItemDetailBubbleLayout = styled.div`
position: absolute;
inset: auto auto 0px 0px;
transform: translate( ${(prop) => (prop.xPosition)},  ${(prop) => (prop.yPosition)});

width: 320px;
box-sizing: border-box;
// padding: 10px 0px 10px 10px;

display: flex;
background: rgb(255, 255, 255);
color: rgb(47, 52, 56);
cursor: pointer;
position: relative;
z-index: 1;

align-items: center;   



`;

export const StItemBubbleImage = styled.div`

flex: 0 0 auto;
    position: relative;
    width: 70px;
    height: 70px;
    margin-right: 15px;
    border-radius: 22px;
    overflow: hidden;

img{
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

`;

export const StItemBubbleText = styled.div`

flex: 1 1 auto;
overflow: hidden;
font-weight: 500;
    letter-spacing: -0.3px;

.brand {
    display: block;
    font-size: 12px;
    line-height: 16px;
    color: rgb(130, 140, 148);
}
.name {
    color: rgb(47, 52, 56);
    font-size: 14px;
    line-height: 18px;
    height: 38px;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    overflow: hidden;
}

`;

export const StItemBubbleArrow = styled.div`
width: 60px;
display: flex;
align-items: center;
justify-content: center;
flex: 0 0 auto;
font-size: 24px;    
color: rgb(47, 52, 56);


`;
export const ScrollPage = styled.div`
  flex: 1 1 auto;
  padding: 3px 0px;
  overflow: auto;
`;

