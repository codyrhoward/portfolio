import React from 'react'
import * as AiIcons from "react-icons/ai"

function Home() {
    return (
        <div className="home">
            <div className="head">
            <h1>About Me</h1>
            <div className="icons">
             <a href="https://github.com/codyrhoward?tab=repositories"><AiIcons.AiFillGithub /></a>
             <a href="https://www.linkedin.com/in/cody-howard-95a62310b/"><AiIcons.AiFillLinkedin /></a>
            </div>
            </div>
            <hr />
            <div className="body__container">
                <div className="image">
                <img src="https://i.ibb.co/QX0SPxM/headshot.jpg" />
                </div>
            <div className="paragraph">
                <p>I am a skilled software engineer, equipped with knowledge, insight, and a great attitude when it comes to collaboration and problem solving. Being a part of building a future that benefits the world of tech, and the people who use it, is what I am passionate about. </p>
            </div>
            
            </div>
        </div>
    )
}

export default Home 
