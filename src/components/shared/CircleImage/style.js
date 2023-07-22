import { styled } from "styled-components";

export const ProfileImageLayer = styled.button`
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
border-radius: 100%;

img{
    width: 100%;
    height: 100%;

}
`;