import React from 'react';
import { shallow } from 'enzyme';
import SearchDisplay from './SearchDisplay.js';

describe('SearchDisplay', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<SearchDisplay
      name={'dakota superstar'}
      onChange={() => {}}
      onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
