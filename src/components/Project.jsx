import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";

const Project = ({ title, description, tags, img, enlace, codigo }) => {
  return (
    <Card sx={{ maxWidth: 375, margin: "1rem" }}>
      <CardActionArea>
        <CardMedia component="img" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

          <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            mx: "auto",
            mt: 3,
            mb: 3,
          }}
           >
            <a href={enlace} >
              <Button
                size="small"               
                style={{ backgroundColor: "rgba(0,199,255,255)" }}
                variant="contained"
              >
              VER DEMO
              </Button> 
            </a>

            <a href={codigo}>
              <Button
                size="small"
                style={{ backgroundColor: "rgba(0,199,255,255)" }}
                variant="contained"
              >
              VER CODIGO
              </Button> 
            </a>
          </Box>          
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ display: "flex", flexDirection: "column" }}>        
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
            mb: 2,
          }}
        >
          {tags.map((tag) => (
            <Chip label={tag} variant="outlined" key={tag} />
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default Project;
