import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import BigLoader from '../../components/BigLoader';

describe('<BigLoader/>', () => {

	it('exist ', () => {
		const wrapper = shallow(<BigLoader />);
		expect(wrapper.length).toEqual(1);
	});

	it('has 8 child ', () => {
		const wrapper = shallow(<BigLoader />);
		expect(wrapper.find('.circularG').length).toEqual(8);
	});

});