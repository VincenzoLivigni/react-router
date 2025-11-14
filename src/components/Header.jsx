import { NavLink } from "react-router-dom"

export default function footer() {
    return (
        <header>
            <nav className="navbar d-flex align-items-center">
                <div className='container'>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Homepage</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/abouts">Abouts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}