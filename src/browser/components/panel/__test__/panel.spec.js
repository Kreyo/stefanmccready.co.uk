import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'expect';
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

    it('should render an advance button is specified', () => {
        render({
            children: panelContent,
            modifier: 'alternative',
            advanceButton: true,
        });
        expect(component.find('i').hasClass('fa-chevron-down')).to.equal(true);
    });

    it('should render an icon bar when specified', () => {
        render({
            children: panelContent,
            modifier: 'alternative',
            iconBar: true,
        });
        expect(component.find('span').text()).to.equal('MENU');
    });
});
