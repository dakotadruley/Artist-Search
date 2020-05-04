import React from 'react';
import { shallow } from 'enzyme';
import ArtistList from './ArtistList.js';

describe('Artist', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<ArtistList
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
