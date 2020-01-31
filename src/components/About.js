import React, { Component } from "react";

class About extends Component {
    state = {};
    render() {
        return (
        
        <div className="about-section" id="about">
            <h1 className="about-title">▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬  1. About Me</h1>
                <div className="about-halfhalf">
                    <div className="about-pictureframe">
                        <img className="about-picture" src="propic.jpg" alt="My Profile Picture"></img>
                    </div>
                    <div className="about-bio">
                        <h6 className="bio-header">Hi, I'm Thomas, a computer science</h6>
                        <p1 className="bio-body">major at <a className="school-link" target="_blank" href="https://www.rice.edu/">Rice University</a> in Houston, TX 
                            with an interest in many applications but mostly in web development. I came to love building 
                            websites after discovering its connection to another passion of mine: 
                            composing classical music (samples are below!). <br/><br/>All in all, 
                            this is what I love and I hope to make a career out of this very soon.</p1>
                    </div>
                </div>
        </div>);
    }
}


export default About;
