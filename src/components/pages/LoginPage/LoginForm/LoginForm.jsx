import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { InputContainer } from "../../../shared";
import { FormBox, LoginButton } from "./style";
import { loginApi } from "../../../../api/loginApi";
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "../../../../redux/reducers";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation(loginApi, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("refreshToken", data.refresh_token);
      dispatch(loginSuccess(data));
      navigate("/");
    },
    onError: (error) => {
      dispatch(loginFailed(error.message));
    },
  });
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleValueUpdate = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dispatching loginStart");
    dispatch(loginStart());
    mutation.mutate(formValues);
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
      <LoginButton
        theme="filled"
        size="large"
        onClick={handleSubmit}
        label="로그인"
      ></LoginButton>
      {/* <button onClick={handleSubmit}>하하하하ㅏ하핳</button> */}
    </FormBox>
  );
};

export default LoginForm;
