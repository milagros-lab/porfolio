import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { Container } from "@mui/system";
import { Drawer, styled } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const closeMenuMovil = () => {
    setMobileMenu({ left: false });
  };

  const list = (anchor) => (
    <Drawer
      anchor={anchor}
      open={mobileMenu[anchor]}
      onClose={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          width: 150,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          padding: 3,
          backgroundColor: "#d4e1e5",
        }}
      >
        <Link 
          to="/" 
          style={{ textDecoration: "none", color: "#5e1f77" }}
          onClick={closeMenuMovil}          
          >
          <HomeIcon />
          Inicio
        </Link>
        <Link 
          to="/about" 
          style={{ textDecoration: "none", color: "#5e1f77" }}
          onClick={closeMenuMovil}          
          >
          <AccountCircleSharpIcon />
          Sobre mí
        </Link>
        <Link
          to="/referencias"
          style={{ textDecoration: "none", color: "#5e1f77" }}
          onClick={closeMenuMovil}
        >
          <FeaturedPlayListIcon />
          Referencias
        </Link>
        <Link
          to="/proyect"
          style={{ textDecoration: "none", color: "#5e1f77" }}
          onClick={closeMenuMovil}
        >
          <MiscellaneousServicesIcon />
          Proyectos
        </Link>
      </Box>
    </Drawer>
  );

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    color: "#fff",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon
            onClick={(e) => {
              toggleDrawer("left", true)(e);
            }}
          />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </Box>

        <NavbarLinksBox>
          <Link
            variant="body2"
            style={{ textDecoration: "none" }}
            to="/"
            className="link"
          >
            Inicio
          </Link>
          <Link
            variant="body2"
            style={{ textDecoration: "none" }}
            to="/about"
            className="link"
          >
            Sobre mí
          </Link>
          <Link
            variant="body2"
            style={{ textDecoration: "none" }}
            to="/referencias"
            className="link"
          >
            Referencias
          </Link>
          <Link
            variant="body2"
            style={{ textDecoration: "none" }}
            to="/Proyect"
            className="link"
          >
            Proyectos
          </Link>
        </NavbarLinksBox>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
