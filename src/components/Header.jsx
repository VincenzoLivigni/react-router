export default function footer() {
    return (
        <header>
            <nav className="navbar d-flex align-items-center">
                <div className='container'>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Homepage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/abouts">Abouts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contacts">Contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}