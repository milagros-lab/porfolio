import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Recomendaciones3 = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000F2E",
        padding: 3,
        border: "1px solid #00C7FF",
        borderRadius: "10px",
        maxWidth: "315px",
        position: "relative",
        mx: 3,
      }}
    >
      <Typography variant="body1" sx={{ color: "white", mb: 2 }} align= "justify">
      Milagros es una persona trabajadora y muy comunicativa. Es muy fácil trabajar con ella y es una persona que aprende rápido.
Se integra muy bien en el equipo y es una buena colaboradora.
      </Typography>
      <Typography variant="body2">
        <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
        Adrian Insausti Crespo
        </span>
        <span style={{ color: "#7B89A8" }}> - Head of Engineering Foqum & Co-founder op2aim</span>
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

export default Recomendaciones3;
