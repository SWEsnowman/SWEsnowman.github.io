import React from 'react'
import ProjectCard from './ProjectCard'
import {projects} from './data.js'
function Projects() {
  return (
    <div>
        <h1>Apps I've Built</h1>
        {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
        ))}
        <p>
            Here are a few projects I've worked on recently. Want to see more?
        </p>

    </div>
  )
}

export default Projects