import { styled } from "styled-components";

export const TextBox = styled.form`
margin-left:10px;
width:480px;


textarea{

    position: relative;
    width:100%;
    min-height: 300px;
    padding: 16px;
    overflow: hidden;
    display: inline-block;
    overflow-wrap: break-word;
    white-space: pre-line;
    font-size: 14px;
    line-height: 20px;
    caret-color: rgb(47, 52, 56);
    border: 1px solid rgb(218, 221, 224);
    border-radius: 4px;
    outline:none;
    resize: none;
}
textarea::placeholder{
    color: rgb(194, 200, 204);
    font-size: 14px;
}
`;


export const InputFileLayout = styled.div`
text-align: center;
label {
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
}

input[type="file"] {
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
}
.pcload {
  margin: 0px;
  border: none;
  background: none rgb(53, 197, 240);
  font-size: 14px;
  line-height: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: rgb(255, 255, 255);
  border-radius: 4px;
}
.bigText {
  margin: 0px 0px 4px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: rgb(130, 140, 148);
}
.smallText {
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  color: rgb(130, 140, 148);
}
`;

export const Camera = styled.div`
display: inline-block;
font-size: 24px;
line-height: 1;
margin: 0px 0px 12px;
color: rgb(130, 140, 148);
margin: 0px 0px 14.5px;
`;

export const InputFileLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 430px;
    height: 430px;
    background-color: #f7f9fa;
    margin: 10px;
`;


export const ChangeFileLayout = styled.div`
text-align: center;
label {
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
}

input[type="file"] {
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
}
.pcload {
  margin: 0px;
  border: 1px solid rgb(218, 221, 224);
  background: none;
  font-size: 14px;
  line-height: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  color: #828c94;
  border-radius: 4px;
}
`;