import { Link } from "react-router-dom";
import "./ProjectContainer.css";

const ProjectContainer = (props) => {
  return (
    <Link
      href="/projects"
      className="ProjectLabel"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="ProjectsWrapper">
        <img className="ProjectLogo" src="" alt="">
          {props.ProjectLogo}
        </img>
        <h2 className="ProjectNumber">
          HypeMind.Inc Drop: {props.projectNumber}
        </h2>
        <h1 className="ProjectName">{props.projectName}</h1>
        <img className="ProjectBackground" src="" alt="">
          {props.ProjectBackground}
        </img>
      </div>
    </Link>
  );
};

export default ProjectContainer;
