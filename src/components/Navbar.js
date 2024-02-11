import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="navbar border-bottom border-body navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand mx-10  " href="/"><span class="badge fs-5 bg-light text-dark rounded-pill">PressPulse</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/politics">Politics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/science">Science</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar