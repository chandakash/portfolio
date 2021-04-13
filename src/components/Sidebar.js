import React from 'react'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import akash from '../assets/akash.jpg'
import linkedin from '../assets/icons/linkedin.svg'
import hackerrank from '../assets/icons/hackerrank.svg'
// import resume from '../assets/resume.pdf'
const Sidebar = ()=> {

    const handleEmailMe=()=>{
        window.open("mailto:akashchand1703@gmail.com")
    }
        return (
            <div className="sidebar">
                <img src={akash} alt="avatar" className="sidebar__avatar"/>
                <div className="sidebar__name">Akash <span>Chand</span> </div>
                <div className="sidebar__item sidebar__title">Web Developer</div>
                <a href="https://drive.google.com/drive/folders/1sEwqF6bLi4Ck2ikMNUYXTukEbqYZlyst?usp=sharing" target="_blank" >
                    <div className="sidebar__item sidebar__resume">
                        <img src={tie} alt="" className="sidebar__icon"/>Download Resume
                    </div>
                </a>
                <figure className="sidebar__social-icons my-2">
                    <a href="https://www.linkedin.com/in/akashchand1703/" ><img src={linkedin} alt="linkdin" className="sidebar__icon mr-3"/></a>
                    <a href="https://www.hackerrank.com/akashchand1703?hr_r=1" ><img src={hackerrank} alt="hackerank" width='40px' height='40px'/></a>
                </figure>

                <div className="sidebar__contact">
                    <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/chandakash" ><img src={github} alt="github" className="sidebar__icon mr-3"/>github</a>
                    </div>
                    <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3"/>Uttrakhand, India
                    </div>
                    <div className="sidebar__item">akashchand1703@gmail.com</div>
                    <div className="sidebar__item">8393897389/7894968602</div>
                </div>

                <div>
                    <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email me</div>
                </div>
            </div>
        )
}

export default Sidebar;
