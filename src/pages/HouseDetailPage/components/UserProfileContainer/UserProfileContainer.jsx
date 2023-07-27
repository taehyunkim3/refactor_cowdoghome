import { styled } from "styled-components";
import { Button, CircleImage, ItemImage } from "../../../../components";
import { Hr } from "../Hr/Hr";

const UserProfileLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0px 20px 0px;
`;

const UserProfile = styled.div`
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

export const UserProfileContainer = ({
  name = "기본이름",
  date = "2021.00.00",
}) => {
  return (
    <>
      <UserProfileLayout>
        <UserProfile>
          <CircleImage type="profile" size="50px" />
          <div className="text">
            <p className="name">{name}</p>
            <p className="date">{date}</p>
          </div>
        </UserProfile>
        <div style={{ width: "80px" }}>
          {" "}
          <Button theme="filled" size="small" label="팔로우" />
        </div>
      </UserProfileLayout>{" "}
      {/* <UserProfile>
        <ItemImage size="174px" roundSize="5px" isHover={true} />
        <ItemImage size="174px" roundSize="5px" isHover={true} />
        <ItemImage size="174px" roundSize="5px" isHover={true} />
        <ItemImage size="174px" roundSize="5px" isHover={true} />
      </UserProfile> */}
      <div style={{ margin: "40px 0px" }} />
      <Hr />
      <div style={{ margin: "20px 0px" }} />
    </>
  );
};
