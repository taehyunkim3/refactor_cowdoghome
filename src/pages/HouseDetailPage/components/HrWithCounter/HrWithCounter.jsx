import { TextWrapper } from "./style";
import { Hr } from "../Hr/Hr";

export const HrWithCounter = ({
  onClickReport = () => {},
  views = "0",
  comments = "0",
}) => {
  return (
    <>
      <TextWrapper>
        <div className="right">
          <dt>조회</dt>
          <dd>{views}</dd>
          <dt>댓글</dt>
          <dd>{comments}</dd>
        </div>
        <p>신고하기</p>
      </TextWrapper>
      <Hr />
    </>
  );
};
