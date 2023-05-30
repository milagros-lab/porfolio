import { Box, Button, Container, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import imagen from "../media/image2.png";
import Footer from "./Footer";

const Home = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  return (
    <Box>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1.5" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "30px",
                color: "#fff",
                fontWeight: "500",
                mb: 4,
              }}
            >
              Milagros Chamorro
            </Typography>
            <Typography variant="h2" sx={{ color: "#fff", my: 1 }}>
              Junior{" "}
              <span style={{ color: "rgba(0,199,255,255)" }}>Front-end</span>{" "}
              Developer
            </Typography>
            <Typography variant="body2" color="#fff">
              Experienca trabajando por proyectos, metodología agile, code
              review, dailys, react, javaScript
            </Typography>
            <Footer
              style={{ display: "flex", justifyContent: "space-between" }}
            />
            <Button
              sx={{ mt: 3 }}
              style={{ background: "rgba(0,199,255,255)" }}
              variant="contained"
              component={Link}
              to="/about"
            >
              Sobre mí
            </Button>
          </Box>
          <Box sx={{ flex: "1.25" }}>
            <img
              alt="imagen"
              src={imagen}
              style={{ maxWidth: "90%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Home;
