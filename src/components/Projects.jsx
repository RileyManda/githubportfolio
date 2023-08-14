import ProjectCard from "./ProjectCard";
import AppLogo from '../assets/app-logo.svg'

const  Projects = () => {
  return (
    <div>
    <ProjectCard
        applogo={AppLogo}
        title="Project 1"
        description="This is a description of project 1"
        demo="https"
        github="icon"
    />
    </div>
  );
};
export default Projects;
