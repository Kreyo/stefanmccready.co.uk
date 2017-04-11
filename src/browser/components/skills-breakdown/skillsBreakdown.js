import React from 'react';
import PropTypes from 'prop-types';

const SkillsBreakdown = ({ skillsArray, breakdownText }) => {
    const skillsList = (
        skillsArray.map((skill, i) =>
            <div className="col span_1_of_3 skills-breakdown__section" key={`skill-${skill.title}`}>
                <i className={`fa fa-${skill.icon}`} aria-hidden="true" />
                <p className="heading-small skills-breakdown__heading">{skill.title}</p>
            </div>
        )
    );

    return (
        <div className="skills-breakdown">
            <p className="text-large panel__description margin-bottom-large skills-breakdown__text">
                {breakdownText}
            </p>
            <div className="section group">
                {skillsList}
            </div>
        </div>
    );
};

SkillsBreakdown.propTypes = {
    skillsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
    breakdownText: PropTypes.string.isRequired,
};

export default SkillsBreakdown;