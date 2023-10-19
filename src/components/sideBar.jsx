import { Icon } from 'semantic-ui-react'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'

const SideBar = () => (
    <div className='nav-bar'>
            <Link className='logo' to='/'>
                <Icon className='sub-logo' src={'user'} alt="Steve Loew" />
            </Link>
        <nav>
            <NavLink exact='true' className={({isActive}) => isActive ? 'active' : ''} to='/'>
                <Icon disabled name='user' />
                {/* <FontAwesomeIcon icon={faHome} color='#4d4d4e'/> */}
            </NavLink>
            <NavLink exact='true' className={({isActive}) => isActive ? 'active about-link' : 'about-link'}  to='/about'>
                {/* <FontAwesomeIcon icon={faUser} color='#4d4d4e'/> */}
            </NavLink>
            <NavLink exact='true' activeclassname='active' className={({isActive}) => isActive ? 'active contact-link' : 'contact-link'} to='/contact'>
                {/* <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/> */}
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/stephen-loew-bbbb68138/'>
                    {/* <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' /> */}
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/scloew' >
                    {/* <FontAwesomeIcon icon={faGithub} color='#4d4d4e' /> */}
                </a>
            </li>
        </ul>
    </div>
)

export default SideBar