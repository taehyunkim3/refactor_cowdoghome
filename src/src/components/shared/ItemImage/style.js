import { styled } from "styled-components";

export const ItemImageLayer = styled.div`
display: inline-block;
margin: 0;
padding: 0;
border: 2px solid transparent; // border를 추가하고 투명색으로 설정
background: none;
cursor: pointer;
outline: none;

overflow: hidden;
position: relative;
width:${(prop) => (prop.size)};
height:  ${(prop) => (prop.size)};
border-radius: ${(prop) => (prop.round)};
transition: all 0.2s ease-in-out;
&:hover {
    ${(prop) => (prop.type === "HOUSEITEM" && "border: 2px solid rgba(53, 197, 240, 0.8)")}; 
}
img{
    position: absolute;
    width: 100%;
    height: 100%;

    transition: transform 0.3s ease-in-out;
}
&:hover img{
    ${(prop) => (prop.isHover && "transform: scale(1.1)")}; 

}
`;
