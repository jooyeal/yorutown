import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { requestToSignIn } from "../utils/apiRequest";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 80vw;
  height: 70vh;
  /* background-color: #eeeeee; */
`;

export default function signin() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    const res = await requestToSignIn({ dispatch, data: formData });
    !res.errorMessage && router.push("/");
  };

  return (
    <Container>
      <NavBar />
      <Box>
        <h1>SIGN IN</h1>
        <TextField
          onChange={onChange}
          name="email"
          label="EMAIL"
          placeholder="EMAIL"
        />
        <TextField
          onChange={onChange}
          name="password"
          label="PASSWORD"
          placeholder="PASSWORD"
        />
        <Button onClick={onSubmit} size="large" variant="contained">
          sign in
        </Button>
      </Box>
    </Container>
  );
}
