import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        borderTop: "1px solid #7B89A8",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer",  }}>
          <a target="blank" href="https://github.com/milagros-lab" >
            <GitHubIcon sx={{ mr: 2, color: "white", my: 1}} />    
          </a>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <a href="mailto:elichaur@gmail.com">
            <EmailIcon sx={{ mr: 2, color: "white", my: 1 }} />
          </a>          
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <a  target="blank" href="https://www.linkedin.com/in/milagros-chamorro/">
            <LinkedInIcon sx={{ mr: 2, color: "white", my: 1 }} />
          </a>         
        </Box>

      </Box>
    </Box>
  );
};

export default Footer;
