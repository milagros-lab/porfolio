import React from 'react'
import { Box, Typography, styled} from "@mui/material";
import Recomendaciones1 from "./Recomendaciones1";
import Recomendaciones2 from "./Recomendaciones2";
import Recomendaciones3 from "./Recomendaciones3";


const Recomendaciones = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));
  return (
    <>
      <Typography
          variant="h6"
          style={{ color: "white", textAlign: "center", margin: 12}}
        >
          Referencias
        </Typography>
      <CustomBox sx={{ my: 7 }}>
        <Recomendaciones1 />
        <Recomendaciones2 />
        <Recomendaciones3 />
      </CustomBox>    
    </>
    
  )
}

export default Recomendaciones