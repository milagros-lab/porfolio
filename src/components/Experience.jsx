import { Box, Typography } from "@mui/material";
import { projects } from "../constants/project";
import Project from "./Project";
import Stack from "./Stack";

const Experience = () => {
  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto", my: 12 }} id="experience">
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

      <Stack />
    </Box>
  );
};

export default Experience;
