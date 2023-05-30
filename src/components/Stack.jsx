import { Typography, Box, styled } from "@mui/material";
import React from "react";
import { icons } from "../constants/icons";
import Icon from "./Icon";

const Stack = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    mx: "auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const StackBox = styled(Box)(({ theme }) => ({
    marginLeft: "1.5rem",
    flex: 1,
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      /* marginTop: "3rem", */
    },
  }));

  return (
    <CustomBox sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h4"
        sx={{ color: "white", textAlign: "center", margin: "10px" }}
      >
        Conocimientos
      </Typography>
      <StackBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px",
          }}
        >
          {icons.map((icon, i) => {
            if (i < 2) {
              return <Icon key={icon.id} name={icon.name} src={icon.src} />;
            } else {
              return "";
            }
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px",
          }}
        >
          {icons.map((icon, i) => {
            if (i >= 2 && i < 4) {
              return <Icon key={icon.id} name={icon.name} src={icon.src} />;
            } else {
              return "";
            }
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px",
          }}
        >
          {icons.map((icon, i) => {
            if (i >= 4 && i < 6) {
              return <Icon key={icon.id} name={icon.name} src={icon.src} />;
            } else {
              return "";
            }
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "10px",
          }}
        >
          {icons.map((icon, i) => {
            if (i >= 6) {
              return <Icon key={icon.id} name={icon.name} src={icon.src} />;
            } else {
              return "";
            }
          })}
        </Box>
      </StackBox>
    </CustomBox>
  );
};

export default Stack;
