import { styled } from "styled-components";

export const SelectedItemBoxLayer = styled.section`
position: relative;
    margin-bottom: 8px;
    padding: 12px;
    background-color: #F7F9FA;
    border-radius: 4px;
    position: relative;
    margin-bottom: 8px;
    padding: 12px;
    background-color: #F7F9FA;
    border-radius: 4px;
    color: #2F3438;

    h2{
        font-size: 14px;
    line-height: 18px;
    padding: 0 24px 10px 0;
    }
`;

export const SelectedItemDelete = styled.button`
position: absolute;
    display: inline-block;
    top: 0px;
    right: 0px;
    padding: 10px;
    background: none;
    border: none;
    font-size: 0px;
    transition: opacity 0.1s ease 0s;
    font-size: 16px;
    color: rgb(130, 140, 148);
    cursor: pointer;
`;

export const SelectedItemBottom = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-between;
span{
    font-size: 16px;
    line-height: 20px;
    font-weight:700;
}

`;

export const SelectedItemCounter = styled.div`
width: 70px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 7px 6px;
background-color: #ffffff;
color: #2F3438;
border: 1px solid #DADDE0;
border-radius: 4px;
margin-top:12px;

.button{
    font-size: 18px;
    cursor: pointer;
}

button{
    font-size: 14px;
    line-height: 18px;
    padding: 0;
    border: 0;
    background: none;
    color: #2F3438;
    cursor: pointer;
}
`;