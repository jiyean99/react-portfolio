import React from 'react'
import { ProjectButton } from '../assets/index.style.js'

const Project = ({ projectTitle, duration, date, skill, src }) => {

  const handleClick = () => {
    window.open(`${src}`, '_blank')
  }

  return (
    <ProjectButton className="project" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h3>{projectTitle}</h3>
      <p>프로젝트 제작 기간: {duration}</p>
      <p>프로젝트 제작일: {date}</p>
      <p>사용 기술: {skill.join(', ')}</p>
    </ProjectButton>
  )
}

export default Project
