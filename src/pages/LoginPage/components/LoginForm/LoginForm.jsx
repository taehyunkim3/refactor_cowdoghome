import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputContainer } from "../../../../components/shared";
import { ErrorMsg, FormBox, LoginButton } from "./style";
import axios from "axios";

export const LoginForm = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleValueUpdate = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formValues);

  const login = async (email, password) => {
    try {
      const response = await axios.post("https://cowdoghome.store/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/");

      return response.data;
    } catch (error) {
      console.error("Login API Error: ", error);
      if (error.response.status === 401) {
        setError("잘못된 이메일 또는 비밀번호입니다.");
        return;
      }
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.email === "" || formValues.password === "") {
      setError("잘못된 이메일 또는 비밀번호입니다.");
    } else {
      login(formValues.email, formValues.password);
    }
  };

  return (
    <FormBox>
      <InputContainer
        placeholder="이메일"
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleValueUpdate}
      />
      <InputContainer
        placeholder="비밀번호"
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleValueUpdate}
      />
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <LoginButton
        theme="filled"
        size="large"
        onClick={handleSubmit}
        label="로그인"
      ></LoginButton>
    </FormBox>
  );
};
