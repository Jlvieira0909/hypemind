import { Link } from 'react-router-dom'
import './ProjectContainer.css'

const ProjectContainer = (props) => {
    return(
        <Link href = "/projects" className="ProjectLabel" target="_blank" rel="noopener noreferrer">
            <div className="ProjectsWrapper">
                <h2 className="ProjectNumber">
                    {props.projectNumber}
                </h2>
                <h1 className="ProjectName">
                    {props.projectName}
                </h1>
            </div>
         </Link>
    )
}

export default ProjectContainer