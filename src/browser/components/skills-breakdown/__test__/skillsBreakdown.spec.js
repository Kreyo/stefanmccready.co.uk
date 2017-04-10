import React from 'react';
import { shallow } from 'enzyme';

import SkillsBreakdown from '../skillsBreakdown';

describe('Skills Breakdown', () => {
    let component;

    const render = (props) => {
        component = shallow(<SkillsBreakdown {...props} />);
    };

    const breakdownCopy = 'Hello!';

    const skillsList = [
        { icon: 'code', title: 'WEBSITE-DEVELOPMENT' },
        { icon: 'pencil', title: 'WEBSITE-DESIGN' },
        { icon: 'universal-access', title: 'ACCESSIBILITY' },
    ];

    it('should render breakdown text', () => {
        render({
            skillsArray: skillsList,
            breakdownText: breakdownCopy,
        });
        expect(component.find('.skills-breakdown__text').text()).to.equal('Hello!');
    });

    it('should render all section specified in skillsArray', () => {
        render({
            skillsArray: skillsList,
            breakdownText: breakdownCopy,
        });
        expect(component.find('.skills-breakdown__section')).to.have.length(3);
    });
});
