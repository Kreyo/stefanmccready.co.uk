import React from 'react';
import { shallow } from 'enzyme';

import IconBar from '../iconBar';

describe('IconBar', () => {
    let component;

    const render = (props) => {
        component = shallow(<IconBar {...props} />);
    };

    it('should render the menu button', () => {
        render({
            socialLogo: 'linkedin',
            socialLink: 'https://www.linkedin.com/in/stefan-mccready-11507297/',
            menuText: 'MENU',
        });
        expect(component.find('span').text()).to.equal('MENU');
    });

    it('should create a link to the url supplied', () => {
        render({
            socialLogo: 'linkedin',
            socialLink: 'https://www.linkedin.com/in/stefan-mccready-11507297/',
            menuText: 'MENU',
        });
        expect(component.html()).to.include('https://www.linkedin.com/in/stefan-mccready-11507297/');
    });
});
