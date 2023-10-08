import React from 'react'
import { useParams } from 'react-router-dom'

function Tasks() {
  const {id}=useParams()
  return (
    <div>Tasks #{id}</div>
  )
}

export default Tasks
