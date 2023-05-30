import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Recomendaciones2 = () => {
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
      <Typography variant="body1" sx={{ color: "white", mb: 2 }} align= "justify">
      Mila es una muy buena profesional, que posee grandes habilidades para llegar a ser una gran desarrolladora de aplicaciones. Ha sido un gran recurso para el equipo en el que trabajó conmigo e hizo un trabajo impecable tanto en la resolución de incidencias como en desarrollo de nuevas funcionalidades con React. Su constancia, compromiso y capacidad de aprendizaje, unido a su alegría, fue una motivación extra para el resto del equipo.
      </Typography>
      <Typography variant="body2">
        <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
        Manuel Sirvent Cantón
        </span>
        <span style={{ color: "#7B89A8" }}> - Senior frontend Foqum</span>
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

export default Recomendaciones2;
