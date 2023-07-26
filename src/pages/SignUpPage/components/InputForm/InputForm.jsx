import { useState } from "react";
import { ErrorMsg, Input } from "./style";

export const InputForm = ({
  type = "text",
  title,
  msg = "",
  placeholder = "",
  onChange,
}) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
    if (type === "password") {
      if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/.test(e.target.value)) {
        setError("비밀번호는 영문, 숫자를 포함하여 8자 이상");
      } else {
        setError("");
      }
    } else if (type === "nickname") {
      if (e.target.value.length < 2) {
        setError("2자 이상 입력해주세요");
      } else if (e.target.value.length > 15) {
        setError("15자 이하 입력해주세요");
      } else {
        setError("");
      }
    }

    if (onChange) {
      onChange(e.target.value, error);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "30px" }}
    >
      <label
        style={{
          fontSize: "16px",
          color: "rgb(47, 52, 56)",
          fontWeight: 700,
          marginBottom: "12px",
        }}
      >
        {title}
      </label>
      <div style={{ color: "#828C94", fontSize: "14px", marginBottom: "10px" }}>
        {msg}
      </div>
      <label style={{ display: "flex" }}>
        <Input
          type={type}
          value={input}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </label>

      <div
        style={{
          paddingTop: "10px",
          fontSize: "14px",
          color: "rgb(255, 119, 119)",
        }}
      >
        {error && <ErrorMsg>{error}</ErrorMsg>}
      </div>
    </div>
  );
};
