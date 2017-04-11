import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../panel';

describe('Panel', () => {
    let component;

    const render = (props) => {
        component = shallow(<Panel {...props} />);
    };

    const panelContent = (<h1>Test content!</h1>);

    it('should render panel content', () => {
        render({
            children: panelContent,
        });
        expect(component.find('h1').text()).to.equal('Test content!');
    });

    it('should render the correct modifier', () => {
        render({
            children: panelContent,
            modifier: 'alternative',
        });
        expect(component.find('article').hasClass('panel--alternative')).to.equal(true);
    });

    it('should render an advance button if one is specified', () => {
        render({
            children: panelContent,
            modifier: 'alternative',
            advanceButton: true,
        });
        expect(component.find('i').hasClass('fa-chevron-down')).to.equal(true);
    });

    it('should not render an advance button if one is not specified', () => {
        render({
            children: panelContent,
            modifier: 'alternative',
        });
        expect(component.contains('i')).to.equal(false);
    });
});
