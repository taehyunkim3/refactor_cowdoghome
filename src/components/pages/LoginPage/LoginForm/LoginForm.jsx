// LoginForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button, InputContainer } from "../../../shared";
import { FormBox } from "./style";
import { loginApi } from "../../../../api/loginApi"
import { loginFailed, loginStart, loginSuccess } from "../../../../redux/reducers";

const LoginForm = () => {
  console.log("login");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation(loginApi, {
    onError: (error) => {
      dispatch(loginFailed(error.message));
    },
    onSuccess: (data) => {
      dispatch(loginSuccess(data));
      navigate("/");
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
      <Button onClick={handleSubmit}>로그인</Button>
    </FormBox>
  );
};

export default LoginForm;

