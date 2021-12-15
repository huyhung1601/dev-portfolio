import React from 'react';
import './education.scss';

const Education = () => {
    return (
        <div className='education'>
            <h2 className="education-title">My Education</h2>
            <div className="uni">
                <h4>Australian Institute of Higher Education (2017-2020) </h4>
                <p>Bachelor of Business Information System</p>
            </div>
            <br />
            <div className="uni">
                <h4>University of Western Sydney (2014-2015)</h4>
                <p>Master of Business and Commerce</p>
            </div>
            <br />
            <div className="uni">
                <h4>University of Economics Ho Chi Minh city (2009-2013)</h4>
                <p>Bachelor of Finance</p>
            </div>
            
        </div>
    )
}

export default Education
