import { Box, Button, styled, Typography } from "@mui/material";
import perfil from "../media/perfilfoto.jpg";

const Hero = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    backgroundColor: "#00C7FF",
    color: "white",
    width: "20%",
    borderRadius: "25px",
    "&:hover": {
      border: "3px solid white",
      backgroundColor: "white",
    },
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }));

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
        mt: 8,
        mb: 12,
        p: 2,
        maxWidth: "1200px",
        mx: "auto",
      }}
      id="home"
    >
     <Box>
      <Typography
          sx={{ color: "white", textAlign: "center", mb: 2 }}
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
            mt: 4,
            mb: 4,
            borderRadius: "50%",
          }}
          src={perfil}
        />


      
        <CustomButton>
          <a href="mailto:elichaur@gmail.com">
            Contáctame
          </a>
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Hero;
