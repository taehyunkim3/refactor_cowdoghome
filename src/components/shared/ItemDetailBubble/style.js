import { styled } from "styled-components";

export const ItemDetailBubbleLayout = styled.div`
position: absolute;
inset: auto auto 0px 0px;
transform: translate( ${(prop) => (prop.xPosition)},  ${(prop) => (prop.yPosition)});
opacity: ${(prop) => (prop.opacity ? 1 : 0)};
transition: opacity .2s ease-in-out;
width: 320px;
box-sizing: border-box;
padding: 10px 0px 10px 10px;
border-radius: 4px;
display: flex;
background: rgb(255, 255, 255);
color: rgb(47, 52, 56);
cursor: pointer;
position: relative;
z-index: 1;

border: 1px solid #E0E0E0;
`;

export const StItemBubbleImage = styled.div`

width: 84px;
    height: 84px;
    position: relative;
    margin-right: 10px;
    flex: 0 0 auto;
    overflow: hidden;

img{
    border: 0;

    width: 100%;
    position: absolute;
}

`;

export const StItemBubbleText = styled.div`

flex: 1 1 auto;
overflow: hidden;
.brand {
    display: block;
    font-size: 12px;
    line-height: 16px;
    color: rgb(130, 140, 148);
}
.name {
    width: 100%;
    font-size: 14px;
    line-height: 18px;
    height: 36px;
    margin: 4px 0px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow-wrap: break-word;
}
.price{
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
}
`;

export const StItemBubbleArrow = styled.div`
width: 40px;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
flex: 0 0 auto;
font-size: 24px;    
color: rgb(47, 52, 56);


`;