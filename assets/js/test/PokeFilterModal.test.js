import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import PokeFilterModal from '../components/PokeFilterModal';

describe('<PokeFilterModal/>', () => {

	it('exist ', () => {
		const wrapper = mount(<PokeFilterModal types={types.results}/>);
		expect(wrapper.length).toEqual(1);
	});

	it('has correct filter item + all', () => {
		const wrapper = mount(<PokeFilterModal types={types.results}/>);
		const filterCount = types.results.length + 1;
		expect(wrapper.find('.filter-item').length).toEqual(filterCount);
	});

	it('all filter click events', () => {
		var value;
    const wrapper = mount(<PokeFilterModal types={types.results} handleChangeFilter={function dummy(param){ value = param;}}/>);
    wrapper.find('.filter-item').at(0).simulate('click');
    expect(value).toEqual('all');
  });
});

const types = {"count":20,"previous":null,"results":[{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/1\/","name":"normal"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/2\/","name":"fighting"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/3\/","name":"flying"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/4\/","name":"poison"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/5\/","name":"ground"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/6\/","name":"rock"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/7\/","name":"bug"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/8\/","name":"ghost"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/9\/","name":"steel"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/10\/","name":"fire"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/11\/","name":"water"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/12\/","name":"grass"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/13\/","name":"electric"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/14\/","name":"psychic"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/15\/","name":"ice"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/16\/","name":"dragon"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/17\/","name":"dark"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/18\/","name":"fairy"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/10001\/","name":"unknown"},{"url":"http:\/\/pokeapi.co\/api\/v2\/type\/10002\/","name":"shadow"}],"next":null}; 