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
      children: panelContent
    });
    expect(component.find('h1').text()).to.equal('Test content!');
  });
});