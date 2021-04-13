import React from 'react'
import {languages,skills} from '../components/data/resume_data'
import Bar from './Bar'

const Resume = ()=>{
    return (
        <div>
            <div className="container resume">
                <div className="row">
                    <div className="col-lg-6 resume-card">
                        <h4 className="resume-card__heading">
                            Education
                        </h4>
                        <div className="resume-card__body">
                            <h5 className="resume-card__title">
                                Computer Science Engineering
                            </h5>
                            <p className="resume-card__name">
                                Kalinga Institue Of Industrial Technology(2018-2022)
                            </p>
                            <p className="resume-card__details">
                                I am currently persuing B.tech in Computer Science Engineering from KIIT University.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 resume-card">
                        <h4 className="resume-card__heading">
                            Experience
                        </h4>
                        <div className="resume-card__body">
                            <h5 className="resume-card__title">
                                Internship at Highradius 
                            </h5>
                            <p className="resume-card__name">
                                <u>Full Stack Internship (1 Jan 2021 - 22 March 2021)</u>
                            </p>
                            <p className="resume-card__details">
                                Build a <b>Bill Management App</b> for account receivables department for front end we use <b>ReactJS</b> and and to create API we use servlets and as backend <b>JAVA</b> was used with<b>MYSQL</b>  as database.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 resume-languages">
                        <h5 className="resume-language__heading">
                            Languages and Framework
                        </h5>
                        <div className="resume-language__body mt-3">
                            {
                                languages.map(language=> 
                                <Bar value={language}/>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 resume-languages">
                        <h5 className="resume-language__heading">
                            Soft Skills
                        </h5>
                        <div className="resume-language__body mt-3">
                            {
                                skills.map(skill=>
                                <Bar value={skill}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;