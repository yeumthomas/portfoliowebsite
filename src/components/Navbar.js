import React, { Component } from "react";
import { Link } from "react-scroll";
class Navbar extends Component {
    state = {};
    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="navbar">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                            activeClass="active"
                            to="main"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}>Main</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}>Experience</Link>
                        </li>   
                        {/*<li className="nav-item">
                            <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}>Contact</Link>
                        </li>   */}
                    </ul>   
                </div>
            </nav>
        )

    }
}

export default Navbar;