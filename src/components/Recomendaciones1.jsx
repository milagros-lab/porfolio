import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Recomendaciones1 = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#330052",
        padding: 3,
        border: "1px solid #00C7FF",
        borderRadius: "10px",
        maxWidth: "315px",
        position: "relative",
        mx: 3,
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: "white", mb: 2 }}
        align="justify"
      >
        Milagros es una persona muy comprometida y trabajadora, siempre
        dispuesta y con muy buena adaptación a la escucha y los cambios, se
        comunicó muy bien con el equipo y siempre tuvo sus asignaciones a
        tiempo. fue muy gratificante trabajar con ella, estoy segura que tiene
        muy buen futuro en el desarrollo visual, ya que está atenta a los
        detalles.
      </Typography>
      <Typography variant="body2">
        <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
          Ilsa Andreina Freitez Moreno
        </span>
        <span style={{ color: "#7B89A8" }}> - Chief Operating Officer</span>
      </Typography>
      <FormatQuoteIcon
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          color: "#00C7FF",
          height: "50px",
          width: "50px",
        }}
      />
    </Box>
  );
};

export default Recomendaciones1;
