import { AccountCircle, Menu, Search } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 5rem;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  padding: 0 20px;
`;

export default function NavBar() {
  return (
    <Container>
      <Box
        style={{
          flex: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Menu fontSize="large" />
      </Box>
      <Box
        style={{
          flex: 6,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TextField placeholder="SEARCH" />
        <IconButton>
          <Search />
        </IconButton>
      </Box>
      <Box
        style={{
          flex: 2,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <AccountCircle fontSize="large" />
      </Box>
    </Container>
  );
}
