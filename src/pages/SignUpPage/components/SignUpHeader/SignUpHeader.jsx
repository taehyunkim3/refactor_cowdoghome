import { CowDogHomeIcon } from "../../../../components";
import { HeaderWrapper } from "./style";
import { Link } from "react-router-dom";

export const SignUpHeader = ({}) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <CowDogHomeIcon />
      </Link>
    </HeaderWrapper>
  );
};
