import { TextField, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

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
  return (
    <Container>
      <NavBar />
      <Box>
        <h1>SIGN IN</h1>
        <TextField placeholder="E-MAIL" />
        <TextField placeholder="PASSWORD" />
        <Button size="large" variant="contained">
          sign in
        </Button>
      </Box>
    </Container>
  );
}
