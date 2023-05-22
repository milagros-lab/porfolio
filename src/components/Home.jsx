import { Box, styled, Typography } from "@mui/material";
import perfil from "../media/perfilfoto.jpg"
import About from "./About";
import Proyectos from "./Proyectos";
import Stack from "./Stack";

const Home = () => {
  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  }));

  return (
    <Box
      sx={{
        mt: 4,
        mb: 8,
        p: 2,
        mx: "auto",
      }}
      id="home"
    >
      <Box>
        <Typography
          sx={{ color: "white", textAlign: "center", mt: 3 }}
          variant="h4"
        >
          Milagros Chamorro 
        </Typography>
        <CustomTitle variant="h1">
          Junior <span style={{ color: "rgba(0,199,255,255)" }}>Front-end</span>{" "}
          Developer
        </CustomTitle>              
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 250,
            width: 250,
            mt: 5,
            mb: 8,
            borderRadius: "40%",
          }}
          src={perfil}
        />
      </Box>     
    </Box>
  );
};

export default Home;
