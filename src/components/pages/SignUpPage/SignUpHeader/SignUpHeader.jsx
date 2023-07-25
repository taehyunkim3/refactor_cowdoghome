import { CowDogHomeIcon } from "../../../shared/Header/CowDogHomeIcon";
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
