import { Box, Typography, styled} from "@mui/material";
import CardMe from "./CardMe";
import Recomendaciones1 from "./Recomendaciones1";
import Recomendaciones2 from "./Recomendaciones2";
import Recomendaciones3 from "./Recomendaciones3";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));  

  return (
    <Box sx={{ maxWidth: "1300px", my: 10, padding: 2, mx: "auto" }} id="about">
      <CustomTitleBox
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection:"column",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", textAlign: "center"}}
        >
          SOBRE MI
          {<CardMe />}
        </Typography>

        <Typography
          variant="h6"
          style={{ color: "white", textAlign: "center", margin: 12}}
        >
          Referencias
        </Typography>

       <div
          style={{
            margin: "20px",
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "50%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div> 
      </CustomTitleBox>

      <CustomBox sx={{ my: 7 }}>
        <Recomendaciones1 />
        <Recomendaciones2 />
        <Recomendaciones3 />
      </CustomBox>

      <div
        style={{
          height: "5px",
          backgroundColor: "#00C7FF",
          width: "100%",
          mx: "auto",
          border: 0,
          borderRadius: "25px",
        }}
      ></div>

      
    </Box>
  );
};

export default About;
