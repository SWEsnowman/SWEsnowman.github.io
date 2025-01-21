import React from 'react'
import {jobs} from './data.js'
import JobCard from './JobCard'
import { Grid2 } from '@mui/material'
function JobExperience() {
  return (
    <div>
        <Grid2 container spacing={2}>
            {jobs.map((job) => (
                 <Grid2 size={6}>
                <JobCard job={job} key={job.title} />
                </Grid2>
            ))}
        </Grid2>
    </div>
  )
}

export default JobExperience