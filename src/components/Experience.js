import React, { Component } from "react";

class Experience extends Component {
    state = {};
    render() {
        return (
        
        <div className="experience-section" id="experience">
            <h1 className="experience-title">2. Featured Experiences  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬</h1>
            <div className="experience12">
                <div className="experience1-left">
                    <div className="experience1-title">
                        <div className="experience1-titleleft">< h3 className="experience1-title-pt1">Project: </h3></div> 
                        <div className="experience1-titleright">< h3 className="experience1-title-pt2">Houston Deserted</h3></div>
                    </div>
                    <h6 className="experience1-subtitle">2nd Place Overall Winner @ Rice Datathon, Jan 2020</h6>
                    <ul className="experience1-textbox">
                        <li className="experience1-text">Analyzed existing data on food deserts in Houston to predict the density at which food deserts would exist in other sections of the surrounding Houston area.</li>
                        <li className="experience1-text">Programmed a website to organize data and aid in user visualzation of data.</li>
                    </ul>
                    <div className="exp1-holder">
                    <a target="_blank" className="experience1-piclink" href="https://www.houstondeserted.netlify.com"><img className="experience1-pic" src="houstondeserted.png" alt="Houston Deserted" /></a>
                    </div>
                    <div className="technologies-holder"><p className="technologies">Python Jupyter Excel KML HTML CSS</p></div>
                </div>
                <div className="experience2-right">
                    <div className="experience1-title">
                        <div className="experience2-titleleft">< h3 className="experience2-title-pt1">Externship: </h3></div> 
                        <div className="experience2-titleright">< h3 className="experience2-title-pt2">Google</h3></div>
                    </div>
                    <div>
                    <h6 className="experience2-subtitle">Experienced Google, Jan 2020</h6>
                    <ul className="experience1-textbox">
                        <li className="experience1-text">Conducted informational interviews with Stadia and Google Assistant UX designers, back-end SWE, and Google Maps and Google Nest developers to understand behind-the-scenes work.</li>
                        <li className="experience1-text">Introduced to React.JS framework and jumpstarted my track into web development.</li>
                        <li className="experience1-text">Gained an eye towards what Google sees in its employees, giving me another perspective at the what skills matter.</li>
                    </ul>
                    <div className="technologies-holder-google"><p className="technologies">React HTML CSS JS</p></div>
                    </div>
                </div>
            </div>
        </div>);
    }
}


export default Experience;