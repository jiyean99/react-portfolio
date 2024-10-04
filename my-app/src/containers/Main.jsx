/** @jsx jsx */
import Project from './Project.jsx'
import projects from '../assets/project.js'
import { MainWrap } from '../assets/index.style.js' // 더미 데이터 import

const Main = () => {

  return (
    <MainWrap>
      <h1>Projects</h1>
      {projects.map((project) => (
        <Project
          key={project.id}
          projectTitle={project.projectTitle}
          duration={project.duration}
          date={project.date}
          skill={project.skill}
          src={project.src}
        />
      ))}
    </MainWrap>
  )
}

export default Main
