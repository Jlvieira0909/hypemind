import ProjectContainer from '../../Components/ProjectContainer/ProjectContainer'

const Projects = () => {
    return (
        <div className='ProjectsContainer'>
            <div className='ProjectsRow'>
                <ProjectContainer projectNumber="#1" projectName="HPMND EXHIBITION"/>
                <ProjectContainer projectNumber="#1" projectName="PORTFOLIO"/>
                <ProjectContainer projectNumber="#1" projectName="PORTFOLIO"/>
                <ProjectContainer projectNumber="#1" projectName="PORTFOLIO"/>
                <ProjectContainer projectNumber="#1" projectName="PORTFOLIO"/>
            </div>
        </div>
    )
}

export default Projects