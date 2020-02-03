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
                        <p1 className="bio-body">Hi, I'm Thomas, a computer science major at <a className="school-link" target="_blank" href="https://www.rice.edu/">Rice University</a> in Houston, TX 
                            with an interest in many applications but mostly in web development. I came to love building 
                            websites after discovering its connection to another passion of mine: 
                            composing classical music. Through these thematic connections and the help of some very special 
                            people, I have embarked on my journey towards my dream of becoming a full-fledged front-end software engineer. 
                            <br/><br/>All in all, this is what I love and I couldn't be happier.</p1>
                    </div>
                </div>
        </div>);
    }
}


export default About;
