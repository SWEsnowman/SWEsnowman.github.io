import React from 'react'
import { Grid2 } from '@mui/material'
import {skills} from './data.js'
function Skills() {
  return (
    <div>
        <Grid2 container spacing={2}>
            {skills.map((skill) => (
                <Grid2 size={6}>
                    <h1>{skill.name}</h1>
                {skill.tags.map((tag) => (
                    <span>{tag}</span>
                    ))}
                </Grid2>
        ))}
        </Grid2>
    </div>
  )
}

export default Skills