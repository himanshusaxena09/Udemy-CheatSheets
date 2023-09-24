import React, { useState } from "react";
import "./Navbar.css"
import { FaLinkedinIn, FaGithubSquare, FaCartArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <h2><span>U</span>demy</h2>
                </div>

                {/* 2nd menu part  */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        
                        <li>
                        <Link to="/categories">Categories</Link>
                        </li>
                        <li>
                            <Link to="/about">Udemy Business</Link>
                        </li>
                        <li>
                            <Link to="/service">Teach on Udemy</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li><a href="https://www.udemy.com/cart/" target="_thapa"><FaCartArrowDown className="card" /></a></li>
                        <li><a href="https://www.linkedin.com/in/himanshu-saxena9001" target="_thapa"><FaLinkedinIn className="linkedin" /></a></li>
                        <li><a href="https://github.com/himanshusaxena09" target="_thapa"><FaGithubSquare className="github" /></a></li>
                    </ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu /></a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;