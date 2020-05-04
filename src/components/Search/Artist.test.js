import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist.js';

describe('Artist', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Artist
      id='string'
      name={'dakota superstar'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
