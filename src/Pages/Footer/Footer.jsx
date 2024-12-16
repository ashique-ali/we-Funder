import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import footerLogo from '../../../src/assets/Images/footerLogo.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white text-muted py-4">
            <div className="container-fluid px-5">
                <div style={{ borderTop: "1px solid #ddd" }}></div>
                <div className="row mt-4">
                    <div className="col-md-6 mb-4">
                        <div className="d-flex align-items-center mb-3">
                            <img
                                src={footerLogo}
                                alt="Logo"
                                className="me-3"
                            />
                            <div>
                                <h5 className="fw-bold mb-1">
                                    Wefunder is a Public Benefit Corporation.
                                </h5>
                                <p>We’re here to fix capitalism.</p>
                            </div>
                        </div>
                        <button className="btn btn-outline-primary fw-bold px-5 p-4">
                            2012–2024 IMPACT REPORT
                        </button>
                    </div>

                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li>Our Story</li>
                                    <li>Jobs</li>
                                    <li>Blog</li>
                                    <li>VIP Members</li>
                                    <li>Get/Give $</li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled">
                                    <li>Fundraising Playbook</li>
                                    <li>Investor FAQ</li>
                                    <li>Founder FAQ</li>
                                    <li>Guides</li>
                                    <li>Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4" style={{ borderTop: "1px solid #ddd" }}></div>
                <div className="d-flex justify-content-between mt-4">
                    <div className="col-lg-7">
                        <p>Wefunder means Wefunder Inc and its wholly owned subsidiaries: Wefunder Advisors LLC, Capitalize Advisors LLC, and Wefunder Portal LLC. This page is hosted by Wefunder Inc.</p>
                        <p>Wefunder Portal LLC is a member of the Financial Industry Regulatory Authority (FINRA). Wefunder Portal LLC is located in Gun Barrel City, Texas.</p>
                    </div>
                    <div className="col-lg-5">
                        <div className="d-flex gap-3 text-dark justify-content-end">
                            <Link className="text-dark fs-4">
                                <FaFacebookSquare />
                            </Link>
                            <Link className="text-dark fs-4">
                                <RiTwitterXFill />
                            </Link>
                            <Link className="text-dark fs-4">
                                <FaLinkedin />
                            </Link>
                            <Link className="text-dark fs-4">
                                <IoLogoYoutube />
                            </Link>
                            <Link className="text-dark fs-4">
                                <FaInstagram />
                            </Link>
                            <Link className="text-dark fs-4">
                                <FaPinterest />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="text-center small fw-bold">
                        IMPORTANT DISCLOSURES | TERMS | PRIVACY | COOKIES
                    </div>
                    <div>
                        <select className="form-select w-auto">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
