import { styled } from "styled-components";


export const ItemImageLayer = styled.div`
display: inline-block;
margin: 0;
padding: 0;
border: none;
background: none;
cursor: pointer;
outline: none;

overflow: hidden;
position: relative;
width:${(prop) => (prop.size)};
height:  ${(prop) => (prop.size)};
border-radius: ${(prop) => (prop.round)};

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