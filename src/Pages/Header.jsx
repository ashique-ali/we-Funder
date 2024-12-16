import React from 'react'
import { Link } from 'react-router-dom';
import headerLogo from '../assets/Images/logo.png';

function Header() {
    return (
        <section>
            <div className='container-fluid px-4'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                            <div className='d-flex justify-content-between w-100 align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <Link to="/">
                                            <img src={headerLogo} alt='Header Logo' />
                                        </Link>
                                    </div>
                                    <div className="collapse navbar-collapse justify-content-center">
                                        <ul className="navbar-nav mb-2 mb-lg-0">
                                            <li className="nav-item px-3">
                                                <a className="nav-link text-dark" href="#">
                                                    Explore
                                                </a>
                                            </li>
                                            <li className="nav-item px-3">
                                                <a className="nav-link text-dark" href="#">
                                                    Search
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <a className="nav-link me-3 text-dark" href="#">
                                        Raise Money
                                    </a>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-white dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Learn
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Option 1
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Option 2
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <a href="#" className="me-3">
                                        <i className="bi bi-bell fs-5 text-dark"></i>
                                    </a>

                                    <div>
                                        <img
                                            src="https://via.placeholder.com/30"
                                            alt="Profile"
                                            className="rounded-circle"
                                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Header