import { useState } from "react";
import { Input } from "./style";

export const InputForm = ({
  type = "text",
  title,
  msg = "",
  placeholder = "",
}) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label
        style={{
          fontSize: "16px",
          color: "",
          fontWeight: 700,
          marginBottom: "12px",
        }}
      >
        {title}
      </label>
      <div style={{ color: "#828C94", fontSize: "14px", marginBottom: "10px" }}>
        {msg}
      </div>
      <Input type={type} placeholder={placeholder} onChange={handleChange} />
      <div
        style={{
          paddingTop: "10px",
          fontSize: "14px",
          color: "rgb(255, 119, 119)",
        }}
      >
        {error}
      </div>
    </div>
  );
};
