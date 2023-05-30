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
    <Card sx={{ maxWidth: 375, margin: "1rem", borderRadius: "20px" }}>
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
            <Button
              target="blank"
              href={enlace}
              size="small"
              style={{ backgroundColor: " #330052" }}
              variant="contained"
            >
              VER DEMO
            </Button>
            <Button
              target="blank"
              href={codigo}
              size="small"
              style={{ backgroundColor: " #330052" }}
              variant="contained"
            >
              VER CODIGO
            </Button>
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
