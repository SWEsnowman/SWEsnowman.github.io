import React from 'react'
import {Card, CardActionArea }from '@mui/material'
function ProjectCard( { project }) {
  return (
    <div>
        <Card>
            <CardActionArea
            href={project.link}>
            <h1>{project.title}</h1>
            <h3>{project.subtitle}</h3>
            <img src={project.image} alt="project" />
            <p>
                {project.description}
            </p>
            </CardActionArea>
        </Card>
    </div>
  )
}

export default ProjectCard