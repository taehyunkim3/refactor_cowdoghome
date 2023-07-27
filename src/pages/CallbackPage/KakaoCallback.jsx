import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export const KakaoCallback = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [authCode, setAuthCode] = useState(null); // initial value should be null or undefined
  const navigate = useNavigate();

  useEffect(() => {
    setAuthCode(params.get("code"));
  }, [params]);

  useEffect(() => {
    if (authCode) {
      localStorage.setItem("token", authCode);
      navigate("/");
    }
  }, [authCode, navigate]);
  return <></>;
};
