import React from 'react'
import { Card } from '@mui/material'
function JobCard({job}) {
  return (
    <div>
        <Card>
            <h1>{job.title}</h1>
            <h3>{job.company}</h3>
            <h3>{job.location}</h3>
            <h3>{job.startDate} - {job.endDate && job.endDate} {job.endDate == null && 'Present'}</h3>
            <p>
                {job.description}
            </p>
        </Card>
    </div>
  )
}

export default JobCard