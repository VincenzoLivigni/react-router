import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="container pt-3 pb-1">
                <div className="row">
                    <div className="col-4">
                        <p>Lorem ipsum dolor sit amet consectetur Mollitia libero reiciendi sit amet consectetur</p>
                    </div>

                    <div className="col-2">
                        <ul className="list-unstyled">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Homepage</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/abouts">Abouts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-2">
                        <ul className="list-unstyled">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">Privacy Policy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Termini e Condizioni</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="social col-4">
                        <ul className="list-unstyled d-flex gap-3">
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    <i className="bi bi-facebook"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">
                                    <i className="bi bi-instagram"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    <i class="bi bi-twitter-x"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    <i class="bi bi-pinterest"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    <i class="bi bi-telegram"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">
                                    <i class="bi bi-linkedin"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </footer>
    )
}