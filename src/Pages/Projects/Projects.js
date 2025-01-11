import ProjectContainer from "../../Components/ProjectContainer/ProjectContainer";
import "./Projects.css";
import Project01BG from "../../Images/Project01BG.jpg";

const Projects = () => {
  return (
    <div className="ProjectsContainer">
      <div className="ProjectsRow">
        <ProjectContainer
          projectNumber="#1"
          projectName="HPMND EXHIBITION"
          ProjectBackground={Project01BG}
        />
        <ProjectContainer projectNumber="#2" projectName="PORTFOLIO" />
        <ProjectContainer projectNumber="#3" projectName="PORTFOLIO" />
        <ProjectContainer projectNumber="#4" projectName="PORTFOLIO" />
        <ProjectContainer projectNumber="#5" projectName="PORTFOLIO" />
        <ProjectContainer projectNumber="#6" projectName="PORTFOLIO" />
      </div>
    </div>
  );
};

export default Projects;
