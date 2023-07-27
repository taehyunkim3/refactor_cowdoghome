const { styled } = require("styled-components");

export const UserProfileLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px 20px 0px;
`;

export const UserProfile = styled.div`
  display: flex;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    .name {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .date {
      font-size: 14px;
      color: #999999;
    }
  }
`;