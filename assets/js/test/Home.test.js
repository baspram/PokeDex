import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Home from '../pages/Home';

describe('<Home/>', () => {

	it('exist ', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.length).toEqual(1);
	});

	it('has PokeFitler & PokeList', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.find('div').children().length).toEqual(2);
	});
});