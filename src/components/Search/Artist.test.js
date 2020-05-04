import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist.js';

describe('Artist', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Artist
      name={'dakota superstar'}
      url={'url'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
