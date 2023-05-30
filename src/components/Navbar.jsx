import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
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

  const list = (anchor) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box style={{ padding: 3 }}>
        <Link as={Link} to="/">
          <HomeIcon />
          Home
        </Link>
        <Box>
        <Link as={Link} to="/about">
          <AccountCircleSharpIcon />
            Sobre mí
          </Link>
        </Box>
      </Box>
      <Box style={{ padding: 3 }}>
        <Link as={Link} to="/referencias">
          <FeaturedPlayListIcon />
          Referencias
        </Link>
      </Box>
      <Box style={{ padding: 3 }}>
        <Link as={Link} to="/proyect">
          <MiscellaneousServicesIcon />
          Proyect
        </Link>
      </Box>
    </Box>
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
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </Box>

        <NavbarLinksBox>
          <Link variant="body2" to="/" className="link">
            Home
          </Link>
          <Link variant="body2" to="/about" className="link">
            Sobre mí
          </Link>
          <Link variant="body2" to="/referencias" className="link">
            References
          </Link>
          <Link variant="body2" to="/Proyect" className="link">
            Proyect
          </Link>
        </NavbarLinksBox>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
