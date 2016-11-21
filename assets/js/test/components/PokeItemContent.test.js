import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import PokeItemContent from '../../components/PokeItemContent';

describe('<PokeItemContent />', () => {

	it('exist', () => {
		const wrapper = shallow(<PokeItemContent name={name} />)
		expect(wrapper.length).toEqual(1);
	});

	it('has pokemon image', () => {
		const wrapper = shallow(<PokeItemContent name={name} />)
		expect(wrapper.find('img').length).toEqual(1);
	});

	it('has pokemon name', () => {
		const wrapper = shallow(<PokeItemContent name={name} />)
		expect(wrapper.find('h1').length).toEqual(1);
	});

});