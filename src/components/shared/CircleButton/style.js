import { styled } from "styled-components";

export const CircleButtonLayer = styled.button`
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(prop) => (prop.size)};
    height: ${(prop) => (prop.size)};
    border: none;
    border: ${(prop) => (prop.border)};
    background: none;
    font-size: ${(prop) => (prop.font)};
    box-sizing: border-box;
    text-align: center;
    background-color: ${(prop) => (prop.bgColor)};
    border-radius: 100%;
    box-shadow: ${(prop) => (prop.shadow ? "0 2px 5px rgba(63, 71, 77, 0.15);" : "none")};
    color: ${(prop) => (prop.color)};
    padding:0;
`;
