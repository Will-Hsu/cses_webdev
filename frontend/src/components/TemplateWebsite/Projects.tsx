import React from 'react';
import { Container, Grid} from '@mui/material';
import { tempStyles } from './styles';
import {projects, Project} from './ProjectsInfo';


const ProjectCard: React.FC<Project> = ({ name, description, image }) => {
  return (
    <Grid item xs={12} sm={4} sx={{justifyContent: 'center'}}>
      <img 
        src = {image}
        style={{width: '100%'}}
        alt = {'img'}
        />
      <p style={{ color: 'white', fontSize: 'clamp(15px, 3vw, 20px)', margin:'5px 0' }}>
        {name}
      </p>
      <p style={{ color: 'white', fontSize: 'clamp(10px, 3vw, 15px)', margin:'0' }}>
        {description}
      </p>
    </Grid>
  );
}

const Projects = () => {
  const styles = tempStyles();
  return (
    <Container disableGutters maxWidth='xl' sx={styles.projlist}>
      <h1 style={{...styles.subtitle, paddingBottom:'20px', margin:'0px'}}
      >
        Current Projects
      </h1>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/** I'll prob do the arrray map here */}
        {projects.map(project => (
          <ProjectCard 
          id = {project.id}
          name = {project.name}
          description = {project.description}
          image = {project.image}
          />
        )) }
      </Grid>
    </Container>
  );
};
export default Projects;