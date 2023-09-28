import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faCss3Alt, faGit } from '@fortawesome/free-brands-svg-icons';

export default function Profiles() {

    function toggleDown() {
        console.log("down")
    }

  return (
    <div className='profilePage wholePage'>
        <i className="fa fa-arrow-down" onClick={toggleDown}></i>
        <div className='profile-links'>
            <h3>SHARE</h3>
            <div className='aTags'>
                <a href="https://github.com/mohawwal">
                    <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/anileleye-awwal-878556145/">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/_mohawwal">
                    <i className="fa fa-twitter"></i>
                </a>
            </div>
        </div>
        <div className='selfProfile'>
            <img src="/profile-img.JPG" alt="" />
            <span>
                <h3>Awwal</h3>
                <p>Frontend Dev</p>
            </span>
            <div className='about'>
                <h4>Skills</h4>
                <div className='profileSkills'>
                    <FontAwesomeIcon className='skills a' icon={faGit} />
                    <FontAwesomeIcon className='skills b' icon={faReact} />
                    <FontAwesomeIcon className='skills c' icon={faJs} />
                    <FontAwesomeIcon className='skills d' icon={faCss3Alt} />
                </div>
            </div>
        </div>
    </div>
  )
}
