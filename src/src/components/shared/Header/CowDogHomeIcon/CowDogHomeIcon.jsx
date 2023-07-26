import { useNavigate } from "react-router";
import { CowDogHomeLogo } from "./style";

export const CowDogHomeIcon = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return <CowDogHomeLogo onClick={handleGoHome} />;
};
