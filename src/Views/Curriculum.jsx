import React from 'react';

const Curriculum = () => {
    return (
        <div>
            <div className="header">
                <h1 className="header-title">
                    Curriculum
                </h1>
            </div>
            <div className="after-header">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="black" points="0,0 100,0 0,100" />
                </svg>
            </div>
            <div className="instruction-content">
                <div className="image-box curriculum-image" />
                <div className="instruction-description">
                    <div className="description-content container">
                        <p>
                            Influencing the curriculum that students experience to better prepare them for the first day on the job is incredibly fulfilling.
                        </p>
                    </div>
                </div>
            </div>
            <div id="redAngle" className="after-header">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#EC494B" points="0,0 100,0 100,100" />
                </svg>
            </div>
            <div className="curriculum-section container">
                <div className="feedback-title">
                    <h1>From concept to implementation</h1>
                </div>
                <hr className="about-hr"/>
                <p className="about-content">
                    Crafting a curriculum is no easy task. I have had the pleasure of taking part in the build of the original Python curriculum, as well as help through the decision making process for overhauling it a second time.    
                </p>
                <p id="finalParagraph" className="about-content">
                    During our second iteration, I implemented concepts touching on Computer Science, such as data structures and algorithms, to better prepare students for competition with traditional college graduates. This was aimed at helping students discover deeper problem solving skills, and decrease fear when CS concepts would come up during technical interviews.
                </p>
                <div className="feedback-title">
                    <h1 id="manager-section">Python Curriculum Manager</h1>
                </div>
                <hr className="about-hr"/>
                <p className="about-content">
                    Now, as the Python curriculum manager, it is my team and I's duty to iterate on the previous changes, and fine tune the curriculum to meet modern industry needs, and prepare for shifts in industry trends.
                </p>
            </div>
            <br/>
        </div>
    );
}

export default Curriculum;