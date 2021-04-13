import React from 'react'
import Skillcard from '../components/Skillcard'
import skills from './data/about_data'

const About = ()=>{
    return (
        <div className="about">
            <h6 className="about__intro">
                I'm an avid learner, who is passionate towards his goal and loves to solve problems.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill=>
                            <Skillcard skill={skill}/>
                        )
                    }
                </div>
            </div> 
        </div>
    )
}

export default About;