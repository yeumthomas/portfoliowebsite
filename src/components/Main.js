import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
class Main extends Component {
    state = {};
    render() {
        return (
            <div className="main-section" id="main">
                <div className="greeting-div">
                    <h6 className="greeting">Hi, my name is</h6>
                    <h1 className="name">Thomas Yeum.<br/></h1>
                </div>
                <div className="introduction">
                    <p1>I am a computer science major at Rice University<br/></p1>
                    <p1>working towards becoming a software engineer<br/></p1>
                    <p1>with a specialization in web development and data analytics.</p1>
                </div>
                <div className="bar">
                    <p1 className="the_bar">_________________________________________________</p1>
                </div>
                <div className="social-container">
                    <a target="_blank" href="https://www.linkedin.com/in/yeumthomas/"
                    className="social-logo">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a target="_blank" href="https://github.com/yeumthomas"
                    className="social-logo">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a target="_blank" href="https://www.facebook.com/yeumthomas"
                    className="social-logo">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/thomasyeum/"
                    className="social-logo">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
            
            );
    }
}


export default Main;
