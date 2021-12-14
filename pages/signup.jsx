import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import BaseLine from "../components/BaseLine";
import NavBar from "../components/NavBar";
import { requestToSignUP } from "../utils/apiRequest";

const Container = styled.div``;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100vw;
  height: 100vh;
  /* background-color: #eeeeee; */
`;

export default function signup() {
  const [formData, setFormData] = useState({});
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    requestToSignUP({ data: formData });
  };

  return (
    <Container>
      <NavBar />
      <BaseLine />
      <Box>
        <h1>SIGN UP</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <TextField
            name="lastname"
            onChange={onChange}
            label="名字"
            placeholder="名字"
          />
          <TextField
            name="firstname"
            onChange={onChange}
            label="名前"
            placeholder="名前"
          />
        </div>
        <TextField
          name="nickname"
          onChange={onChange}
          label="ニックネーム"
          placeholder="ニックネーム"
        />
        <TextField
          name="email"
          onChange={onChange}
          label="メール"
          placeholder="メール"
        />
        <TextField
          name="password"
          onChange={onChange}
          label="パスワード"
          placeholder="パスワード"
        />
        <TextField
          name="zipcode"
          onChange={onChange}
          label="郵便番号"
          placeholder="郵便番号"
        />
        <TextField
          name="prefecture"
          onChange={onChange}
          label="都道府県"
          placeholder="都道府県"
        />
        <TextField
          name="city"
          onChange={onChange}
          label="市区"
          placeholder="市区"
        />
        <TextField
          name="area"
          onChange={onChange}
          label="村町"
          placeholder="町村"
        />
        <Button
          style={{ width: "30vw" }}
          onClick={onSubmit}
          size="large"
          variant="contained"
        >
          sign in
        </Button>
      </Box>
    </Container>
  );
}
