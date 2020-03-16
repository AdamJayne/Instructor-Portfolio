import React from 'react';

const Experience = (props) => {
    return (
        <div>
            <div className="header">
                <h2 className="header-title">
                    Experience
                </h2>
            </div>
            <div className="after-header">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="black" points="0,0 100,0 0,100" />
                </svg>
            </div>
            <div className="experience-content">
                <div className="image-box experience-image" />
                <div className="learning-description">
                    <div className="description-content container">
                        <p>
                            From startups to contract work, the industry has given me a relevant perspective on teaching individuals software and web development.
                        </p>
                        <p className="final-line">
                            
                        </p>
                    </div>
                </div>
            </div>
            <div id="redAngle" className="after-header">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#EC494B" points="0,0 100,0 100,100" />
                </svg>
            </div>
            <div className="feedback-section container">
                <div className="feedback-title">
                    <h1>Language Experience</h1>
                </div>
                <hr className="about-hr"/>
                <div className="certification-list">
                    <div className="language-item">
                        <div id="javascriptImage" className="certification-image" />
                        <div className="certification-title">
                            <p>Javascript</p>
                        </div>
                    </div>
                    <div className="language-item">
                        <div id="pythonImage" className="certification-image" />
                        <div className="certification-title">
                            <p>Python</p>
                        </div>
                    </div>
                    <div className="language-item">
                        <div id="swiftImage" className="certification-image" />
                        <div className="certification-title">
                            <p>Swift</p>
                        </div>
                    </div>
                </div>
                <div className="feedback-title">
                    <h1>
                        Employment Experience
                    </h1>
                </div>
                <hr className="about-hr" />
                <p className="about-content">
                    I have worked at two startups, and completed contract work. If you would like to know more about these companies, check out my Linkedin account! If you want to see some of my work, check out my Github!
                </p>
                <div className="social-links">
                    <a className="social-icon" href="https://www.linkedin.com/in/adamjayne402/" target="_blank">
                        <div id="linkedin"></div>
                    </a>
                    <a className="social-icon" href="https://github.com/AdamJayne" target="_blank">
                        <div id="github"></div>
                    </a>
                </div>
                <br/>
                <br/>
            </div>
        </div>
    );
}
 
export default Experience;