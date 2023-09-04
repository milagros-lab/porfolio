import { Box, Typography } from "@mui/material";
import { projects } from "../constants/project";
import Project from "./Project";


const Proyectos = () => {
  return (
    <Box id="experience">
      <Typography
        variant="h4"
        sx={{ color: "white", textAlign: "center", mb: 2 }}
      >       
        MIS PROYECTOS
      </Typography>
      <Box 
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",          
        }}
      >
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            img={project.image}
            enlace= {project.enlace}
            codigo= {project.codigo}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Proyectos;
