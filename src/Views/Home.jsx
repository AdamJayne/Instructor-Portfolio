import React from 'react';

const Home = () => {

    return (
        <div id="home">
            <section className="home-banner">
                <div className="innerBox container">
                    <div className="home-intro">
                        <div className="home-intro-textbox">
                            <h1>Hello there!</h1>
                            <h1>My name is Adam Jayne</h1>
                            <h1>I am a Staff Instructor at Eleven Fifty Academy</h1>
                        </div>
                    </div>
                    <div className="home-image">
                        <div className="my-face" />
                    </div>
                </div>
            </section>
            <div className="after-box">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="black" points="0,0 100,0 0,100" />
                </svg>
            </div>
            <section id="aboutMe" className="about-me container">
                <div className="about-text">
                    <h1 className="about-title">
                        About Me
                    </h1>
                    <hr className="about-hr" />
                    <p className="about-content">
                        Growing up in a small town, I always had my hands on a keyboard, even if I wasn’t supposed to. My grandfather and I also managed a herd of Angus cattle, which eventually won the prestigious Champion Angus Heifer at a local county fair. After giving college a try and discovering it didn’t fit my learning style, I found Eleven Fifty Academy. Twelve weeks post-graduation, and 18 months of working in the industry, I came back to school to become an instructor.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;