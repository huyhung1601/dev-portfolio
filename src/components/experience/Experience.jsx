import React from 'react'
import './experience.scss'
const Experience = () => {
    return (
        <div className='experience'>
            <div className="jobs">
                <div className="job">
                    <h3 className="company">TuteHub (Jun 2021 - Oct 2021)</h3>
                    <h6>React Frontend Developer (Casual)</h6>
                    <ul className="job-desc">
                        <li><p>Built and developed functionality for a English training platform</p></li>
                        <li><p>Collaborated with a backend enginer on buildings APIs</p></li>
                        <li><p>Tested and Debugged</p></li>
                    </ul>
                </div>
                <div className="job">
                    <h3 className="company">Upwork.com (2019 - current)</h3>
                    <h6>Frontend Freelancer</h6>
                    <ul className="job-desc">
                        <li><p>Built and developed responsive landing pages</p></li>
                        <li><p>Built and Fetch Apis</p></li>
                        <li><p>Design and build UI components</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
