import { Button, CircleImage } from "../../../../components";
import { Hr } from "../Hr/Hr";
import { UserProfileLayout, UserProfile } from "./style";

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
          <Button theme="filled" size="small" label="팔로우" />
        </div>
      </UserProfileLayout>
      <div style={{ margin: "40px 0px" }} />
      <Hr />
      <div style={{ margin: "20px 0px" }} />
    </>
  );
};
