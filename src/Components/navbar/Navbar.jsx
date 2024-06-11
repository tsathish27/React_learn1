import './nav.css'
const navbar = () => {
    return (
        <div className='nav'>
            <div className='nav__logo'>learn_react</div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li className='nav-contact'>Contact</li>
                <li><i className="fas fa-user"></i></li> {/* Add account icon here */}
            </ul>
        </div>
    )
}

export default navbar
