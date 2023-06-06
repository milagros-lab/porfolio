import { Box, Typography, Button } from "@mui/material";
import cv from "../media/MilagrosCV.pdf";
import Stack from "./Stack";

const About = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color="white">
          Milagros Chamorro
        </Typography>
        <Typography variant="body2" color="white" padding={"16px"}>
          Me motiva seguir aprendiendo y creciendo como desarrrolladora, y
          llegar a convertirme en un activo importante dentro de un equipo de
          trabajo. Se me da muy bien el trabajo en equipo, soy perseverante y
          empática, y tengo gran capacidad organizativa.
        </Typography>
        <Stack />

        <a
          href={cv}
          style={{ textDecoration: "none" }}
          download="CV_Milagros_Chamorro_junior_developer__.pdf"
        >
          <Button
            sx={{ mt: 3 }}
            style={{ background: "rgba(0,199,255,255)" }}
            variant="contained"
          >
            Descargar CV
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default About;
