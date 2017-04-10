import React from 'react';
import PropTypes from 'prop-types';

const SkillsBreakdown = ({ skillsArray, breakdownText }) => {

    const skillsList = (
        skillsArray.map((skill, i) => 
            <div className="col span_1_of_3 skills-breakdown__section">
                <i className={`fa fa-${skill.icon}`} aria-hidden="true"></i>
                <p className="heading-small skills-breakdown__heading">{skill.title}</p>
            </div>
        )
    );

    return(
        <div className="skills-breakdown">
            <p className="text-large panel__description margin-bottom skills-breakdown__text">
                5 years as a bedroom coder and working in the industry has taight me a few things, below is the simplest way to show the some of the skills that I do have:
            </p>
            <div className="section group">
                {skillsList}
            </div>
        </div>
    );
};

export default SkillsBreakdown;