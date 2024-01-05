import * as React from "react";
import fotoPerfil from "../assets/img/fotoPerfil.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Button } from "@mui/material";
import Stack from "./Stack";
import cv from "../assets/img/MilagrosCV.pdf";

export default function ActionAreaCard() {
  return (
    <Box  style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }}>
      <Card sx={{ maxWidth: 350,  background:"#ffd7d730", }}>
      <CardActionArea>
        <CardMedia
          style={{
            display: "flex",
            borderRadius: "10%",
            paddingTop: "15px",
              width: "150px",
              margin: "auto",
            mb:{ xs: "1rem", sm: 0 },
            mr:{ xs: 0, md: "2rem" },
            p:"0.75rem"
          }}
          component="img"
          src={fotoPerfil}
          alt="Milagros Chamorro"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{display: "flex", justifyContent: "center", color: "#ffff"}}>
            Milagros Chamorro
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" , color: "#ffff"}}
          >
            Me motiva seguir aprendiendo y creciendo como desarrrolladora, y
            llegar a convertirme en un activo importante dentro de un equipo de
            trabajo. Se me da muy bien el trabajo en equipo, soy perseverante y
            empática, y tengo gran capacidad organizativa.
          </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <a
          href={cv}
          style={{ textDecoration: "none" }}
          download="CV_Milagros_Chamorro_junior_developer__.pdf"
          target="_blank"
          rel="noopener noreferrer"
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
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Stack />
    </Box>
  );
}
