import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ()=> {
    return (
        <div className='SidebarWrapper'>
            <img className='Logo' src='' alt=''></img>
            <h1 className='FlavorText'>We Everywhere</h1>
            <Link className='AboutUsLink'></Link>
            <a className='SocialsLink' href=''></a>
        </div>
    )
}

export default Sidebar